import {createSlice} from '@reduxjs/toolkit';

const initialState= [];

export const emissions = createSlice({
  name: 'emissions',
  initialState,
  reducers: {
    createEmission(state, action) {
      state.push(action.payload)
    },
    deleteEmission(state, action) {
      return (state.filter((item) => item.id != action.payload))
    }
  }
})

const { createEmission } = emissions.actions;

export const actions = { createEmission };