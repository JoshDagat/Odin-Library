function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { nanoid } from 'nanoid';
import './index.css';
var coreLibrary = [];
var bookForm = document.querySelector("#new-book");
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
  var bookData = new FormData(bookForm);
  var newBook = new Book();

  var _iterator = _createForOfIteratorHelper(bookData),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      newBook[key] = value;
    } // Prepend with id for easy identification in renderTable

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  newBook.id = "id".concat(nanoid());
  coreLibrary.push(newBook);
}
/**
 * Takes an array of books and renders it in table format.
 * 
 */


function renderTable(library) {
  var booksWrapper = document.querySelector('.books-wrapper');

  while (booksWrapper.hasChildNodes()) {
    booksWrapper.removeChild(booksWrapper.firstChild);
  }

  renderBooks(library);
}
/**
 *  Creates a book table for desktop view
 * */


function renderBooks(library) {
  var temp = _toConsumableArray(library);

  var booksWrapper = document.querySelector('.books-wrapper');
  var index = 1;

  if (!temp.length) {
    var doge = document.createElement('div');
    doge.classList = 'doge';
    var empty = document.createElement('div');
    empty.classList = 'book empty';
    empty.appendChild(doge);
    var dogeText = document.createElement('p');
    dogeText.textContent = "Wow, such empty...";
    empty.appendChild(dogeText);
    booksWrapper.appendChild(empty);
  } else {
    temp.reverse().forEach(function (book) {
      var bookDiv = document.createElement('div');
      bookDiv.classList = "book accent-".concat(index === 11 ? index = 1 : index++); // Create title and attach to bookDiv (1st child):

      var title = document.createElement('p');
      title.classList = 'title';
      title.textContent = book.title;
      bookDiv.appendChild(title); // Create author and attach to bookDiv (2nd child):

      var author = document.createElement('p');
      author.classList = 'author';
      author.textContent = "by ".concat(book.author);
      bookDiv.appendChild(author); // Create delete button:

      var deleteBtn = document.createElement('button');
      deleteBtn.classList = 'btn-base btn-delete';
      deleteBtn.addEventListener('click', function () {
        deleteBook(book.id);
      }); // Create status slider:

      var statusSlider = document.createElement('div');
      var sliderIndicator = document.createElement('div');
      statusSlider.classList = "status-slider ".concat(book.status === 'read' ? 'read' : '');
      sliderIndicator.classList = "slider-indicator";
      statusSlider.appendChild(sliderIndicator);
      statusSlider.addEventListener('click', function () {
        toggleStatus(book.id, statusSlider);
      }); // Create action group and append delete + status slider:

      var actionGroup = document.createElement('div');
      actionGroup.classList = 'action-group';
      actionGroup.appendChild(deleteBtn);
      actionGroup.appendChild(statusSlider); // Create pages and append to bookFooter

      var pages = document.createElement('span');
      pages.textContent = "".concat(book.pages, " pages"); // Create bookFooter and append to bookDiv (3rd child);

      var bookFooter = document.createElement('div');
      bookFooter.classList = 'bookFooter';
      bookFooter.appendChild(pages);
      bookFooter.appendChild(actionGroup);
      bookDiv.appendChild(bookFooter); // Attach to book wrapper:

      booksWrapper.appendChild(bookDiv);
    });
  }
} // Event Listeners:


var addBookModalBtn = document.querySelector(".header-btn-add");
addBookModalBtn.addEventListener('click', toggleAddBookModal);
bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addBookToLibrary();
  renderTable(coreLibrary);
  toggleAddBookModal();
  bookForm.querySelector('#title').value = '';
  bookForm.querySelector('#author').value = '';
  bookForm.querySelector('#pages').value = '';
});
var closeModal = document.querySelector('.btn-close');
closeModal.addEventListener('click', toggleAddBookModal);
var search = document.querySelector('header input');
search.addEventListener('input', filterSearch); // Helpers

/**
 * Toggles the add book form's visibility.
 * */

function toggleAddBookModal() {
  var addBookModal = document.querySelector('.add-book-modal');
  addBookModal.classList.toggle("active");
}
/**
 *  Toggles the book's read/unread status in the coreLibrary.
 * 
 * @params {string} id
 * @params {Element} the statusSlider html node 
 */


function toggleStatus(id, node) {
  var matchingBook = coreLibrary.find(function (book) {
    return book.id === id;
  });
  matchingBook.status = matchingBook.status === 'read' ? 'unread' : 'read';
  node.classList.toggle('read');
}
/**
 * Removes from the library the book whose id matches the parameter id passed in
 * 
 * @params {string} id
 * @params {book[]} an array of books
 **/


function deleteBook(id) {
  var newLibrary = coreLibrary.filter(function (book) {
    return book.id !== id;
  });
  coreLibrary = newLibrary;
  renderTable(coreLibrary);
}

function filterSearch() {
  var filteredBooks;

  if (search.value === '') {
    filteredBooks = coreLibrary;
  }

  filteredBooks = coreLibrary.filter(function (book) {
    return book.title.includes(search.value);
  });
  renderTable(filteredBooks);
} // Initial population


renderBooks(coreLibrary);