let library = [];
let i = 0; 

class Book {
    constructor (title, author, year, pages, read) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this.read = read;
    }

    addToLibrary() {
        library.push(this);
    }
}

let book1 = new Book('Harry Potter', 'JK Rowling', 1990, 270, 'yes');
let book2 = new Book('Lord Of The Rings', 'JR Tolkien', 1926, 460, 'no');
let book3 = new Book('Javascript For Dummies', 'Dom Man', 2020, 26, 'yes');

book1.addToLibrary();
book2.addToLibrary();
book3.addToLibrary();

const newBookForm = document.getElementById('new-book-form');

const addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', showForm);

const submitBtn = document.getElementById('submit-btn');
console.log(submitBtn);
submitBtn.addEventListener('click', submitForm);

let librarySection = document.getElementById('library-section');

render();

function render() {
    i++;

    library.forEach((book)=> {
        
        let read;
        if (book.read === 'yes') read = 'read';
        else read='not read';

        let newBook = document.createElement('div');
        newBook.id = i;

        let bookTitle = document.createElement('p');
        newBook.appendChild(bookTitle);
        bookTitle.append(book.title);
        bookTitle.id = 'title';

        let bookAuthor = document.createElement('p');
        newBook.appendChild(bookAuthor);
        bookAuthor.append(book.author);
        bookAuthor.id = 'author';

        let bookYear = document.createElement('p');
        newBook.appendChild(bookYear);
        bookYear.append(book.year);
        bookYear.id = 'year';

        let bookPages = document.createElement('p');
        newBook.appendChild(bookPages);
        bookPages.append(book.pages);
        bookPages.id = 'pages';

        let bookRead = document.createElement('p');
        newBook.appendChild(bookRead);
        bookRead.append(read);
        bookRead.id = 'read';

        let delBtn = document.createElement('button');
        delBtn.innerHTML = 'Remove';
        delBtn.id = 'remove-btn';
        newBook.appendChild(delBtn);
        delBtn.addEventListener('click', deleteBook(newBook));


        librarySection.appendChild(newBook);
    });
}

function showForm() {
   newBookForm.className = 'visible';
}

function submitForm() {
    console.log('hello');
    newBookForm.className = 'invisible';
    title = document.getElementById('form-title').value;
    author = document.getElementById('form-author').value;
    year = document.getElementById('form-year').value;
    pages = document.getElementById('form-pages').value;
    read = document.getElementById('form-read').value;

    
    let book = new Book(title, author, year, pages, read);
    clearLibrary();
    book.addToLibrary();
    render();
}

function clearLibrary() {
    while (library.length) {
        library.pop();
    }
}

function deleteBook(bookToDelete) {
    library.forEach((book) => {
        if (book.id === bookToDelete.id) {
            console.log(`I'm in`);
            library.splice[library[i], 1];
        }

    })
}