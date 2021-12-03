import React from "react";
import { Title, Subtitle, Wrapper, BookPileWrapper } from "./headerStyles";
import Navbar from "../NavBar/Navbar"

const Bookpile = () => {
  return (
    <BookPileWrapper>
      <img className='a' src="https://i.ibb.co/xjm8C9K/Book.png" alt="book"/>
      <img className='b' src="https://i.ibb.co/xjm8C9K/Book.png" alt="book"/>
      <img className='c' src="https://i.ibb.co/xjm8C9K/Book.png" alt="book"/>
    </BookPileWrapper>
  )
}

const Header = (props) => {
  return (
    <Wrapper>
      <Bookpile/>
      <div className="words">
        <Title>personal library.</Title>
        <Subtitle>document your reading progress here!</Subtitle>
      </div>
      <Navbar addBook={props.addBook}/>
    </Wrapper>
  );
};

export default Header;