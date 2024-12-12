import { bookList } from "/data.js"

const booksContainer = document.getElementById("books-container")

// document.addEventListener('DOMContentLoaded', function(){
//     console.log('DOM Loaded')
// })

document.addEventListener('DOMContentLoaded', renderBooks(bookList))

function renderBooks(books){
    let booksArray = []
    for(let book of books){
        booksArray +=
        `
        <div class="indiviual-book-container">
          <div class="book-div-top">
            <img
              src="${book.imageLocation}"
              alt="book title"
              class="book-image"
            />
            <div class="added-functionality">
              <button href="">a</button>
              <button href="">b</button>
              <button href="">c</button>
            </div>
          </div>
          <div class="book-div-bottom">
            <h2 class="book-category-title">${book.bookCategoryTitle}</h2>
            <p class="book-title">
            ${book.bookTitle}
            </p>
            <p class="book-author">${book.bookAuthor}</p>
          </div>
        </div>
        `
    }
    booksContainer.innerHTML = booksArray
}