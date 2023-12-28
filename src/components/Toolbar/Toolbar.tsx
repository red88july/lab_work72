import reactLogo from '../../images/ic-react.png';
import {Link} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle ps-5 pe-5 pt-2 pb-2 d-flex justify-content-between">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/admin" className="p-2">
          <img className="w-50 h-50" src={reactLogo} alt="React Logo"/>
        </Link>
        <div className="d-flex align-items-center flex-column">
          <span>Lab work 72</span>
          <strong>Application "Turtle Pizza"</strong>
        </div>
      </div>
      <div className="d-flex gap-3">
        <Link to="/admin/dishes">Dishes</Link>
        <Link to="/admin/orders">Orders</Link>
      </div>
    </nav>
);
};

export default Toolbar;