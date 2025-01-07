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
    document.getElementById('results')!.innerHTML = Books(books.filter(book => {
        return book.title.toLowerCase().includes(query.toLowerCase())
    }));
}

document.getElementById('search-input')?.addEventListener('keyup', (event) => {
    const query = (event.target as HTMLInputElement).value

    render(bookData, query)
})

document.getElementById('search-form')?.addEventListener('submit', (event) => {
    event.preventDefault()
})

render(bookData)