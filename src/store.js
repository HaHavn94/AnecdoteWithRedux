import filterReducer from './reducers/filterReducer'
import anecdocteReducer from './reducers/anecdoteReducer'
import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'


const store = configureStore({
    reducer: {
        anecdocte: anecdocteReducer,
        filter: filterReducer,
        noti: notificationReducer
    }
})

export default store