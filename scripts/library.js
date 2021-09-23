import {books} from './main.js';
import {Book} from './book.js';
import {showForm} from './form.js';


const addBook = (book) => {
    book = new Book(book.title, book.author, book.pages, book.read);
    books.push(book);
};
const addBooks = (newBooks) => { newBooks.forEach(book => addBook(book)) };

const removeBook = (e) => {
    const bookIndex = e.target.attributes["data-index"].value;
    books.splice(bookIndex, 1);
    showBooks();
};

const toggleRead = (e) => {
    const bookIndex = e.target.attributes["data-index"].value;
    let book = books[bookIndex];
    book.read = (book.read)? false : true;
    books[bookIndex] = book;
    showBooks();
}

const showBook = (book, i, library) => {
    let slot = document.createElement("div");
    slot.classList.add("book");
    

    let remove = document.createElement("div");
    remove.classList.add("book-section", "book-section-remove");
    let icon = document.createElement("img");
    icon.src = "assets/img/delete-96-coloured.png";  
    icon.alt = "remove"; 
    icon.setAttribute("data-index", i);
    remove.appendChild(icon);
    remove.addEventListener("click", removeBook);
    slot.appendChild(remove);
    
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
    // pages.textContent = book.pages + " pages";
    pages.textContent = `${book.pages} page${(book.pages > 1)? "s" : ""}`;
    details.appendChild(pages);

    let read = document.createElement("div");
    read.classList.add("book-section-detail", "book-section-read");
    icon = document.createElement("img");
    icon.setAttribute("data-index", i);
    icon.src = (book.read)? 
    "assets/img/checked-100-coloured.png" : 
    "assets/img/cancel-100-coloured.png";  
    icon.alt = (book.read)? "read" : "not read"; 
    icon.addEventListener("click", toggleRead);
    read.appendChild(icon);
    details.appendChild(read);


    slot.appendChild(details);

    library.appendChild(slot);
}

const showBooks = () => {

    // if (e) toggleAddCancel(e);

    const library = document.getElementById("library-container");
    library.innerHTML = "";
    library.classList.remove("newbook");
    library.classList.add("library");
    
    books.forEach((book, i) => {showBook(book, i, library)});

    let addButton = document.getElementById("add-button-header");
    addButton.src = addButton.src.replace('minus', 'plus');
    addButton.removeEventListener("click", showBooks);  
    addButton.addEventListener("click", showForm); 
}

export {addBook, addBooks, showBooks};