import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Library from "./components/Library/Library";
import booksService from "./services/books";
import './App.css';

export default function Home() {
  const [libBooks, setLibBooks] = useState([])
  // start with empty list -> useState([])

  const addBook = (values) => {
    const newBook = {
      title: values.title,
      author: values.author,
      progress: values.progress
    }

    booksService
      .createBook(newBook)
      .then(response => {
        setLibBooks(libBooks.concat(response.data))
      })
  }

  const changeProgress = (id) => {
    let book = libBooks.find(b => b.id === id)
    book.progress < 3 ? book.progress += 1 : book.progress = 1;

    booksService 
      .updateBook(id, book)
      .then(response => {
      setLibBooks(
        libBooks.map( 
          libBook => 
          libBook.id !== id ? libBook : response.data))
    })
  }

  useEffect(() => {
    booksService
      .getBooks()
      .then(response => {
        console.log('promise fulfulled')
        setLibBooks(response.data)
      })
  }, [])
  
  return (
    <div className="app">
      <Header addBook={addBook}/>
      <Library 
      changeProgress={changeProgress} 
      books={libBooks} />
    </div>
    );
}
