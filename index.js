import { nanoid } from "./node_modules/nanoid/nanoid.js";

const coreLibrary = [];
const bookForm = document.querySelector("#new-book");

/**
 * Defines the Book constructor.
 * 
 * @param {string} title
 * @param {string} author
 * @param {number} pages
 * @param {string} status
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
    // Create the row for this book.
    const trow = document.createElement("tr");
    trow.setAttribute("data-bookId", book.id);


    // Create the data tables for this book.
    let bookData = Object.entries(book);
    for (let [key, value] of bookData) {

      if (key === 'id') continue;

      const tdata = document.createElement("td");
      if (value === 'read' || value === 'unread') {

        // Create a status slider.
        const statusSlider = document.createElement('div')
        const sliderIndicator = document.createElement('div')
        sliderIndicator.classList = 'slider-indicator';
        statusSlider.classList = `status-slider ${(value === 'read') ? 'read' : ''}`;
        statusSlider.appendChild(sliderIndicator);
        tdata.appendChild(statusSlider);

        statusSlider.addEventListener('click', () => {
          toggleStatus(book.id, coreLibrary, statusSlider);
        })
      }

      else {
        tdata.textContent = value;
      }

      // // Create delete button
      // const tdDelete = document.createElement('td');
      // const deleteButton = document.createElement('button');
      // deleteButton.classList = "btn-delete";
      // deleteButton.addEventListener('click', () => {
      //   deleteBook();
      // })
      trow.appendChild(tdata);
    }

    tbody.appendChild(trow);
  })
}

function toggleStatus(id, library, node) {
  const matchingBook = library.find(book => book.id === id);
  matchingBook.status = (matchingBook.status === 'read') ? 'unread' : 'read';
  node.classList.toggle('read');
}
