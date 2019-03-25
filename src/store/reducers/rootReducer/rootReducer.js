import {combineReducers} from 'redux';
import currency from '../currency/currency';
import exchange from '../exchange/exchange';

export default combineReducers({
  currency,
  exchange
})