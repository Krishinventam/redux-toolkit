import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction('counter/incrementByAmount')

export const firststate = { value: 0 }

export const counterReducer = createReducer(firststate, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value+= action.payload
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value ++
    })
})