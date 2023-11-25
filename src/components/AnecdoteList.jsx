import { useDispatch, useSelector } from 'react-redux'
import { voting } from '../reducers/anecdoteReducer'
import { setNoti } from '../reducers/notificationReducer'

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
    const anecdotes = useSelector(state => state.anecdocte.slice().sort((a, b) => a.votes - b.votes))
    const filterState = useSelector(state => state.filter)

    return (
        <ul>
            {anecdotes
                .map(a =>
                (
                    <div key={a.id}>
                        {a?.content?.includes(filterState) &&
                            <Anecdote
                                anecdote={a}
                                handleVote={() => {
                                    dispatch(voting(a.id))
                                    dispatch(setNoti(a.content))


                                }


                                }
                            />}
                    </div>)


                )}





        </ul>
    )
}

export default Anecdotes