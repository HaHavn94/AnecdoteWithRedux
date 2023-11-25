import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotesService'


const anecdoteSlice = createSlice({
  name: 'anecdocte',
  initialState: [],
  reducers: {
    voting(state, action) {
      const id = action.payload
      const anecToChange = state.find(a => a.id === id)
      const changedAnec = { ...anecToChange, votes: anecToChange.votes + 1 }

      return state.map(a => a.id !== id ? a : changedAnec)
    },

    appendAnecdote(state, action) {
      state.push(action.payload)
    },

    setAnecdotes(state, action) {
      return action.payload
    }
  },
})



export const { voting, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAne = () => {
  return async dispatch => {
    const anecs = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecs))
  }
}

export const createAne = content => {
  return async dispatch => {
    const newAne = await anecdotesService.createAnecdote(content)
    dispatch(appendAnecdote(newAne))
  }
}

export default anecdoteSlice.reducer