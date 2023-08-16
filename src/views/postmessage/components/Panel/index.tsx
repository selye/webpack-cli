import { useContext } from 'react';
import { ThemeContext } from '../..';

interface PanelProp {
  title?: string;
  children?: React.ReactNode;
}

export const Panel = ({ title, children }: PanelProp) => {
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};
