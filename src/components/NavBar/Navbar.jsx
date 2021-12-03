import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";
import { NavWrapper } from "../Header/headerStyles";
import BookButton from "../BookButton/BookButton"

// const AccountModal = () => {
//   return (
//     <Modal></Modal>
//   )
// }

const Navbar = (props) => {
  const [account, setAccount] = useState(false);
  // const [accountModalShow, setAccountModalShow] = useState(false);

  return (
    <NavWrapper>
      <div className="accountWrapper">
        {!account && (
          <div className="loggedOut">
            <button
              onClick={() => {
                setAccount(true);
                // setAccountModalShow(true);
              }}
            >
              Log In.
            </button>
          </div>
        )}
        {account && (
          <div className="loggedIn">
            <button>Account.</button>
            <button onClick={() => setAccount(false)}>Log Out.</button>
          </div>
        )}
      </div>
      <BookButton addBook={props.addBook} />
    </NavWrapper>
  );
};

export default Navbar;