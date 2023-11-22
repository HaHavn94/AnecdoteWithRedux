import { useDispatch, useSelector } from 'react-redux'
import { voting } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleVote }) => {
    return (
        <li >
            {anecdote.content}
            <strong> {anecdote.votes}</strong>
            <button onClick={handleVote} > vote </button>
        </li>

    )
}

const Anecdotes = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state)

    return (
        <ul>
            {anecdotes.map(a =>
                <Anecdote
                    key={a.id}
                    anecdote={a}
                    handleVote={() =>
                        dispatch(voting(a.id))
                    }
                />
            )}
        </ul>
    )
}

export default Anecdotes