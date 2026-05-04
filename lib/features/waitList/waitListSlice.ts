import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  isOpen: boolean
}

const initialState: InitialState = {
  isOpen: false
}

export const waitListSlice = createSlice({
  name: 'waitList',
  initialState,
  reducers: {
    openWaitList: state => {
      state.isOpen = true
    },
    closeWaitList: state => {
      state.isOpen = false
    }
  }
})

export const { openWaitList, closeWaitList } = waitListSlice.actions

export default waitListSlice.reducer
