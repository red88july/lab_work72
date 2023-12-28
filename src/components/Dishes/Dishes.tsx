import {useNavigate} from 'react-router-dom';

const Dishes = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-dish');
  };

  return (
    <div>
      <div className="mt-5 d-flex justify-content-evenly align-items-center border-bottom border-3">
        <h3 className="main-link mb-3">Dishes</h3>
        <button type="button" className="btn btn-success mb-3" onClick={handleClick}>Add new Dish</button>
      </div>
      <p>Here we need to see list of <h3><b>Dishes!</b></h3></p>
    </div>
  );
};

export default Dishes;