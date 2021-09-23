import {addBooks, showBooks} from './library.js';
import {showForm} from './form.js';

let books = [];

let defaultBooks = [
    { title: "Le temps des prunes", author: "Sergeant Amandine Opportune", pages: 135, read: false },
    { title: "Le virus: crise ou opportunité?", author: "Professeur Didier Raoult", pages: 1035, read: true },
    { title: "Mon combat", author: "Emmanuel  Macron", pages: 225, read: false },
    { title: "Les tapas", author: "Manuel Vals", pages: 145, read: false },
    { title: "Fringe", author: "Boris Johnson", pages: 150, read: false },
    { title: "A l'eau", author: "Nabilla", pages: 1, read: false },
]


addBooks(defaultBooks);
showBooks();

export {books};



