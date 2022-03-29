import { createContext, useState, FC } from 'react';

interface ModalOpenContext {
  isModalOpen: boolean;
  toggleModal?: () => void;
}

const defaultState = {
  isModalOpen: false,
};

export const ModalContext = createContext<ModalOpenContext>(defaultState);

export const ModalProvider: FC = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(defaultState.isModalOpen);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        toggleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
