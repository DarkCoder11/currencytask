import {EXCHANGE} from '../../actions/actionTypes/actionTypes';

const initialState = {
    exchange
}

const exchange = (state = initialState, action) => {
  const {type,exchange} = action;
  switch(type) {
    case EXCHANGE:
      return{
        ...state,
        exchange
      }
    default:
      return state
  }
}

export default exchange