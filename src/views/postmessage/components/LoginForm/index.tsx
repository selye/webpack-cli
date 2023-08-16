import { useContext, useState } from 'react';
import { Button } from '../Button';
import { CurrentUserContext } from '../..';

export const LoginForm = () => {
  const [firstName, setFirstName] = useState<string>('');
  const [lasttName, setLastName] = useState<string>('');
  const { setCurrentUser } = useContext(CurrentUserContext);

  const canLogin = firstName !== '' && lasttName !== '';
  return (
    <>
      <label>
        First name{':'}
        <input
          value={firstName}
          required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
      </label>
      <br />
      <label>
        Last name{':'}
        <input
          value={lasttName}
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </label>
      <br />
      <Button
        disabled={!canLogin}
        onClick={() => {
          setCurrentUser({
            name: `${firstName}·${lasttName}`,
          });
        }}
      >
        Log in
      </Button>
      {!canLogin && <i>Fill in both fields</i>}
    </>
  );
};
