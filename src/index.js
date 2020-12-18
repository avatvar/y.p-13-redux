import { setFirst, setMonths, setSum } from '../redux/actionCreators';
// import createStore from '../redux/createStore';
import { createStore } from 'redux';
import mainReducer from '../redux/reducer';
import './styles.css';

const info = document.querySelector('.alert');
const calcBtn = document.querySelector('.btn-success');
const sumInput = document.querySelector('[name=summa]');
const monthInput = document.querySelector('[name=months]');
const firstInput = document.querySelector('[name=first]');

const initialState = {
  summa: 100000,
  months: 36,
  first: 0,
  percent: 15,
};

const store = createStore(
  mainReducer,
  { credit: initialState }, // credit - это для нашего creditReducer
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  render();
});

const rounded = (number) => +number.toFixed(2);

const calcCredit = (credit) => {
  const summa = credit.summa - credit.first;
  const coef = credit.percent / 12 / 100;
  const coefQ = Math.pow(1 + coef, credit.months);
  const annuity = (coef * coefQ) / (coefQ - 1);

  const mrc = Math.max(0, rounded(summa * annuity));
  const overMoney = Math.max(0, rounded(mrc * credit.months - summa));

  return `Ежемесячный платеж: ${mrc}р.<br />Переплата за кредит: ${overMoney}р.`;
};

function render() {
  const { credit } = store.getState();
  info.innerHTML = calcCredit(credit);
}

calcBtn.addEventListener('click', () => {
  alert('Кредит одобрен');
});

sumInput.addEventListener('change', (evt) => {
  store.dispatch(setSum(evt.target.value));
});

firstInput.addEventListener('change', (evt) => {
  store.dispatch(setFirst(evt.target.value));
});

monthInput.addEventListener('change', (evt) => {
  store.dispatch(setMonths(evt.target.value));
});

render();
