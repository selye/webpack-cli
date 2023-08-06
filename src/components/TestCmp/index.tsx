import { FC, useEffect, useId, useState } from 'react';
import './index.less';

interface MyButtonProps {
  color?: string;
  children?: React.ReactNode;
}

export const TestButton: FC<MyButtonProps> = ({ children }) => {
  console.log('组件批处理了');
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const testId1 = useId();
  const testId2 = useId();
  const [person, setPerson] = useState<any>({
    name: 'hong',
    age: 10,
  });

  useEffect(() => {
    const ming = {
      name: 'ming',
      age: 20,
    };
    setPerson((pre) => {
      return {
        ...pre,
        name: 'ming',
      };
    });
  }, []);

  useEffect(() => {
    console.log('名称变了');
  }, [person.name]);

  return (
    <div className="button-wrap">
      <h4>批处理</h4>
      <div className="single-num">
        <p>{`唯一Id：${testId1}`}</p>
        <p>{`唯一Id：${testId2}`}</p>
      </div>
      <div className="number-box">
        <p>Num: {count1}、</p>
        <p>Num: {count2}</p>
      </div>
      <button
        onClick={() => {
          setTimeout(() => {
            setCount1((pre) => pre + 1);
            setCount2((pre) => pre + 1);
          });
        }}
      >
        批处理
      </button>
      <h4>对象</h4>
      {person ? (
        <div className="person">
          <p>姓名：{person.name}</p>
          <p>年龄：{person.age}</p>
        </div>
      ) : null}
    </div>
  );
};
