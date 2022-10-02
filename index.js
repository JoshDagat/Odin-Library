const coreLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(name, author, pages, read) {
  let newBook = new Book(name, author, pages, read);

  coreLibrary.push(newBook);
}