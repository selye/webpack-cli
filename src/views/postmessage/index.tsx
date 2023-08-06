import { createContext, useContext, useState } from 'react';
import './index.less';

interface CustomerStateType {
  name: string;
}

type CustomerContextValue = {
  customer?: CustomerStateType;
  setCustomer?: React.Dispatch<React.SetStateAction<CustomerStateType>>;
};

const CustomerContext = createContext<CustomerContextValue | undefined>(undefined);

function MyComponents() {
  const [customer, setCustomer] = useState<CustomerStateType | null>(null);

  return (
    <CustomerContext.Provider value={{ customer: customer!, setCustomer: setCustomer! }}>
      <CustomForm />
    </CustomerContext.Provider>
  );
}

const CustomForm = () => {
  return (
    <Pannel title="Welcome">
      <LoginBtn />
    </Pannel>
  );
};

interface PannelProp {
  title?: string;
  children?: React.ReactNode;
}
const Pannel = (props: PannelProp) => {
  const { title, children } = props;

  return (
    <section className="panel">
      <h1>{title}</h1>
      {children}
    </section>
  );
};

interface ButtonProp {
  children?: React.ReactNode;
  onClick?: () => void;
}
const Button = (props: ButtonProp) => {
  const { children, onClick } = props;
  return (
    <button onClick={onClick} className={`button mr10`}>
      {children}
    </button>
  );
};

const LoginBtn = () => {
  const context = useContext(CustomerContext);
  const { customer, setCustomer } = context;
  console.log('customer', customer);
  return customer === null ? (
    <Button
      onClick={() => {
        setCustomer({ name: 'shijie' });
      }}
    >
      log in
    </Button>
  ) : (
    <p>welcome my baby</p>
  );
};

export default MyComponents;
