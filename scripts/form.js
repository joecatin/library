import {addBook, showBooks} from './library.js';


function logSubmit(event) {
    console.log(`Form Submitted! Time stamp: ${event.timeStamp}`);
    event.preventDefault();
  }
  

const newForm = () => {
    let form = document.createElement("form");
    form.id = "new-book-form";
    
    // let cancelContainer = document.createElement("div");
    // cancelContainer.id = "cancel-button-form";
    // let inputCancel = document.createElement("input");
    // inputCancel.type = "image";
    // inputCancel.id = "cancel";
    // inputCancel.name = "cancel";
    // inputCancel.alt = "cancel";
    // inputCancel.src = "../assets/img/cancel-whitesmoke.png";
    // cancelContainer.appendChild(inputCancel);
    // form.appendChild(cancelContainer);
    
    let inputContainer = document.createElement("div");
    let inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.id = "title";
    inputTitle.name = "title";
    inputTitle.placeholder = "title?";
    inputContainer.appendChild(inputTitle);
    form.appendChild(inputContainer);
    
    
    inputContainer = document.createElement("div");
    let inputAuthor = document.createElement("input");
    inputAuthor.type = "text";
    inputAuthor.id = "author";
    inputAuthor.name = "author";
    inputAuthor.placeholder = "author?";
    inputContainer.appendChild(inputAuthor);
    form.appendChild(inputContainer);
    
    
    inputContainer = document.createElement("div");
    let inputPages = document.createElement("input");
    inputPages.type = "text";
    inputPages.id = "pages";
    inputPages.name = "pages";
    inputPages.placeholder = "pages?";
    inputContainer.appendChild(inputPages);
    form.appendChild(inputContainer);
    
    
    inputContainer = document.createElement("div");
    
    let inputRead = document.createElement("div");
    inputRead.id = "read"
    let readText = document.createElement("div");
    readText.id = "text"
    readText.textContent = "read?"
    inputRead.appendChild(readText);
    let readSelect = document.createElement("div");
    readSelect.id = "select";
    let inputRadiobutton = document.createElement("input");
    inputRadiobutton.type = "radio";
    inputRadiobutton.id = "yes";
    inputRadiobutton.name = "read";
    inputRadiobutton.value = "yes";
    readSelect.appendChild(inputRadiobutton);
    let RadiobuttonLabel = document.createElement("label");
    RadiobuttonLabel.id = "yes";
    RadiobuttonLabel.for = "yes";
    RadiobuttonLabel.textContent = "yes";
    readSelect.appendChild(RadiobuttonLabel);
    inputRadiobutton = document.createElement("input");
    inputRadiobutton.type = "radio";
    inputRadiobutton.id = "no";
    inputRadiobutton.name = "read";
    inputRadiobutton.value = "no";
    let checked = document.createAttribute("checked");
    inputRadiobutton.setAttributeNode(checked);   
    readSelect.appendChild(inputRadiobutton);
    RadiobuttonLabel = document.createElement("label");
    RadiobuttonLabel.id = "no";
    RadiobuttonLabel.for = "no";
    RadiobuttonLabel.textContent = "no";
    readSelect.appendChild(RadiobuttonLabel);
    inputRead.appendChild(readSelect);
    
    // let inputAdd = document.createElement("div");
    // inputAdd.id = "add-button-form";
    // let inputAddSubmit = document.createElement("input");
    // inputAddSubmit.type = "submit";
    // inputAddSubmit.value = "add";
    // inputAdd.appendChild(inputAddSubmit)

    let inputAdd = document.createElement("div");
    inputAdd.id = "add-button-form";
    let inputAddSubmit = document.createElement("input");
    inputAddSubmit.type = "image";
    inputAddSubmit.name = "add";
    inputAddSubmit.alt = "add";
    inputAddSubmit.src = "./assets/img/plus-whitesmoke.png";
    inputAdd.appendChild(inputAddSubmit)
    
    inputContainer.appendChild(inputRead);
    inputContainer.appendChild(inputAdd);
    
    form.appendChild(inputContainer);
    
    form.name = "new-book";
    form.classList.add("form");

    form.addEventListener('submit', (e, books) => {processForm(e, books)});

    return form;
}


const showForm = (e) => {
    let form = newForm();
    let library = document.getElementById("library-container");
    library.innerHTML = "";
    library.classList.remove("library");
    library.classList.add("newbook");
    library.appendChild(form);

    let addButton = document.getElementById("add-button-header");
    addButton.src = addButton.src.replace('plus', 'minus');
    addButton.removeEventListener("click", showForm);
    addButton.addEventListener("click", showBooks);
}

const processForm = (e) => {

    // console.log(`Form Submitted! Time stamp: ${e.timeStamp}`);

    e.preventDefault();
    
    let book = {
        title: e.target["title"].value, 
        author: e.target["author"].value,
        pages: e.target["pages"].value, 
        read: (e.target["read"].value === "yes")
    }
    e.target.reset();

    addBook(book);
    showBooks();
}


export { showForm };