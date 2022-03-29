import { MouseEvent, useContext } from 'react';
import ModalContext from '@/context/ModalContext';
import CloseIcon from '@mui/icons-material/Close';

export function AuthModal() {
  const { isModalOpen, toggleModal } = useContext(ModalContext);
  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (toggleModal) toggleModal();
  };
  return (
    <>
      {isModalOpen ? (
        <div className='absolute top-0 left-0 z-20 grid w-full h-full overflow-hidden bg-gray-600 bg-opacity-50 place-content-center'>
          <button
            className='absolute w-[40px] h-[40px] p-[5px] font-bold text-white rounded-full bg-primary-500 bottom-[150px] xl:bottom-[80%] z-30 left-[50%] translate-x-[-50%]'
            onClick={handleToggle}
          >
            <CloseIcon />
          </button>
          <div id='lbab' className='z-20'>
            <div id='full-door' className=''></div>
            <div id='left-door' className='z-40 door'></div>
            <div id='right-door' className='z-40 door'></div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
