import Axios from "axios";
import dispatchCurrency from '../dispatchCurrency/dispatchCurrency';


const getCurrency = (base = "USD") => {
  return async dispatch => {
    const response = await Axios.get(`https://api.exchangeratesapi.io/latest?base=${base}`)
    dispatch(dispatchCurrency(response.data.base,response.data.rates))
  }
}

export default getCurrency