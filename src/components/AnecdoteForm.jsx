import { useDispatch } from 'react-redux'
import { createAne } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAne = (event) => {
        event.preventDefault()
        const content = event.target.ane.value
        event.target.ane.value = ''
        dispatch(createAne(content))
    }

    return (
        <form onSubmit={addAne}>
            <input name="ane" />
            <button type="submit">add</button>
        </form>
    )
}

export default AnecdoteForm