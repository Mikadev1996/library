let books = [
    {
        id: 1,
        title: "Animal Farm",
        author: "George Orwell",
        pages: "112",
        read: true,
    },
    {
        id: 2,
        title: "1984",
        author: "Robert Greene",
        pages: "449",
        read: false,
    }
]

let bookCollection = document.querySelectorAll(".book-collection");
let newBookButton = document.querySelector("#new-book-button");
let dropDown = document.querySelector("#new-book-container");
let cancelDropdown = document.getElementById("cancel");
let addBookButton = document.getElementById("add");

let formInputs = Array.from(document.querySelectorAll(".inputs"));


window.addEventListener("keydown", handleClick);
dropDown.addEventListener("click", handleClick);
cancelDropdown.addEventListener("click", resetDropdown);
newBookButton.addEventListener("click", newBookDropDown);

addBookButton.addEventListener("click", (e) => {
    console.log("test")
})

function testFunction(input) {
    console.log(input);
}



function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function displayBook() {

}

function newBookDropDown() {
    dropDown.style.opacity = "1";
    dropDown.style.pointerEvents = "all";
}

function resetDropdown() {
    console.log("reset")
    dropDown.style.opacity = "0";
    dropDown.style.pointerEvents = "none";
}

function handleClick(input) {
    if (input.target.id === "new-book-container") {
        resetDropdown()
    }

    if (input.key === "Escape") {
        resetDropdown()
    }

}
