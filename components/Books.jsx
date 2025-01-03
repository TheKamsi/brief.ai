// import { bookList } from "/src/data.js"


export default function(props){
    return(
        <div className="indiviual-book-container">
            <div className="book-div-top">
            <img
            src={props.book.imageLocation}
            alt="book title"
            className="book-image"
            />
            <div className="added-functionality">
            <button href=""><i class="fa-solid fa-headphones"></i></button>
            <button href=""><i class="fa-solid fa-star"></i></button>
            <button href=""><i class="fa-solid fa-podcast"></i></button>
            </div>
        </div>
        <div className="book-div-bottom">
            <h2 className="book-category-title">{props.book.bookCategoryTitle}</h2>
            <p className="book-title">
            {props.book.bookTitle}
            </p>
            <p className="book-author">{props.book.bookAuthor}</p>
        </div>
        </div>
    )
}


/* <div className="indiviual-book-container">
          <div className="book-div-top">
            <img
              src="/public/book-images/first-20-hrs.png"
              alt="book title"
              className="book-image"
            />
            <div className="added-functionality">
              <button href="">a</button>
              <button href="">b</button>
              <button href="">c</button>
            </div>
          </div>
          <div className="book-div-bottom">
            <h2 className="book-category-title">The First 20 Hours: How to Learn Anything...Fast</h2>
            <p className="book-title">
            ${book.bookTitle}
            </p>
            <p className="book-author">By Josh Kaufman</p>
          </div>
        </div> */