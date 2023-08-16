import { useEffect, useRef } from 'react';

function Box() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const div = ref.current;
    /*
    注册监听函数
    */
    const obsever = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = 'black';
          document.body.style.color = 'white';
        } else {
          document.body.style.backgroundColor = 'white';
          document.body.style.color = 'black';
        }
      },
      {
        threshold: 1.0,
      },
    );
    obsever.observe(div!);
    return () => obsever.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        margin: 20,
        height: 100,
        width: 100,
        border: '2px solid black',
        backgroundColor: 'blue',
      }}
    ></div>
  );
}

function LongSection() {
  const items = [];
  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i}(keep scroll)</li>);
  }
  return <ul>{items}</ul>;
}

const SectionList = () => {
  return (
    <>
      <LongSection />
      <Box />
      <LongSection />
      <Box />
    </>
  );
};

export default SectionList;
