import { Button } from 'antd';
import { ReactNode, useEffect, useRef, useState } from 'react';

const ModalDialog = ({ isOpen, children }: { isOpen: boolean; children: ReactNode }) => {
  const ref = useRef<any>();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog = ref.current;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [isOpen]);
  return (
    <>
      <dialog ref={ref}>{children}</dialog>
    </>
  );
};

const MgDialog = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      <Button type="primary" onClick={() => setShow(true)}>
        open dialog
      </Button>
      <ModalDialog isOpen={show}>
        hello world
        <Button
          type="primary"
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </Button>
      </ModalDialog>
    </>
  );
};

export default MgDialog;
