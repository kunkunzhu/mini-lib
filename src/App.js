import React from "react";
import Header from "./components/Header/Header";
import Library from "./components/Library/Library";
import './App.css';

export default function Home() {
  return (
    <div className="app">
      <Header/>
      <Library/>
    </div>
    );
}
