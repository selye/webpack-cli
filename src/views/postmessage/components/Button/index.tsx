import { useContext } from 'react';
import { ThemeContext } from '../..';

interface ButtonProp {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({ children, disabled, onClick }: ButtonProp) => {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};
