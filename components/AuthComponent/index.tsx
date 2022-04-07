import { MouseEvent, useContext, useEffect, FC } from 'react';
import ModalContext from '@/context/ModalContext';
import Link from 'next/link';

export const AuthComponent: FC = () => {
  const { toggleModal, setForm, token, setToken } = useContext(ModalContext);

  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (toggleModal) toggleModal();
    setForm((e.target as HTMLButtonElement).value);
  };

  const handleLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      setToken('');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token') as string);
    }
  });

  return (
    <>
      {token ? (
        <>
          <Link href='/vendor' passHref>
            <button className='btn-primary'>My Store</button>
          </Link>
          <button className='btn-secondary' onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <button
            className='btn-primary'
            value='register'
            onClick={handleToggle}
          >
            Join
          </button>
          <button
            className='btn-secondary'
            value='login'
            onClick={handleToggle}
          >
            Connect
          </button>
        </>
      )}
    </>
  );
};

export default AuthComponent;
