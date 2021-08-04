let myLibrary = [];

const Book = {
    init: function(title = "", author = "", pages = 0, read = false){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        return this
    },
    info: function() {
        const read = (this.read)? "already read": "not read yet";
        return `"${this.title}", by ${this.author}, ${this.pages} pages, ${read}.`
    }
}

let book = Object.create(Book).init("Le temps des prunes", "Sergeant Amandine Opportune", 135, false);
myLibrary.push(book);
book = Object.create(Book).init("Le virus: crise ou opportunité?", "Professeur Didier Raoult", 1035, true);
myLibrary.push(book);
book = Object.create(Book).init("Mon combat", "Emmanuel  Macron", 35, false);
myLibrary.push(book);
book = Object.create(Book).init("Les tapas", "Manuel Vals", 5, false);
myLibrary.push(book);
book = Object.create(Book).init("Fringe", "Boris Johnson", 2, false);
myLibrary.push(book);

const bookShelf = document.getElementById("bookshelf-container");

const populateBookShelf = (book) => {
    slot = document.createElement("div");
    slot.classList.add("book");


    let title = document.createElement("div");
    title.classList.add("book-section", "book-section-title");
    title.textContent = book.title;
    slot.appendChild(title);


    let author = document.createElement("div");
    author.classList.add("book-section", "book-section-author");
    author.textContent = book.author;
    slot.appendChild(author);


    let details = document.createElement("div");
    details.classList.add("book-section", "book-section-others");

    let pages = document.createElement("div");
    pages.classList.add("book-section-detail", "book-section-pages");
    pages.textContent = book.pages + " pages";
    details.appendChild(pages);

    let read = document.createElement("div");
    read.classList.add("book-section-detail", "book-section-read");
    let icon = document.createElement("img");
    icon.src = (book.read)? 
    "assets/img/checked-100-coloured.png" : 
    "assets/img/cancel-100-coloured.png";  
    icon.alt = (book.read)? "read" : "not read"; 
    read.appendChild(icon);
    details.appendChild(read);


    slot.appendChild(details);

    bookShelf.appendChild(slot);
}

myLibrary.forEach(book => populateBookShelf(book));
