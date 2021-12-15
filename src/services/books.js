import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/books'

const booksService = {
    getBooks: () => axios.get(baseUrl),

    createBook: newObject => axios.post(baseUrl, newObject),

    updateBook: (id, newObject) => axios.put(`${baseUrl}/${id}`, newObject),

    deleteBook: id => axios.delete(`${baseUrl}/${id}`)
}

export default booksService