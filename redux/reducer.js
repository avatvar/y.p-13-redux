import { combineReducers } from 'redux';
import { SET_SUM, SET_FIRST, SET_MONTHS } from './actions';

function creditReducer(
  state = { months: 0, summa: 0, first: 0, percent: 15 },
  action
) {
  switch (action.type) {
    case SET_SUM:
      return { ...state, summa: action.payload };
    case SET_MONTHS:
      return { ...state, months: action.payload };
    case SET_FIRST:
      return { ...state, first: action.payload };
    default:
      return state;
  }
}

function themeReducer(state = {}, action) {
  return state;
}

export default combineReducers({
  credit: creditReducer, // creditReducer будет работать только со "своим" кусочком state
  theme: themeReducer
});

// теперь state будет содержать два объекта 
// { credit : {}, theme : {}}