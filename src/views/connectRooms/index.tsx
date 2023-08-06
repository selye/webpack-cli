import { useCallback, useEffect, useState } from 'react';

interface RoomProp {
  roomId?: number;
}

function ConnectRooms({ roomId }: RoomProp) {
  const [message, setMessage] = useState<string>('');

  // 通过useCallBack包裹的对象，来避免useEffect依赖项为引用类型时，effect重复渲染的问题
  const createOptions = useCallback(() => {
    return {
      name: 'ming',
      age: 20,
      connet: () => {
        console.log('链接成功');
      },
      disConnect: () => {
        console.log('链接失败');
      },
    };
  }, [roomId]);

  useEffect(() => {
    const options = createOptions();
    options.connet();
    return () => options.disConnect();
  }, [createOptions]); // 依赖项为对象时候，触发重复渲染的问题
}

export default ConnectRooms;
