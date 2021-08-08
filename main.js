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

    let inputs = {title: newBook.titleInput,
                 author: newBook.authorInput,
                 pages :newBook.pagesInput,
                 read: newBook.readInput}

    for (let input in inputs) {
        let inputValue = inputs[input];
        if (inputValue === "" || inputValue === "Please select an option") {
            alert("Please fill all sections");
            return;
        }
    }

    let bookInfo = new Book(books.length + 1, newBook.titleInput, newBook.authorInput, newBook.pagesInput, newBook.readInput);
    console.log(books);
    books.push(bookInfo);
    displayBook(bookInfo);
    resetDropdown();
})

function Book(id, title, author, pages, read) {
    this.id = id;
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
        newRead = document.createElement("button"),
        removeBook = document.createElement("button");

    removeBook.textContent = "Remove";
    removeBook.onclick = removeBookUpdate;

    newTitle.textContent = bookInfo.title;
    newAuthor.textContent = bookInfo.author;
    newPages.textContent = bookInfo.pages;

    if (bookInfo.read === "Yes") {
        newRead.textContent = "Read";
    } else {
        newRead.textContent = "Not Read";
    }

    newRead.addEventListener("click", () => {
        bookInfo.read = (bookInfo.read === "Yes") ? "No" : "Yes";
        newRead.textContent = (newRead.textContent === "Read") ? "Not Read" : "Read";
        newRead.style.backgroundColor = (newRead.textContent === "Read") ? "green" : "darkred";

        console.log(books);
    })

    newTitle.dataset.id = bookInfo.id;
    newTitle.classList.add("title");
    newAuthor.classList.add("author");
    newPages.classList.add("pages");
    newRead.classList.add("read");
    removeBook.classList.add("remove-book")
    newRead.style.backgroundColor = (newRead.textContent === "Read") ? "green" : "darkred";

    bookDiv.append(newTitle,newAuthor,newPages,newRead, removeBook);
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

function removeBookUpdate(e) {
    let nodes = Array.from(e.target.parentElement.childNodes)
    let data = nodes[0];
    let id = data.getAttribute("data-id")



    // books = books.filter((book) => {
    //     return book !== (book.id.toString() === id);
    // })

    books.forEach((item) => {
        if (item.id.toString() === id) {
            books = books.filter(book => book !== item);
            console.log("removed")
        }
    })
    
    updateDisplay();
}

function updateDisplay() {
    bookContainer.innerHTML = "";
    books.forEach((book) => {
        displayBook(book);
    })
}

let exampleBook = new Book(0,"Animal Farm", "George Orwell", "112", "No");
let example2 = new Book(1, "1984", "George Orwell", "Unknown", "No");

books.push(exampleBook, example2);

displayBook(exampleBook);
displayBook(example2);
