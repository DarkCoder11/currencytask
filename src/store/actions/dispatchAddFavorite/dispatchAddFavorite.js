import {ADD_FAVORITE} from '../actionTypes/actionTypes';

const dispatchAddFavorite = (index) => {
  return {
    type: ADD_FAVORITE,
    index
  }
}

export default dispatchAddFavorite