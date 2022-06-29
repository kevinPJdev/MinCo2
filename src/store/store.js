const initialState = {
  allEmissionConstants: [],
  monthlyCarbonBudget: 100,
  monthlyTransportCost: 0
};

const setMonthlyCarbonBudget = () => {
  return {
    type: 'monthlyCarbonBudget/setMonthlyCarbonBudget',
    payload: 100
  }
}

const addTransportCost = (cost) => {
  return {
    type: 'monthlyTransportCost/addTransportCost',
    payload: cost
  }
}


