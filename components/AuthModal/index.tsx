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
          <div className='bg-white h-[80vh] w-[90vw] xl:w-[500px] xl:h-[600px] 2xl:w-[600px] 2xl:h-[700px] relative rounded-lg'>
            <button
              className='absolute w-[40px] h-[40px] p-[5px] font-bold text-white rounded-full bg-primary-500 bottom-[10px] left-[50%] xl:bottom-auto xl:top-[30px] xl:right-[30px] xl:left-auto z-30 translate-y-[-50%] translate-x-[-50%] xl:translate-x-0 xl:translate-y-0'
              onClick={handleToggle}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
}
