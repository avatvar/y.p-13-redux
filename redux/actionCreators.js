import { SET_SUM, SET_FIRST, SET_MONTHS } from './actions';

export function setSum(value) {
  return { type: SET_SUM, payload: value };
}

export function setMonths(value) {
  return { type: SET_MONTHS, payload: value };
}

export function setFirst(value) {
  return { type: SET_FIRST, payload: value };
}
