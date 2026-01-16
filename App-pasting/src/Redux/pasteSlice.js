import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pastes: localStorage.getItem("pastes")? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addTopastes: (state, action) => {
      
    },
    updateTopastes: (state, action) => {

    },
    resetAllpastes: (state, action) => {
      
    },
    removeFrompastes: (state, action) =>{

    }
  },
})

// Action creators are generated for each case reducer function
export const { addTopastes, updateTopastes, resetAllpastes, removeFrompastes } = pasteSlice.actions

export default pasteSlice.reducer