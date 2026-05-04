import { configureStore } from '@reduxjs/toolkit'

import pageTitleReducer from './features/pageTitle/pageTitleSlice'
import waitListReducer from './features/waitList/waitListSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      pageTitle: pageTitleReducer,
      waitList: waitListReducer
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
