import * as React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useCallback, useEffect, useState} from 'react';
import {ApiUpdDishes} from '../../types';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {fetchOneDish, updateDishParam} from '../../containers/dishesSlice/dishesThunks.ts';
import {fetchLoadingOneDish, getOneDish, updatesDishParametrs} from '../../containers/dishesSlice/dishesSlice.ts';
import DefaultPicture from '../../images/def-pic.jpg';
import ButtonSpinner from '../Spinners/ButtonSpinner';
import SpinnerBig from '../Spinners/SpinnerBig.tsx';

const EditDishForm = () => {
  const dispatch = useAppDispatch();
  const getOneDishFromServer = useAppSelector(getOneDish);
  const updateDishValue = useAppSelector(updatesDishParametrs);
  const loadingOneDish = useAppSelector(fetchLoadingOneDish);
  const navigate = useNavigate();
  const {id} = useParams() as { id: string };
  const [dish, setDish] = useState<ApiUpdDishes>({
    title: '',
    price: '',
    photo: '',
  });

  const inputSet = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setDish((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const photoPreview = () => (
    <img
      src={dish.photo === '' ? DefaultPicture : dish.photo}
      alt={dish.photo === '' ? 'default profile picture' : 'Profile photo'}
      style={{width: '100px', height: '100px'}}
    />
  );

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await (dispatch(updateDishParam({id, dish})));
    navigate('/admin');
  };

  const updateOneLoadDish = useCallback(() => {
    if (getOneDishFromServer) {
      setDish(getOneDishFromServer);
    } else {
      console.error('Data no available!');
    }
  }, [getOneDishFromServer]);

  useEffect(() => {
    dispatch(fetchOneDish(id));
  }, [dispatch, id]);

  useEffect(() => {
    void updateOneLoadDish();
  }, [getOneDishFromServer, updateOneLoadDish]);

  return (
    <>
      <div className="d-flex justify-content-center">
        {loadingOneDish ? (<SpinnerBig/>) : (
          <form onSubmit={onFormSubmit} className="w-50 mt-5">
            <div className="mb-3 d-flex align-items-center gap-4">
              <span className="fw-bold">Title</span>
              <input
                id="title"
                type="text"
                name="title"
                value={dish.title}
                onChange={inputSet}
                className="form-control w-50"
                required
                autoFocus/>
            </div>
            <div className="mb-3 d-flex align-items-center gap-4 ">
              <span className="fw-bold">Price</span>
              <input
                id="price"
                type="text"
                name="price"
                value={dish.price}
                onChange={inputSet}
                className="form-control w-50"
                required/>
            </div>
            <div className="mb-3 d-flex align-items-center gap-4">
              <span className="fw-bold">Photo</span>
              <input
                id="photo"
                type="text"
                name="photo"
                value={dish.photo}
                onChange={inputSet}
                className="form-control w-50"
                required/>
            </div>
            <div className="mb-3 d-flex align-items-center gap-4">
              <span className="fw-bold">Dish preview</span>
              <div className="pic-preview border border-3 p-2">
                {photoPreview()}
              </div>
            </div>
            <div className="d-flex gap-3">
              <button
                type="submit"
                className="btn btn-success"
                disabled={updateDishValue}
              >
                {updateDishValue && <ButtonSpinner/>}
                Save
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default EditDishForm;