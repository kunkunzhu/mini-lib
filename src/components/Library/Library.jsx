import React from "react";
import * as BookCardStyles from "./BookCardStyles"
import { BookDisplay } from "./LibraryStyles"
import { books } from "../../info/prestoredInfo"

const renderBookDisplay = () => {
    let bookDisplayArray = []
    // function changeProgress(i) {
    //     if (books[i][2] ==="💡") {
    //         books[i][2] = "🚧";
    //     }
    // }
    for (let i=0; i<books.length; i++) {
        let bookInfo = books[i]
        let progress = bookInfo[2]
        bookDisplayArray.push(
            <BookCardStyles.BookWrapper 
                progress={progress} 
                // onClick={changeProgress(i)}
            >
                <BookCardStyles.BookInfo>
                    <h3 className="title">{bookInfo[0]}</h3>
                    <h4 className="author">{bookInfo[1]}</h4>
                </BookCardStyles.BookInfo>
                <BookCardStyles.Buttons progress={progress}>
                    <button className="progress">{progress}</button>
                    <button className="remove">
                        <i class="fas fa-trash"> </i>
                    </button>
                </BookCardStyles.Buttons>
            </BookCardStyles.BookWrapper>
        )
    }
    return bookDisplayArray
}

// renderProjectCells = () => {
//     const projects = ['voicenoted', 'technova']
//     let projectArray = []
//     for(let i = 0; i < projects.length; i++) {
//         const project = ProjectsInfo[projects[i]]
//         projectArray.push(
//             <ProjectBox project={project}/>
//         )
//     }
//     return projectArray
// }

const Library = () => {

    return(
        <BookDisplay>
            {renderBookDisplay()}
        </BookDisplay>
    )
}

export default Library;