import { useState, createContext, lazy, Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './screens/homePage/HomePage';
import AppHeader from './components/appHeader/AppHeader';
import { FadeLoader } from 'react-spinners';
const AllMovies = lazy(() => import ('./screens/allMovies/AllMovies'));
// import AllMovies from './screens/allMovies/AllMovies';
const NowShowing =  lazy(() => import('./screens/nowShowing/NowShowing'));
const Login = lazy(() => import ('./screens/login/Login'));

const initUserDetails = {
  isLoggedIn: false,
  name: ''
};

export const userContext = createContext(initUserDetails);
export const movieContext = createContext({});
export const likeContext = createContext(false);

/**
 * @description Method to construct App component
 * @returns App Component
 */
const App = () => {
  const [userDetails, setUserDetails] = useState(JSON.parse(localStorage.getItem('user')) || {...initUserDetails});
  const [currentMovie, setCurrentMovie] = useState({});
  const [likeChanged, setLikeChanged] = useState(false);
  return (
    <userContext.Provider value={{userDetails, setUserDetails}}>
      <movieContext.Provider value={{currentMovie, setCurrentMovie}}>
        <likeContext.Provider value={{likeChanged, setLikeChanged}} >
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
                  <Suspense fallback={<FadeLoader />}>
                  <NowShowing />
                </Suspense>
                } />
              </Routes>
            </div>
          </BrowserRouter>
        </likeContext.Provider>
      </movieContext.Provider>
    </userContext.Provider>
  );
};

export default App;
