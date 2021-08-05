let books = [];

let bookContainer = document.querySelector(".book-container");
let newBookButton = document.querySelector("#new-book-button");
let dropDown = document.querySelector("#new-book-container");
let cancelDropdown = document.getElementById("cancel");
let addBookButton = document.getElementById("add")
let formInputs = Array.from(document.querySelectorAll(".inputs"));

window.addEventListener("keydown", handleClick);
dropDown.addEventListener("click", handleClick);
cancelDropdown.addEventListener("click", resetDropdown);
newBookButton.addEventListener("click", newBookDropDown);

addBookButton.addEventListener("click", () => {
    let newBook = formInputs.reduce((total, input) => ({
        ...total, [input.id] : input.value
    }), {})
    let bookInfo = new Book(newBook.titleInput, newBook.authorInput, newBook.pagesInput, newBook.readInput);
    console.log(bookInfo);

    if (bookInfo.title === "" || bookInfo.author === "" || bookInfo.pages === "" || bookInfo.read === "" || bookInfo.read === "Please select an option") {
        alert("Please fill all sections");
    } else {
        books.push(bookInfo);
        displayBook(bookInfo);
        resetDropdown();
    }
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBook(bookInfo) {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book-collection");

    let newTitle = document.createElement("p"),
        newAuthor = document.createElement("p"),
        newPages = document.createElement("p"),
        newRead = document.createElement("button");

    newTitle.textContent = bookInfo.title;
    newAuthor.textContent = bookInfo.author;
    newPages.textContent = bookInfo.pages;
    if (bookInfo.read === "Yes") {
        newRead.textContent = "Read";
    } else {
        newRead.textContent = "Not Read";
    }
    newRead.addEventListener("click", () => {
        newRead.textContent = (newRead.textContent === "Read") ? "Not Read" : "Read";
        newRead.style.backgroundColor = (newRead.textContent === "Read") ? "green" : "darkred";
    })

    newTitle.classList.add("title");
    newAuthor.classList.add("author");
    newPages.classList.add("pages");
    newRead.classList.add("read");
    newRead.style.backgroundColor = (newRead.textContent === "Read") ? "green" : "darkred";

    bookDiv.append(newTitle,newAuthor,newPages,newRead);
    bookContainer.append(bookDiv);
}

function newBookDropDown() {
    dropDown.style.opacity = "1";
    dropDown.style.pointerEvents = "all";
}

function resetDropdown() {
    formInputs.forEach((item) => {
        item.value = "";
    })
    dropDown.style.opacity = "0";
    dropDown.style.pointerEvents = "none";
}

function handleClick(input) {
    if (input.target.id === "new-book-container") {
        resetDropdown()
    }

    else if (input.key === "Escape") {
        resetDropdown()
    }
}

let exampleBook = new Book("Animal Farm", "George Orwell", "112", "No");
displayBook(exampleBook);