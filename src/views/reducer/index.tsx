import { Button } from 'antd';
import { useReducer } from 'react';

interface AgeProp {
  age?: number;
}

interface ActionProp {
  type: 'increment';
}

function reducer(state: AgeProp, action: ActionProp) {
  if (action.type === 'increment') {
    return {
      age: state.age! + 1,
    };
  }
  throw new Error('unknown action');
}

const MgReducer = () => {
  const [state, dispatch] = useReducer(reducer, { age: 20 });

  function foo() {
    try {
      console.log('trytrytry');
      return '1111';
    } catch (error) {
      console.log(error);
    } finally {
      return '2222';
    }
  }

  const res = foo();
  console.log('res', res);

  return (
    <>
      <Button
        onClick={() => {
          dispatch({
            type: 'increment',
          });
        }}
      >
        提交
      </Button>
      <p>Hello! you are {state.age}</p>

      <progress value={2} max={10} />
    </>
  );
};

export default MgReducer;
