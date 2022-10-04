const coreLibrary = [];
const bookForm = document.querySelector("#new-book");

function Book(name, author, pages, status) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const bookData = new FormData(bookForm);
  let newBook = new Book();
  for (const [key, value] of bookData) {
    newBook[key] = value;
  }

  coreLibrary.push(newBook);
}
