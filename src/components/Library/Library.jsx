import React, { useState } from "react";
import * as BookCardStyles from "./BookCardStyles"
import { BookDisplay, DisplayOptions } from "./LibraryStyles"

const Library = (props) => {
    const books = props.books

    const [show, setShow] = useState(0)

    let booksToShow = books
    if (show) {
        console.log("show") 
        console.log(show) 
        console.log("book progress") 
        booksToShow.map(book => console.log(book.progress))
        booksToShow = books.filter(book => book.progress === {show})
        if (!booksToShow.length) {
            console.log("WHY NO WORKING") 
        }
    }

    return(
         <>
            <DisplayOptions>
                <span onClick={()=> setShow(0)}>all</span>
                <span onClick={()=> setShow(1)}>💡</span>
                <span onClick={()=> setShow(2)}>🚧</span>
                <span onClick={()=> setShow(3)}>✅</span>
            </DisplayOptions>
            <BookDisplay>
                {booksToShow.map(book => {
                    let progress;
                    if (book.progress === 1) {
                        progress = "💡"
                    } else if (book.progress === 2) {
                        progress = "🚧"
                    } else {
                        progress = "✅"
                    }
                    return (
                    <BookCardStyles.BookWrapper 
                        progress={progress} 
                        key={book.id}
                        onClick={() => props.changeProgress(book.id)}
                    >
                        <BookCardStyles.BookInfo>
                            <h3 className="title">{book.title}</h3>
                            <h4 className="author">{book.author}</h4>
                        </BookCardStyles.BookInfo>
                        <BookCardStyles.Buttons progress={progress}>
                            <button className="progress">{progress}</button>
                            <button className="remove" 
                            onClick={() => props.deleteBook(book.id)}
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