import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AppHeader from './components/appHeader/AppHeader';
import ContactForm from './components/contactForm/ContactForm';
import HomePage from './pages/homePage/HomePage';
import DetailsPage from './pages/detailsPage/DetailsPage';

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:place" element={<DetailsPage />} />
        <Route path='*' element={<Navigate to="/" replace/>} />
      </Routes>
      <ContactForm />
    </div>
  );
};

export default App;
