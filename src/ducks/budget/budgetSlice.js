import { createSlice } from "@reduxjs/toolkit";

export const budget = createSlice({
  name: 'budget',
  initialState: {
    monthlyCarbonBudget: 167,
    usedMonthlyCarbonBudget: 0
  },
  reducers: {
    setMonthlyCarbonBudget(state, action) {
      state.monthlyCarbonBudget = action.payload
    },
    addUsedCarbonBudget(state, action) {
      state.usedMonthlyCarbonBudget += action.payload
    }
  }
})

const { setMonthlyCarbonBudget, addUsedCarbonBudget } = budget.actions;

export const budgetActions = { setMonthlyCarbonBudget, addUsedCarbonBudget };

export const reducer = budget.reducer;
