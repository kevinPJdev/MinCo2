import { configureStore } from "@reduxjs/toolkit";

import { budget } from '../ducks/budget/budgetSlice';
import { emissions } from '../ducks/emissions/emissionsSlice';

const store = configureStore({
  reducer: {
    budget: budget.reducer,
    emissions: emissions.reducer,
  }
})

export default store;
