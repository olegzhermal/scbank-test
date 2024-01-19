import { combineReducers } from '@reduxjs/toolkit'

import { cards } from './cards'

const combinedReducer = combineReducers({
    cards,
})

export const rootReducer = (state, action) => {
    return combinedReducer(state, action)
}
