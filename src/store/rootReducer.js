import {combineReducers} from '@reduxjs/toolkit';

import { emissions } from '../ducks/budget/budgetSlice';

const rootReducer = combineReducers({
  emissions: emissions.reducer,
})

export default rootReducer;