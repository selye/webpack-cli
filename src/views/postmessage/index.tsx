import { createContext, useContext, useState } from 'react';
import './index.less';
import { WelComePanel } from './components/WelcomePanel';

interface CustomerStateType {
  name: string;
}

type CustomerContextValue = {
  currentUser?: CustomerStateType;
  setCurrentUser?: React.Dispatch<React.SetStateAction<CustomerStateType>>;
};

export const ThemeContext = createContext<string | null>(null);
export const CurrentUserContext = createContext<any>(null);

function MyComponents() {
  const [theme, setTheme] = useState('light');

  const [currentUser, setCurrentUser] = useState<CustomerContextValue | null>(null);

  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
        }}
      >
        <WelComePanel />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light');
            }}
          />
          change your color
        </label>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MyComponents;
