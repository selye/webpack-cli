import { Button, Input, Select } from 'antd';
import { FC, useEffect, useState } from 'react';
import { createConnection } from './chat';

interface ChatProp {
  roomId?: string;
}

const Room: FC<ChatProp> = (props) => {
  const { roomId } = props;
  const [serverUrl, setServerUrl] = useState<string>('baidu.com');
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]);
  return (
    <>
      <h4>Sever Url:{serverUrl}</h4>
      <Input
        value={serverUrl}
        onChange={(e) => {
          setServerUrl(e.target.value);
        }}
      />
      <h2>Welcome to {roomId} room!</h2>
    </>
  );
};

const ChatRoom: FC<ChatProp> = (prop) => {
  const [roomId, setRoomId] = useState('mickey');
  const [show, setShow] = useState(false);






  return (
    <>
      <label>
        Choose your rooms:{' '}
        <Select
          defaultValue={roomId}
          options={[
            {
              label: 'mickey',
              value: 'mickey',
            },
            {
              label: 'donad',
              value: 'donad',
            },
            {
              label: 'miney',
              value: 'miney',
            },
          ]}
          onChange={(e) => setRoomId(e)}
          style={{ width: 120 }}
        />
        <Button type="primary" onClick={() => setShow(!show)}>
          {show ? 'close' : 'open'}
        </Button>
        {show ? (
          <>
            <hr />
            <Room roomId={roomId} />
          </>
        ) : null}
      </label>
    </>
  );
};

export default ChatRoom;
