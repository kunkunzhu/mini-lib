import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import FormGroup from "react-bootstrap/FormGroup";

export const Wrapper = styled.div`
  text-align: center;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;

/* Title Bar */

export const Title = styled.h1`
  color: var(--night);
  font-weight: 400;
  letter-spacing: 0.5rem;
  font-size: 60px;
`;

export const Subtitle = styled.h4`
  color: var(--melon);
  font-weight: 500;
  margin-top: 0.3rem;
  font-size: 20px;
  letter-spacing: 0.1rem;
  font-family: var(--txt-font);
`;

export const BookPileWrapper = styled.div`
  > * {
    width: 250px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .a {
    position: relative;
    top: 120px;
    z-index: 3;
  }
  .b {
    position: relative;
    transform: scaleX(-1);
    top: 60px;
    z-index: 2;
  }
  .c {
    position: relative;
    top: -15px;
    z-index: 1;
  }
`;

/* Nav Options */

export const NavWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 25px;
  .accountWrapper {
    button {
      border: none;
      padding: 10px 25px 10px 25px;
      border-radius: 5px;
      font-size: 20px;
      background: var(--flora);
      color: var(--white);
      text-transform: lowercase;
      letter-spacing: 0.1rem;
      &:hover {
        background: var(--white);
        color: var(--flora);
        border: solid 0.5px var(--flora);
        padding: 9.5px 24.5px 9.5px 24.5px;
        transition: 0.3s ease;
      }
    }
    .loggedIn {
      button {
        margin: auto 10px auto 10px;
      }
    }
  }
`

export const BookWrapper = styled.div`
  margin-top: 20px;
  button {
    border: none;
    padding: 10px 25px 10px 25px;
    border-radius: 5px;
    font-size: 20px;
    letter-spacing: 0.1rem;
    background: var(--melon);
    color: var(--white);
    &:hover {
      background: var(--white);
      color: var(--melon);
      border: solid 0.5px var(--melon);
      padding: 9.5px 24.5px 9.5px 24.5px;
      transition: 0.3s ease;
    }
  }
`

/* Book Modal */

export const ModalHeader = styled(Modal.Header)`
  font-weight: 400;
  letter-spacing: 0.2rem;
  font-size: 30px;
  background-color: var(--melon);
  .title {
    color: var(--white);
    padding: 10px;
  }
`

export const ModalContent = styled(Modal.Body)`
  z-index: 10;
  text-align: left;
  padding: 25px;
  color: var(--txt-clr);
  background-color: var(--off-white);
  input {
    font-size: 20px;
    letter-spacing: 0.1rem;
    padding: 10px;
    font-family: var(--txt-font);
    margin: 15px 10px 15px 10px;
    border: none;
    border-radius: 5px;
    width: 90%;
    &:focus {
      opacity: 0.5;
      background-color: var(--white);
    }
  }
`

export const ProgressGroup = styled(FormGroup)`
  font-family: "var(--txt-font)",
  letter-spacing: 0.1rem;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  label {
    letter-spacing: 0.05rem;
    font-size: 20px;
    margin-right: 15px;
  }
`

export const SubmitButton = styled.button`
  border: none;
  padding: 7px 22px 7px 22px;
  margin-left: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 22px;
  background: var(--flora);
  color: var(--white);
  text-transform: lowercase;
  letter-spacing: 0.1rem;
  margin-top: 2.5rem;
  &:hover {
    background: var(--white);
    color: var(--flora);
    border: solid 0.5px var(--flora);
    padding: 6.5px 21.5px 6.5px 21.5px;
    transition: 0.3s ease;
  }
`
