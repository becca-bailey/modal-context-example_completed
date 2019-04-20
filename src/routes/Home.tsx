import * as React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ModalProvider from "../components/ModalProvider";
import ModalContext from "../components/ModalContext";
import Modal from "../components/Modal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`;

const Image = styled.img`
  display: block;
  margin: auto;
  padding-bottom: 1rem;
  width: 20rem;
`;

class Home extends React.Component {
  public render() {
    return (
      <Container>
        <ModalProvider>
          <ModalContext.Consumer>
            {({ showModal, hideModal, visibleModalId }) => {
              return (
                <React.Fragment>
                  <Button onClick={() => showModal("surprise")}>
                    Click me!
                  </Button>
                  <Button onClick={() => showModal("kittens")}>
                    No, click me instead!
                  </Button>
                  <Modal visible={visibleModalId === "surprise"}>
                    <h1>Surprise!</h1>
                    <Image src="/assets/surprise.gif" />
                    <Button onClick={() => hideModal()}>Close</Button>
                  </Modal>
                  <Modal visible={visibleModalId === "kittens"}>
                    <h1>Kittens!</h1>
                    <Image src="/assets/kittens.gif" />
                    <Button onClick={() => hideModal()}>Close</Button>
                  </Modal>
                </React.Fragment>
              );
            }}
          </ModalContext.Consumer>
        </ModalProvider>
      </Container>
    );
  }
}

export default Home;
