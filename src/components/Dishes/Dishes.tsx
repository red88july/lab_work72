import {useNavigate} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks.ts';
import {deleteFetchingOneDish, getAllDishes, loadingOfAllDishes} from '../../containers/dishesSlice/dishesSlice.ts';
import {useEffect} from 'react';
import {deleteOneDish, getAllDish} from '../../containers/dishesSlice/dishesThunks.ts';
import SpinnerBig from '../Spinners/SpinnerBig';
import DishesItem from './DishesItem';

const Dishes = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const dishesList = useAppSelector(getAllDishes);
  const loadingAllOfDishes = useAppSelector(loadingOfAllDishes);
  const deleteFetchOneDish = useAppSelector(deleteFetchingOneDish);

  useEffect(() => {
    dispatch(getAllDish());
  }, [dispatch]);

  const removeOneDish = async (id: string) => {
    await dispatch(deleteOneDish(id));
    await dispatch(getAllDish());
  };

  const handleClick = () => {
    navigate('/new-dish');
  };

  console.log(dishesList);

  return (
    <>
      <div className="mt-5 d-flex justify-content-evenly mb-4 align-items-center">
        <h3 className="main-link mb-3">Dishes</h3>
        <button type="button" className="btn btn-success mb-3" onClick={handleClick}>Add new Dish</button>
      </div>
      <div className="d-flex align-items-center flex-column">
        {loadingAllOfDishes ? <SpinnerBig/> : dishesList.map((dish) => (
          <DishesItem
            key={dish.id}
            dish={dish}
            deleteFetchOneDish={deleteFetchOneDish}
            onRemove={() => removeOneDish(dish.id)}/>
        ))}
      </div>
    </>
  );
};

export default Dishes;