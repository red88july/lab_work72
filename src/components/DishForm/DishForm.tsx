import * as React from 'react';
import {useState} from 'react';
import {Dishes} from '../../types';
import DefaultPicture from '../../images/def-pic.jpg';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {postDish} from '../../containers/dishesSlice/dishesThunks.ts';
import {postOneDish} from '../../containers/dishesSlice/dishesSlice.ts';
import ButtonSpinner from '../Spinners/ButtonSpinner';
import SpinnerBig from '../Spinners/SpinnerBig';

const DishForm = () => {
  const dispatch = useAppDispatch();
  const sendOneDishTwoServer = useAppSelector(postOneDish);
  const [dish, setDish] = useState<Dishes>({
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

  const onFormSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await(dispatch(postDish(dish)));
    } finally {
      setDish((prevState) => ({
        ...prevState,
        title: '',
        price: '',
        photo: '',
      }));
    }
  };

  return (
    <>

      <div className="d-flex justify-content-center">
        {sendOneDishTwoServer ? <SpinnerBig/> : <form onSubmit={onFormSubmit} className="w-50 mt-5">
          <div className="mb-3 d-flex align-items-center gap-4">
            <span className="fw-bold">Title</span>
            <input
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
              {photoPreview ()}
            </div>
          </div>
          <div className="d-flex gap-3">
            <button
              type="submit"
              className="btn btn-success"
              disabled={sendOneDishTwoServer}>
              {sendOneDishTwoServer ? <ButtonSpinner /> : 'Add dish'}
            </button>
          </div>
        </form>}
      </div>
    </>
  );
};

export default DishForm;