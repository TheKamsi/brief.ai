import Header from '/components/Header'
import Books from '/components/Books'
import { bookList } from './data'

export default function(){
    const renderBooks = bookList.map(book => {
        return(
            <Books 
                book={book}
            />
        )
    })
    return(
        <>
            <Header />
            <div id="books-container">
                {renderBooks}
            </div>
        </>
    )
}