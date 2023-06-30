import { FC, useEffect } from 'react';
import { Header } from '@/components/Header';
import myVideo from '@/src/assets/video/video.mp4';
import myImg from '@/src/assets/images/p102.jpg';

interface IPprops {
  name: string;
  age: number;
}

const App: FC<IPprops> = (props) => {
  const { name, age } = props;

  const MouseMove = () => {
    console.log('move');
  };

  const handleClick = () => {
    document.addEventListener('mousemove', MouseMove);
  };

  return (
    <div className="app">
      <Header />
      {/* <img src={myImg} /> */}
      <p>{`Hello! I'm ${name}, ${age} years old.`}</p>
      {/* <video src={myVideo} controls /> */}
      <div className="mouse-box" onClick={handleClick}>
        323232323232
      </div>
      <div
        onClick={() => {
          document.removeEventListener('mousemove', MouseMove);
        }}
      >
        44444444444
      </div>
    </div>
  );
};

export default App;
