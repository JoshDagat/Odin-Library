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
 * Adds a book to the coreLibrary array
 */
function addBookToLibrary() {
  const bookData = new FormData(bookForm);
  const newBook = new Book();
  for (const [key, value] of bookData) {
    newBook[key] = value;
  }

  coreLibrary.push(newBook);
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addBookToLibrary();
  updateTable();
})


/**
 * Renders && re-renders the table upon changes to coreLibrary. 
 */
function updateTable() {
  const tbody = document.querySelector("#table-body");

  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.lastChild);
  }

  coreLibrary.forEach(book => {
    const trow = document.createElement("tr");

    Object.values(book).forEach(value => {
      const tdata = document.createElement("td");
      tdata.textContent = value;

      trow.appendChild(tdata);
    })

    tbody.appendChild(trow);
  })
}
