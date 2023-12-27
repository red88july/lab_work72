import * as React from 'react';
import {useState} from 'react';
import {Dishes} from '../../types';
import DefaultPicture from '../../images/def-pic.jpg';
import {useNavigate} from 'react-router-dom';

const ContactForm = () => {
  const navigate = useNavigate();

  const [dish, setDish] = useState<Dishes>({
    title: '',
    price: 0,
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
    setDish((prevState) => ({
      ...prevState,
      title: '',
      price: 0,
      photo: '',
    }));
    // try {
    //   await dispatch(postContact(contacts));
    // } catch (e) {
    //   console.log(`Fethching data with error : ${e}`);
    // } finally {
    //
    // }
  };

  const handleClickBack = () => {
    navigate('/admin');
  };

  return (
    <div className="d-flex justify-content-center">
      <form onSubmit={onFormSubmit} className="w-50 mt-5">
        <div className="mb-3 d-flex align-items-center gap-4">
          <span className="fw-bold">Title</span>
          <input
            type="text"
            name="title"
            value={dish.title}
            onChange={inputSet}
            className="form-control w-50"
            required/>
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
            className="form-control w-50"/>
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
            onClick={handleClickBack}
            >
            Add dish
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;