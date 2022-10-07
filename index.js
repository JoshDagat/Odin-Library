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
function renderBooks() {
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