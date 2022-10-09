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

function Book(title, author, pages, status, id) {
  this.id = id;
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

/**
 * Takes an array of books and renders it in table format.
 * 
 */
function renderTable(library) {
  const booksWrapper = document.querySelector('.books-wrapper');
  while (booksWrapper.hasChildNodes()) {
    booksWrapper.removeChild(booksWrapper.firstChild);
  }

  renderBooks(library);
}


/**
 *  Creates a book table for desktop view
 * */
function renderBooks(library) {
  let temp = [...library];
  const booksWrapper = document.querySelector('.books-wrapper');
  let index = 1;


  if (!temp.length) {
    const doge = document.createElement('div');
    doge.classList = 'doge';

    const empty = document.createElement('div');
    empty.classList = 'book empty';
    empty.appendChild(doge);


    const dogeText = document.createElement('p');
    dogeText.textContent = "Wow, such empty..."
    empty.appendChild(dogeText)

    booksWrapper.appendChild(empty)
  }

  else {
    temp.reverse().forEach(book => {
      const bookDiv = document.createElement('div');
      bookDiv.classList = `book accent-${(index === 11) ? index = 1 : index++}`;

      const title = document.createElement('p');
      title.classList = 'title';
      title.textContent = book.title;
      bookDiv.appendChild(title);

      const author = document.createElement('p');
      author.classList = 'author';
      author.textContent = `by ${book.author}`;
      bookDiv.appendChild(author);

      const pages = document.createElement('span');
      pages.textContent = book.pages;
      bookDiv.appendChild(pages);

      // Create delete button:
      const deleteBtn = document.createElement('button');
      deleteBtn.classList = 'btn-base btn-delete';
      deleteBtn.addEventListener('click', () => {
        deleteBook(book.id);
      })

      // Create status slider:
      const statusSlider = document.createElement('div');
      const sliderIndicator = document.createElement('div');
      statusSlider.classList = `status-slider ${book.status === 'read' ? 'read' : ''}`;
      sliderIndicator.classList = `slider-indicator`;
      statusSlider.appendChild(sliderIndicator);

      statusSlider.addEventListener('click', () => {
        toggleStatus(book.id, statusSlider);
      })

      // Create action group;
      const actionGroup = document.createElement('div');
      actionGroup.classList = 'action-group';
      actionGroup.appendChild(deleteBtn);
      actionGroup.appendChild(statusSlider);
      bookDiv.appendChild(actionGroup);

      // Attach to book wrapper:
      booksWrapper.appendChild(bookDiv);
    })
  }
}

// Event Listeners:
const addBookModalBtn = document.querySelector(".header-btn-add");
addBookModalBtn.addEventListener('click', toggleAddBookModal)


bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addBookToLibrary();
  renderTable(coreLibrary);
  toggleAddBookModal();
  bookForm.querySelector('#title').value = '';
  bookForm.querySelector('#author').value = '';
  bookForm.querySelector('#pages').value = '';
})

const closeModal = document.querySelector('.btn-close');
closeModal.addEventListener('click', toggleAddBookModal);

const search = document.querySelector('header input');
search.addEventListener('input', filterSearch)

// Helpers
/**
 * Toggles the add book form's visibility.
 * */
function toggleAddBookModal() {
  const addBookModal = document.querySelector('.add-book-modal');
  addBookModal.classList.toggle("active")
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
  renderTable(coreLibrary);
}

function filterSearch() {
  let filteredBooks;
  if (search.value === '') {
    filteredBooks = coreLibrary;
  }
  filteredBooks = coreLibrary.filter(book => book.title.includes(search.value));
  renderTable(filteredBooks);
}

// Initial population
renderBooks(coreLibrary);