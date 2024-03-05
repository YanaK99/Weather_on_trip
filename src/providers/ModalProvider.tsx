import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useState,
  Context,
} from "react";

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

type ModalProviderProps = {
  children: ReactNode;
};

type ModalContextProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
};

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = (): ModalContextProps => {
  const context = useContext<ModalContextProps>(
    ModalContext as Context<ModalContextProps>
  );
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
