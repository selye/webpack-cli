import { Button, Input } from 'antd';
import { InputHTMLAttributes, forwardRef, useImperativeHandle, useRef } from 'react';

const MyInput = forwardRef(function myInput(props: InputHTMLAttributes<HTMLInputElement>, ref: any) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current?.focus();
        },
        scollIntoView() {
          inputRef.current?.scrollIntoView();
        },
      };
    },
    [],
  );

  return <input {...props} ref={inputRef} />;
});

const MyForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  function handleClick() {
    ref.current?.focus();
  }
  return (
    <form>
      <MyInput placeholder={'enter your name'} ref={ref} />
      <Button type="primary" onClick={handleClick}>
        Edit
      </Button>
    </form>
  );
};

export default MyForm;
