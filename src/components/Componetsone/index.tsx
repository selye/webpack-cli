import { math } from '@/src/utils/math';

interface OneProp {
  a: number;
  b: number;
}
const ComputedOne: React.FC<OneProp> = (props) => {
  const { a, b } = props;
  const sum = math(a, b);
  return (
    <div>
      <p>{`Hi, I'm computed Two, my sum is ${sum}.`}</p>
    </div>
  );
};

export default ComputedOne;
