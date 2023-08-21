import { Provider } from "react-redux";
import HomePage from "./pages/homePage";
import { store } from "./store";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

/**
 * @description Method to construct App Component
 * @returns App component
 */
const App = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(currentTheme => currentTheme === 'light' ? 'dark' : 'light');
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <Provider store={store}>
        <div className="App" id={theme}>
          <HomePage />
        </div>
      </Provider>
    </ThemeContext.Provider>
  );
};

export default App;
