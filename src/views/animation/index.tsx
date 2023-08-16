import { useEffect, useRef, useState } from 'react';
import { FadeInAnimation } from './animation';
import { Button, Select } from 'antd';
import mmImg from './mm.jpeg';

function WelCome() {
  const ref = useRef(null);

  useEffect(() => {
    const animation = new FadeInAnimation(ref.current);
    animation.start(1000);
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <h1
      ref={ref}
      style={{
        opacity: 0,
        color: 'white',
        padding: 50,
        textAlign: 'center',
        fontSize: 50,
        backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1), rgb(0, 128, 0) 100%)',
      }}
    >
      Welcome
    </h1>
  );
}

const Animationeffect = () => {
  const [show, setShow] = useState<boolean>(false);
  const canvasDiv = useRef<HTMLCanvasElement>(null);
  const [radius, setrRadius] = useState<number>(10);

  function drawCircle() {
    const canvas = canvasDiv.current;

    if (canvas) {
      const context = canvas.getContext('2d');
      // 定义矩形的参数
      const x = 0;
      const y = 0;
      const width = 300;
      const height = 200;

      context?.clearRect(x, y, width, height);

      const img = new Image();
      img.src = mmImg;

      img.onload = function () {
        // 开始绘制路径

        context?.beginPath();

        // 移动到左上角
        context?.moveTo(x + radius, y);

        // 绘制顶部边线和圆角
        context?.arcTo(x + width, y, x + width, y + radius, radius);

        // 绘制右边边线和圆角
        context?.arcTo(x + width, y + height, x + width - radius, y + height, radius);

        // 绘制底部边线和圆角
        context?.arcTo(x, y + height, x, y + height - radius, radius);

        // 绘制左边边线和圆角
        context?.arcTo(x, y, x + radius, y, radius);

        // 封闭路径
        context?.closePath();
        // 填充矩形

        // 描边矩形

        context?.save();
        context?.clip();
        context?.drawImage(img, x, y, width, height);
        context?.restore();
        console.log('绘制完毕');
      };
    }
  }

  useEffect(() => {
    drawCircle();
  }, [radius]);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? 'Remove' : 'Show'}
      </Button>
      <hr />
      {show ? <WelCome /> : null}
      <canvas ref={canvasDiv} width={300} height={200}></canvas>
      <p>角度：{radius}</p>
      <Select
        style={{
          width: '100px',
        }}
        onChange={(value) => {
          setrRadius(value);
        }}
        options={[
          {
            label: '10',
            value: 10,
          },
          {
            label: '20',
            value: 20,
          },
          {
            label: '30',
            value: 30,
          },
        ]}
      />
    </>
  );
};

export default Animationeffect;
