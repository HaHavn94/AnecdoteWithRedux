import { createSlice } from '@reduxjs/toolkit'

const notiSlice = createSlice({
    name: 'noti',
    initialState: '',
    reducers:
    {
        setNoti(state, action) {
            return action.payload

        },
    }
})

export const { setNoti } = notiSlice.actions
export default notiSlice.reducer