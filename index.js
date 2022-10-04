import { nanoid } from "./node_modules/nanoid/nanoid.js";

const coreLibrary = [];
const bookForm = document.querySelector("#new-book");

/**
 * Defines the Book constructor.
 * 
 * @param {string} title
 * @param {string} author
 * @param {number} pages
 * @param {boolean} status
*/

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

/**
 * Receives an array of books and adds a new book to that array.
 * 
 * @params {library[]} an array of books.
 */

function addBookToLibrary(library) {
  const bookData = new FormData(bookForm);
  const newBook = new Book();
  for (const [key, value] of bookData) {
    newBook[key] = value;
  }

  // Prepend with id for easy identification in updateTable
  newBook.id = `id${nanoid()}`;
  library.push(newBook);
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addBookToLibrary(coreLibrary);
  updateTable(coreLibrary);
  console.log(coreLibrary)
})


/**
 * Takes an array of books and renders it in table format.
 * 
 * @params {library[]} an array of books. 
 */
function updateTable(library) {
  const tbody = document.querySelector("#table-body");

  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.lastChild);
  }

  library.forEach(book => {
    const trow = document.createElement("tr");
    trow.setAttribute("data-bookId", book.id);

    let bookData = Object.entries(book);

    for (let [key, value] of bookData) {

      if (key === 'id') continue;

      const tdata = document.createElement("td");

      if (value === 'read' || value === 'unread') {
        const statusSlider = document.createElement('div')
        const sliderIndicator = document.createElement('div')

        sliderIndicator.classList = 'slider-indicator';
        statusSlider.classList = `status-slider ${(value === 'read') ? 'read' : ''}`;

        statusSlider.appendChild(sliderIndicator);

        tdata.appendChild(statusSlider);
      }

      else {
        tdata.textContent = value;
      }

      trow.appendChild(tdata);
    }

    tbody.appendChild(trow);
  })
}
