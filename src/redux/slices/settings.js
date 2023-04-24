import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        isSidebarOpen: false
    },
    reducers: {
        setIsSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload
        }
    }
})

export const { setIsSidebarOpen } = settingsSlice.actions
export const settingsReducer = settingsSlice.reducer
