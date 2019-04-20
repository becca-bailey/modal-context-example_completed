import * as React from "react";

interface ModalContextType {
  showModal(id: string): void;
  hideModal(): void;
  visibleModalId?: string;
}

const ModalContext = React.createContext<ModalContextType>({
  showModal: () => {},
  hideModal: () => {},
  visibleModalId: undefined
});

export default ModalContext;
