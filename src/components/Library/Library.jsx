import React, { useState } from "react";
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
                    >
                        <BookCardStyles.BookInfo>
                            <h3 className="title">{book.title}</h3>
                            <h4 className="author">{book.author}</h4>
                        </BookCardStyles.BookInfo>
                        <BookCardStyles.Buttons progress={progress}>
                            <button className="progress">{progress}</button>
                            <button className="remove">
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