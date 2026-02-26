import { Button } from 'antd';

import useHandEdit from '@/src/hooks/useHand';
import usePromise from "@/src/hooks/promise";
import { PersonClass, Car } from "@/src/hooks/usePerson";

const HandEdit = () => {
  const { debounceFn, throttleFn, throttleTimeFn } = useHandEdit();
  const { handleEdit } = usePromise();

    const test1 = debounceFn(() => {
        console.log('点击防抖')
    },1000, true)

    const test2 = throttleTimeFn(() => {
        console.log('throttle')
    },1000)

    const promiseFn = () => {
      const personInfo = {
        id: Math.floor(Math.random()*10)
      }
      const result = handleEdit(personInfo)
      // result.then((res: any) => {
      //   console.log(res)
      // }, (error: any) => {
      //   console.log(error)
      // })
    }

    const person = new PersonClass('jack', 987656);


    const myCar = new Car('Civic', 2021);
    console.log(`myCar is ${myCar.getAge()}`)

  return (
    <>
      <Button onClick={test1}>test1</Button>
      <Button onClick={test2}>test2</Button>
      <Button onClick={promiseFn}>Promise</Button>

    </>
  );
};

export default HandEdit;
