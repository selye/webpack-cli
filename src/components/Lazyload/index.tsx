import imgIcon from '@/src/assets/images/p1.jpg';
import placeholder from '@/src/assets/images/p402.jpg';
import './index.less';
import { useEffect, useRef } from 'react';

interface LazyimgProp {
  placeholder?: string;
  src?: string;
  alt?: string;
  dataSrc?: string;
}
const LazyImg: React.FC<LazyimgProp> = ({ src, alt = '加载中..', dataSrc }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && imgRef.current) {
            imgRef.current.src = dataSrc!;
            observer.unobserve(imgRef.current);
          }
        },
        {
          threshold: 1.0,
        },
      );
      observer.observe(imgRef.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [dataSrc]);

  return (
    <div className="img">
      <img className="pic" ref={imgRef} src={src} alt={alt} />
    </div>
  );
};

export const LazyLoad = () => {
  const domRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container">
      <LazyImg src={placeholder} dataSrc={imgIcon} />
      <LazyImg src={placeholder} dataSrc={imgIcon} />
      <LazyImg src={placeholder} dataSrc={imgIcon} />
      <LazyImg src={placeholder} dataSrc={imgIcon} />
      <LazyImg src={placeholder} dataSrc={imgIcon} />
      <LazyImg src={placeholder} dataSrc={imgIcon} />
      <LazyImg src={placeholder} dataSrc={imgIcon} />
      <LazyImg src={placeholder} dataSrc={imgIcon} />
      <LazyImg src={placeholder} dataSrc={imgIcon} />
      <LazyImg src={placeholder} dataSrc={imgIcon} />
      <LazyImg src={placeholder} dataSrc={imgIcon} />
      <LazyImg src={placeholder} dataSrc={imgIcon} />
    </div>
  );
};
