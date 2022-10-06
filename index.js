import { nanoid } from "./node_modules/nanoid/nanoid.js";

let coreLibrary = [];
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
  this.status = status;
  this.title = title;
  this.author = author;
  this.pages = pages;
}

/**
 * Receives an array of books and adds a new book to that array.
 * 
 */

function addBookToLibrary() {
  const bookData = new FormData(bookForm);
  const newBook = new Book();
  for (const [key, value] of bookData) {
    newBook[key] = value;
  }

  // Prepend with id for easy identification in renderTable
  newBook.id = `id${nanoid()}`;
  coreLibrary.push(newBook);
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addBookToLibrary();
  renderTable();
})


/**
 * Takes an array of books and renders it in table format.
 * 
 */
function renderTable() {
  const tableWrapper = document.querySelector('.table-wrapper');
  while (tableWrapper.hasChildNodes()) {
    tableWrapper.removeChild(tableWrapper.firstChild);
  }

  renderDesktopTable();
  console.log('ran')
}


/**
 *  Creates a book table for desktop view
 * */
function renderDesktopTable() {
  // Create the table head;
  const tableHeadersText = [String.fromCharCode(160), 'Status', 'Title', 'Author', 'Pages'];

  const tableHeaders = document.createElement('thead');
  const tableHeaderRow = document.createElement('tr');

  tableHeadersText.forEach(text => {
    const tableHead = document.createElement('th');
    tableHead.textContent = text;
    tableHead.classList = (text === String.fromCharCode(160) || text === 'Status') ? 'button-th' : 'th-data';
    tableHeaderRow.appendChild(tableHead);
  })

  tableHeaders.appendChild(tableHeaderRow);


  // create the table body:
  const tableBody = document.createElement('tbody');
  coreLibrary.forEach(book => {
    // Create the row for this book.
    const trow = document.createElement("tr");
    trow.setAttribute("data-bookId", book.id);


    // Create delete button
    const tdDelete = document.createElement('td');
    tdDelete.classList = 'td-delete'
    const deleteButton = document.createElement('button');
    deleteButton.classList = "btn-delete";
    deleteButton.addEventListener('click', () => {
      deleteBook(book.id);
    })
    tdDelete.appendChild(deleteButton);
    trow.appendChild(tdDelete);

    // Create the data tables for this book.
    let bookData = Object.entries(book);
    for (let [key, value] of bookData) {

      if (key === 'id') continue;

      const tdata = document.createElement("td");
      if (value === 'read' || value === 'unread') {

        tdata.classList = 'td-status'
        // Create a status slider.
        const statusSlider = document.createElement('div')
        const sliderIndicator = document.createElement('div')
        sliderIndicator.classList = 'slider-indicator';
        statusSlider.classList = `status-slider ${(value === 'read') ? 'read' : ''}`;
        statusSlider.appendChild(sliderIndicator);
        tdata.appendChild(statusSlider);

        statusSlider.addEventListener('click', () => {
          toggleStatus(book.id, statusSlider);
        })
      }

      else {
        tdata.classList = 'td-data';
        tdata.textContent = value;
      }
      trow.appendChild(tdata);
    }

    tableBody.appendChild(trow);
  })

  const table = document.createElement('table');
  table.appendChild(tableHeaders);
  table.appendChild(tableBody);

  const tableWrapper = document.querySelector('.table-wrapper');
  tableWrapper.appendChild(table);
}

/**
 *  Toggles the book's read/unread status in the coreLibrary.
 * 
 * @params {string} id
 * @params {Element} the statusSlider html node 
 */
function toggleStatus(id, node) {
  const matchingBook = coreLibrary.find(book => book.id === id);
  matchingBook.status = (matchingBook.status === 'read') ? 'unread' : 'read';
  node.classList.toggle('read');
}


/**
 * Removes from the library the book whose id matches the parameter id passed in
 * 
 * @params {string} id
 * @params {book[]} an array of books
 **/
function deleteBook(id) {
  const newLibrary = coreLibrary.filter(book => book.id !== id);
  coreLibrary = newLibrary;
  renderTable();
}