export function addValue(text) {
  return {
    type: 'ASYNC_ADD_TODO',
    text,
  };
}

export function decreaseValue(index) {
  return {
    type: 'DECREASE_TODO',
    index,
  };
}
