import { Routes, Route, Navigate } from 'react-router-dom';
import AppHeader from './components/appHeader/AppHeader';
import HomePage from './pages/homePage/HomePage';
import DetailsPage from './pages/detailsPage/DetailsPage';
import ContactForm from './components/contactForm/ContactForm';

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:place" element={<DetailsPage />} />
        <Route path='*' element={<Navigate to="/" replace/>} />
      </Routes>
      <ContactForm message={false}/>
    </div>
  );
};

export default App;
