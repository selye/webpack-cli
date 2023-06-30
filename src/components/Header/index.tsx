import './index.less';

export const Header = () => {
  const arr = [1, 2, 3, 4, 6];
  return (
    <div className="container">
      {arr.map((item, index) => {
        return <div key={index} className="list" />;
      })}
    </div>
  );
};
