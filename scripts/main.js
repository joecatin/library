import {addBooks, showBooks} from './library.js';
import {showForm} from './form.js';

let books = [];

let defaultBooks = [
    {title: "Le temps des prunes", author: "Sergeant Amandine Opportune", pages: 135, read: false},
    {title: "Le virus: crise ou opportunité?", author: "Professeur Didier Raoult", pages: 1035, read: true},
    {title: "Mon combat", author: "Emmanuel  Macron", pages: 35, read: false},
    {title: "Les tapas", author: "Manuel Vals", pages: 5, read: false},
    {title: "Fringe", author: "Boris Johnson", pages: 2, read: false},
]

addBooks(defaultBooks);
showBooks();


let addButton = document.getElementById("add-button-header");
addButton.addEventListener("click", showForm);

export {books};



