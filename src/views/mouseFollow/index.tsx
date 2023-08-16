import { useEffect, useState } from 'react';

interface PositionProp {
  x?: number;
  y?: number;
}

const MouseFollow = () => {
  const [position, setPosition] = useState<PositionProp>({
    x: 0,
    y: 0,
  });

  function handleMove(e?: MouseEvent) {
    setPosition({
      x: e?.clientX,
      y: e?.clientY,
    });
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);
  return (
    <div
      style={{
        position: 'absolute',
        background: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        pointerEvents: 'none',
        left: 0,
        top: 0,
        width: '40px',
        height: '40px',
        transform: `translate(${position.x}px,${position.y}px)`,
      }}
    ></div>
  );
};

export default MouseFollow;
