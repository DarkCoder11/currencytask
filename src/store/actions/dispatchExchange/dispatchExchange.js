import {EXCHANGE} from '../actionTypes/actionTypes';

const dispatchExchange = (exchange) => {
  return {
    type: EXCHANGE,
    exchange
  }
}

export default dispatchExchange