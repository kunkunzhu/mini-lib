import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Library from "./components/Library/Library";
import booksService from "./services/books";
import './App.css';

export default function Home() {
  const [libBooks, setLibBooks] = useState([])

  const addBook = (values) => {
    console.log(values)
    const newBook = {
      title: values.title,
      author: values.author,
      progress: values.progress
    }
    console.log(newBook)
    booksService
      .createBook(newBook)
      .then(response => {
        setLibBooks(libBooks.concat(response.data))
      })
  }

  const changeProgress = (id) => {
    let book = libBooks.find(b => b.id === id)
    book.progress < 3 ? book.progress += 1 : book.progress = 1;
    console.log(book)
    booksService
    .updateBook(id, book)
    .then(response => {
      setLibBooks(
        libBooks.map( 
          libBook => 
          libBook.id !== id ? libBook : response.data
          )
      )
    })
  }

  const deleteBook = (id) => {
    booksService
    .deleteBook(id)
    .then(response => {
      setLibBooks(
        libBooks.filter(b => b.id !== id)
      )
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
      deleteBook={deleteBook}
      changeProgress={changeProgress} 
      books={libBooks} />
    </div>
    );
}
