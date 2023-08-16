import { useContext } from 'react';
import { CurrentUserContext } from '../..';

export const Greeting = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return <p>You are my hero!!{currentUser.name}</p>;
};
