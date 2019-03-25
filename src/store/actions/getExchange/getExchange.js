import Axios from "axios";
import dispatchExchange from '../dispatchExchange/dispatchExchange';


const getCurrency = (from,to) => {
  return async dispatch => {
    const response = await Axios.get(`https://free.currencyconverterapi.com/api/v6/convert?q=${from}_${to},${to}_${from}&compact=ultra&apiKey=49b2c6e7b669c74bdc02`)
    dispatch(dispatchExchange(response.data[`${from}_${to}`]))
  }
}

export default getCurrency