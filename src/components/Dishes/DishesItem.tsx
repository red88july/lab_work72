import * as React from 'react';
import {GetDishesDetails} from '../../types';
import ButtonSpinner from '../Spinners/ButtonSpinner.tsx';
import {Link} from 'react-router-dom';

interface Props {
  dish: GetDishesDetails;
  deleteFetchOneDish: boolean | string;
  onRemove: React.MouseEventHandler;
}

const DishesItem: React.FC<Props> = ({dish, onRemove, deleteFetchOneDish}) => {
  return (
    <div className="d-flex justify-content-between mb-2 border border-5 rounded-4 border-success-subtle p-2 w-50">
      <div className="d-flex gap-3 align-items-center">
        <div className="p-1 rounded-2 border border-2">
          <img
            src={dish.photo}
            alt={dish.title}
            style={{width: '150px', height: '150px'}}
            className="rounded-2"/>
        </div>
        <h4>
          <em>{dish.title}</em>
        </h4>
      </div>
      <div className="d-flex gap-5 align-items-center">
        <p className="mb-0">
          <b>{dish.price}</b> <i>KGS</i>
        </p>
        <div className="d-flex gap-2">
          <Link to={`/edit-dish/${dish.id}`}
                className="btn btn-success">Edit</Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={onRemove}
            disabled={deleteFetchOneDish ? deleteFetchOneDish === dish.id : false}>
            {deleteFetchOneDish && deleteFetchOneDish === dish.id && (<ButtonSpinner/>)}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishesItem;