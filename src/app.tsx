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
import EffectRooms from './views/effectRooms';
import { ConfigProvider, theme } from 'antd';
import ChatRoom from './views/chatRoom';
import MouseFollow from './views/mouseFollow';
import Animationeffect from './views/animation';
import MgDialog from './views/modalDialog';
import SectionList from './views/longsection';
import MyForm from './views/sonTofather';
import MgReducer from './views/reducer';
import { Vdom } from './components/Vdom';
import { LazyLoad } from './components/Lazyload';
import { GridComponent } from './components/GridComponent';
import Picture from './views/reactRe';
import useCount from './utils/count';
import Matching from './views/matching';
import Weather from './weather';

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
  const [primary, setPrimary] = useState<string>('#1677ff');

  const { count } = useCount();
  // const listData = Array.from({ length: 10000 }, (_, index) => index);

  // const MouseMove = () => {
  //   console.log('move');
  // };

  // const handleClick = () => {
  //   document.addEventListener('mousemove', MouseMove);
  // };

  const getData = () => {
    axios.get('https://api.thecatapi.com/v1/images/search', {}).then((res) => {
      setImgSrc(res.data[0].url);
    });
  };

  return (
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm,
        // 2. 组合使用暗色算法与紧凑算法
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
        token: {
          // Seed Token，影响范围大
          colorPrimary: primary,
          borderRadius: 2,
          // 派生变量，影响范围小
          // colorBgContainer: '#f6ffed',
          // 1. 单独使用暗色算法
        },

        // components: {
        //   Button: {
        //     colorPrimary: '#00b96b',
        //     algorithm: true,
        //   },
        //   Input: {
        //     colorPrimary: '#eb2f96',
        //     algorithm: true, // 启用算法
        //   },
        // },
      }}
    >
      <Provider store={store}>
        <div className="app">
          {/* <div>现在的数字是：{count}</div> */}
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
            {/* <h4>effect变更</h4>
          <ProductPage />
          <h4>状态管理</h4>
          <MyComponents />
          <EffectRooms /> */}
            {/* <ChatRoom />
            <MouseFollow />
            <Animationeffect />
            <MgDialog /> */}
            {/* <SectionList /> */}
            <hr />
            {/* <MyForm /> */}
            {/* <MgReducer /> */}
            <hr />
            {/* <Vdom /> */}
            <hr />
            {/* <LazyLoad /> */}
            <hr />
            {/* <GridComponent /> */}
            {/* <Picture /> */}
            {/* <Matching /> */}
            <Weather />
          </Suspense>
        </div>
      </Provider>
    </ConfigProvider>
  );
};

export default App;
