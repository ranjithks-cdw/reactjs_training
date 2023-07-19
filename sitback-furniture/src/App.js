import {Routes, Route, Navigate} from 'react-router-dom';
import AppHeader from "./containers/appHeader/AppHeader";
import HomePage from './screens/homePage/HomePage';
import ProductsPage from './screens/productsPage/ProductsPage';

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/categories/:category' element={<ProductsPage />} />
        {/* <Route path='*' element={<Navigate to="/" replace/>} /> */}
        <Route path="*" element={<p>Path not resolved</p>} />
      </Routes>
    </div>
  );
};

export default App;
