import bookData from './bookstore.json'

const Book = (book: typeof bookData[number]) => {
    return `
        <li>${book.title}</li>
    `
}

const Books = (books: typeof bookData) => {
    return `
        <ul>
            ${books.map(book => Book(book)).join('')}
        </ul>
    `
}

const render = (books: typeof bookData, query: string = '') => {
    document.body.innerHTML = Books(books.filter(book => {
        return book.title.toLowerCase().includes(query.toLowerCase())
    }));
}

render(bookData)