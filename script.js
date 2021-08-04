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
// let book = Object.create(Book).init("Let's try a very long title to see ho it fits", "Sergeant Amandine Opportune", 135, false);
myLibrary.push(book);
book = Object.create(Book).init("Le virus: crise ou opportunité?", "Professeur Didier Raoult", 1035, true);
myLibrary.push(book);
book = Object.create(Book).init("Mon combat", "Emmanuel  Macron", 35, false);
myLibrary.push(book);

const bookShelf = document.getElementById("bookshelf-container");
// book = document.createElement("div").classList.add("book");

myLibrary.forEach(element => {

    book = document.createElement("div");
    book.classList.add("book");


    let title = document.createElement("div");
    title.classList.add("book-section", "book-section-title");
    title.textContent = element.title;
    book.appendChild(title);


    let author = document.createElement("div");
    author.classList.add("book-section", "book-section-author");
    author.textContent = element.author;
    book.appendChild(author);


    let details = document.createElement("div");
    details.classList.add("book-section", "book-section-others");

    let pages = document.createElement("div");
    pages.classList.add("book-section-detail", "book-section-pages");
    pages.textContent = element.pages + " pages";
    details.appendChild(pages);

    let read = document.createElement("div");
    read.classList.add("book-section-detail", "book-section-read");
    let icon = document.createElement("img");
    icon.src = (element.read)? 
    "assets/img/checked-100-coloured.png" : 
    "assets/img/cancel-100-coloured.png";  
    icon.alt = (element.read)? "read" : "not read"; 
    read.appendChild(icon);
    details.appendChild(read);


    book.appendChild(details);

    bookShelf.appendChild(book);
    console.log(element.info())
});
