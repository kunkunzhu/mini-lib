import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Library from "./components/Library/Library";
// import { books } from "./info/prestoredInfo"
import './App.css';
import axios from 'axios'

export default function Home() {
  const [libBooks, setLibBooks] = useState([])
  // start with empty list -> useState([])

  const addBook = (response) => {
    setLibBooks(libBooks.concat(response.data))
  }


  useEffect(() => {
    // console.log('effect')
    axios
      .get('http://localhost:4000/books')
      .then(response => {
        console.log('promise fulfulled')
        setLibBooks(response.data)
      })
  }, [])
  // console.log('render', libBooks.length, 'books')
  
  return (
    <div className="app">
      <Header addBook={addBook}/>
      <Library books={libBooks} />
    </div>
    );
}
