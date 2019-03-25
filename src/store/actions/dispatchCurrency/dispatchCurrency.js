import {GET_CURRENCY} from '../actionTypes/actionTypes';

const dispatchCurrency = (baseCurrency,rates) => {
  return {
    type: GET_CURRENCY,
    baseCurrency,
    rates
  }
}

export default dispatchCurrency