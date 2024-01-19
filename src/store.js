import { configureStore } from '@reduxjs/toolkit'

import { rootReducer } from './reducers/rootReducer'

const makeStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export const store = makeStore()