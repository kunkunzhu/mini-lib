import axios from 'axios'
const baseUrl = 'http://localhost:4001/books'

const booksService = {
    getBooks: () => axios.get(baseUrl),

    createBooks: (newObject) => axios.post(baseUrl, newObject),

    updateBooks: (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject),
}

export default booksService