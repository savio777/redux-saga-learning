export function addValue(text) {
  return {
    type: 'ADD_TODO',
    text,
  };
}

export function decreaseValue(index) {
  return {
    type: 'DECREASE_TODO',
    index,
  };
}
