import { useContext } from 'react';
import { Panel } from '../Panel';
import { CurrentUserContext } from '../..';
import { LoginForm } from '../LoginForm';
import { Greeting } from '../Greeting';

export const WelComePanel = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return <Panel title="Welcome">{currentUser ? <Greeting /> : <LoginForm />}</Panel>;
};
