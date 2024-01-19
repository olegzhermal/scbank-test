import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        init: (state, action) => {
            state.data = action.payload
        }
    },
})

export const cards = cardsSlice.reducer

export const { init } = cardsSlice.actions

