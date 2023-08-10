import { useState, createContext, lazy, Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './screens/homePage/HomePage';
import AppHeader from './components/appHeader/AppHeader';
import { FadeLoader } from 'react-spinners';
import ProtectedRoutes from './components/protectedRoutes/ProtectedRoutes';
import { LOGIN_LINK } from './constants/pageConstants';
const AllMovies = lazy(() => import ('./screens/allMovies/AllMovies'));
const NowShowing =  lazy(() => import('./screens/nowShowing/NowShowing'));
const Login = lazy(() => import ('./screens/login/Login'));

const initUserDetails = {
  isLoggedIn: false,
  name: ''
};

export const userContext = createContext(initUserDetails);
export const movieContext = createContext({});

/**
 * @description Method to construct App component
 * @returns App Component
 */
const App = () => {
  const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem('user')) || {...initUserDetails});
  const [currentMovie, setCurrentMovie] = useState({});
  return (
    <userContext.Provider value={{userDetails, setUserDetails}}>
      <movieContext.Provider value={{currentMovie, setCurrentMovie}}>
        <BrowserRouter>
          <div className="App">
            <AppHeader />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/login' element={
                <Suspense fallback={<FadeLoader />}>
                  <Login />
                </Suspense>
              } />
              <Route path='/allMovies' element={
                <Suspense fallback={<FadeLoader />}>
                <AllMovies />
              </Suspense>
              } />
              <Route path='/showTime' element={
                <ProtectedRoutes redirectPath={LOGIN_LINK} isAllowed={userDetails.isLoggedIn}>
                  <Suspense fallback={<FadeLoader />}>
                    <NowShowing />
                  </Suspense>
                </ProtectedRoutes>
              } />
            </Routes>
          </div>
        </BrowserRouter>
      </movieContext.Provider>
    </userContext.Provider>
  );
};

export default App;
