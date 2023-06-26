import { FC } from 'react';
import { Header } from '@/components/Header';

interface IPprops {
  name: string;
  age: number;
}

const App: FC<IPprops> = (props) => {
  const { name, age } = props;
  return (
    <div className="app">
      <Header />
      <p>{`Hello! I'm ${name}, ${age} years old.`}</p>
    </div>
  );
};

export default App;
