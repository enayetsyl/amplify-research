import { configureStore } from '@reduxjs/toolkit'
// import your reducers here
// import yourReducer from '../features/yourFeature/yourSlice'

export const store = configureStore({
  reducer: {
    // add your reducers here
    // yourFeature: yourReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
