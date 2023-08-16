import { useEffect, useState } from 'react';

function EffectRooms() {
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    console.log('update', url);
    console.log('effect update');

    return () => {
      console.log('clearUrl', url);
      console.log('effect clear');
    };
  }, [url]);

  return (
    <div>
      <h4>Effect：组件状态连接外部</h4>
      <button
        onClick={() => {
          setUrl('all');
        }}
      >
        改变Url
      </button>
    </div>
  );
}

export default EffectRooms;
