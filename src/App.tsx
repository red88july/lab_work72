import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import PageNoFoundPicture from '../src/images/404PageNotFound.jpg';
import DishForm from './components/DishForm/DishForm';
import Dishes from './components/Dishes/Dishes';
import Orders from './components/Orders/Orders';
import EditDishForm from './components/EditForm/EditDishForm.tsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/admin" element={<Dishes/>}/>
        <Route path="/admin/dishes" element={<Dishes/>}/>
        <Route path="/admin/orders" element={<Orders/>}/>
        <Route path="/edit-dish/:id" element={<EditDishForm/>}/>
        <Route path="/new-dish" element={<DishForm/>}/>
        <Route path="*" element={(
          <div className="container-fluid pic-container d-flex justify-content-center">
            <img
              style={{width: '50rem', height: '50rem'}}
              src={PageNoFoundPicture}
              alt="Page Not Found"/>
          </div>
        )}/>
      </Routes>
    </Layout>
  );
}

export default App;
