// своя реализация redux
// не используется
export default function createStore(reducer, initState = {}) {
  let state = initState;

  const subscribers = [];

  return {
    dispatch(action) {
      state = reducer(state, action);
      subscribers.forEach((callback) => callback());
    },

    subscribe(callback) {
      subscribers.push(callback);
    },

    getState() {
      return state;
    },
  };
}
