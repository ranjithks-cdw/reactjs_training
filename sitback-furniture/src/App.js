import {Routes, Route} from 'react-router-dom';
import AppHeader from "./containers/appHeader/AppHeader";
import HomePage from './screens/homePage/HomePage';
import ProductsPage from './screens/productsPage/ProductsPage';
import OrdersPage from './screens/ordersPage/OrdersPage';
import NotFoundPage from './screens/notFoundPage/NotFoundPage';

const App = () => {
  localStorage.setItem('orders', JSON.stringify([]));
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/categories/:category' element={<ProductsPage />} />
        <Route path='/confirmOrder' element={<OrdersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
