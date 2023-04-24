import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        deviceType: 'mobile',
        isSidebarOpen: false
    },
    reducers: {
        setDeviceType: (state, action) => {
            state.deviceType = action.payload
        },
        setIsSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload
        }
    }
})

export const { setDeviceType, setIsSidebarOpen } = settingsSlice.actions
export const settingsReducer = settingsSlice.reducer
