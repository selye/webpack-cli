import useTools from '@/src/utils/tools/debunce';
import { Button } from 'antd';
import { useReducer } from 'react';

interface AgeProp {
  age?: number;
}

interface ActionProp {
  type: 'increment';
}

const foo: [] = [];
const bar: {} = {};
const obj = { [foo]: 'foo', [bar]: 'bar' };
console.log(obj);

function reducer(state: AgeProp, action: ActionProp) {
  if (action.type === 'increment') {
    return {
      age: state.age! + 1,
    };
  }
  throw new Error('unknown action');
}

function curry(fn: Function) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      // 如果传入的参数长度大于函数期望的参数长度
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a: number, b: number, c: number) {
  return a + b + c;
}

const MgReducer = () => {
  const [state, dispatch] = useReducer(reducer, { age: 20 });
  const { debunce, throttle } = useTools();

  const handleChange = throttle(() => {
    console.log('222');
  });

  return (
    <>
      <Button
        onClick={throttle(() => {
          dispatch({
            type: 'increment',
          });
        })}
      >
        提交
      </Button>
      <Button onClick={handleChange}>提交</Button>
      <p>Hello! you are {state.age}</p>
    </>
  );
};

export default MgReducer;
