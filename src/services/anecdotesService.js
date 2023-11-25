import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotesAtStart'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}
const createAnecdote = async (content) => {
    const object = { content, votes: false }
    const response = await axios.post(baseUrl, object)
    return response.data
}

export default { getAll, createAnecdote }