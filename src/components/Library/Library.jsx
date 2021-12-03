import React, { useState } from "react";
import axios from 'axios'
import * as BookCardStyles from "./BookCardStyles"
import { BookDisplay, DisplayOptions } from "./LibraryStyles"

const Library = (props) => {
    const { books } = props
    const [show, setShow] = useState("all")

    let booksToShow = books
    if (show !== "all") {
        // console.log(show) 
        booksToShow = books.filter(book => book.progress === {show})
    }

    // const deleteBook = (id) => {
    //     axios
    //     .delete('http://localhost:4000/books', newBook)
    //     .then(response => {
    //         console.log(response)
    //     })
    // }

    return(
         <>
            <DisplayOptions>
                <span onClick={()=> setShow("all")}>all</span>
                <span onClick={()=> setShow("💡")}>💡</span>
                <span onClick={()=> setShow("🚧")}>🚧</span>
                <span onClick={()=> setShow("✅")}>✅</span>
            </DisplayOptions>
            <BookDisplay>
                {booksToShow.map(book => {
                    let progress = book.progress
                    // console.log(progress)
                    return (
                    <BookCardStyles.BookWrapper 
                        progress={progress} 
                        key={book.id}
                        onClick={props.changeProgress(book.id)}
                    >
                        <BookCardStyles.BookInfo>
                            <h3 className="title">{book.title}</h3>
                            <h4 className="author">{book.author}</h4>
                        </BookCardStyles.BookInfo>
                        <BookCardStyles.Buttons progress={progress}>
                            <button className="progress">{progress}</button>
                            <button className="remove" 
                                // onClick={deleteBook(book.id)}
                            >
                                <i className="fas fa-trash"> </i>
                            </button>
                        </BookCardStyles.Buttons>
                    </BookCardStyles.BookWrapper>
                    )
                })}
            </BookDisplay>
        </>
    )
}


export default Library;