class Book {

    constructor(title = "", author = "", pages = 0, read = false) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
  
    get title() {
        return this._title;
    }  
    set title(value) {
        if (typeof(value) != "string") {
            alert("Title must be a string.");
            return;
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }  
    set author(value) {
        if (typeof(value) != "string") {
            alert("Author must be a string.");
            return;
        }
        this._author = value;
    }
    
    get pages() {
        return this._pages;
    }  
    set pages(value) {
        if (typeof(parseInt(value)) != "number") {
            alert("Pages must be a number.");
            return;
        }
        this._pages = value;
    }

    get read() {
        return this._read;
    }  
    set read(value) {
        this._read = value;
    }
  
}
  

export {Book};


// const Book = {
//     init: function(title = "", author = "", pages = 0, read = false){
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//         this.read = read;
//         return this
//     },
//     info: function() {
//         const read = (this.read)? "already read": "not read yet";
//         return `"${this.title}", by ${this.author}, 
//             ${this.pages} page${(this.pages > 1)? "s" : ""}, 
//             ${read}.`
//     }
// }

// const newBook = (...args) => {
//     let book = Object.create(Book).init(...args);
//     return book;
// }

// export {newBook};