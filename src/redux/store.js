import { configureStore } from '@reduxjs/toolkit'
import { settingsReducer } from './slices/settings.js'

const store = configureStore({
    reducer: {
        settings: settingsReducer
    }
})

export default store
