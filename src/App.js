import React, { useState } from "react";
import Header from "./components/Header/Header";
import Library from "./components/Library/Library";
import { books } from "./info/prestoredInfo"
import './App.css';

export default function Home() {
  const [libBooks, setLibBooks] = useState(books)
  // start with empty list -> useState([])
  
  return (
    <div className="app">
      <Header/>
      <Library books={libBooks} />
    </div>
    );
}
