import * as React from "react";
import ModalContext from "./ModalContext";

interface ModalProviderProps {}

interface ModalProviderState {
  visibleModalId?: string;
}

class ModalProvider extends React.Component<
  ModalProviderProps,
  ModalProviderState
> {
  public state = {
    visibleModalId: undefined
  };

  public render() {
    const { children } = this.props;
    return (
      <ModalContext.Provider value={this.getStateAndHelpers()}>
        {children}
      </ModalContext.Provider>
    );
  }

  private showModal = (id: string) => {
    this.setState({
      visibleModalId: id
    });
  };

  private hideModal = () => {
    this.setState({
      visibleModalId: undefined
    });
  };

  private getStateAndHelpers() {
    const { showModal, hideModal } = this;
    const { visibleModalId } = this.state;
    return {
      showModal,
      hideModal,
      visibleModalId
    };
  }
}

export default ModalProvider;
