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

const newBook = (...args) => {
    let book = Object.create(Book).init(...args);
    return book;
}

export {newBook};