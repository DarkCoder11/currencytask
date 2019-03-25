import { GET_CURRENCY, ADD_FAVORITE } from '../../actions/actionTypes/actionTypes';

const initialState = {
  baseCurrency: null,
  rates: []
}

const currency = (state = initialState, action) => {
  const { type, rates, baseCurrency, index } = action;
  let newRate = [];
  for (let key in rates) {
    newRate.push({ name: key, rate: rates[key] })
  }
  switch (type) {
    case GET_CURRENCY:
      return {
        ...state,
        baseCurrency,
        rates: newRate
      }
    case ADD_FAVORITE:
      const items = [...state.rates]
      const deepClonedItems = items.map(item => {
        return {
          ...item
        }
      })
      let selectedItems = deepClonedItems.splice(index, 1)
      let orderedItems = [...selectedItems, ...deepClonedItems]
      return {
        ...state,
        rates: orderedItems
      }
    default:
      return state
  }
}

export default currency