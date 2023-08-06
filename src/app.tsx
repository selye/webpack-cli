import React, { FC, Suspense, useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import myVideo from '@/src/assets/video/video.mp4';
import myImg from '@/src/assets/images/p102.jpg';
import { VirtualList } from './components/VirtualList';
const CmpOne = React.lazy(() => import('./components/Componetsone'));
const CmpTwo = React.lazy(() => import('./components/Componetstwo'));
import axios from 'axios';
import { Counter } from './components/Counter';
import { store } from '@/src/store';
import { Provider } from 'react-redux';
import { TestButton } from './components/TestCmp';
import ProductPage from './views/product';
import MyComponents from './views/postmessage';

interface IPprops {
  name: string;
  age: number;
}

const Loading = () => {
  return <div>loading....</div>;
};

const App: FC<IPprops> = (props) => {
  const { name, age } = props;
  const [showTwo, setShowTwo] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>('');
  // const listData = Array.from({ length: 10000 }, (_, index) => index);

  // const MouseMove = () => {
  //   console.log('move');
  // };

  // const handleClick = () => {
  //   document.addEventListener('mousemove', MouseMove);
  // };

  const getData = () => {
    console.log('获取数据');
    axios.get('https://api.thecatapi.com/v1/images/search', {}).then((res) => {
      console.log(res);
      setImgSrc(res.data[0].url);
    });
  };

  return (
    <Provider store={store}>
      <div className="app">
        {/* <Header /> */}
        {/* <img src={myImg} /> */}
        {/* <p>{`Hello! I'm ${name}, ${age} years old.`}</p> */}
        {/* <video src={myVideo} controls /> */}
        {/* <VirtualList listData={listData} itemSize={50} /> */}
        <Suspense fallback={<Loading />}>
          {/* <CmpOne a={1} b={2} /> */}
          {/* {showTwo ? <CmpTwo a={2} b={3} /> : null}
          <button
            type="button"
            onClick={() => {
              setShowTwo(!showTwo);
            }}
          >
            showTwo
          </button>
          <button onClick={getData}>获取数据</button>
          {imgSrc ? <img src={imgSrc ?? ''} /> : <div>loading...</div>}
          <div>
            <p>数字</p>
            <Counter />
          </div> */}
          {/* <TestButton /> */}
          <h4>effect变更</h4>
          <ProductPage />
          <h4>状态管理</h4>
          <MyComponents />
        </Suspense>
      </div>
    </Provider>
  );
};

export default App;
