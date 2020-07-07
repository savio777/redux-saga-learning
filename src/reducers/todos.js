export default function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: Math.random(), text: action.text}];
    case 'DECREASE_TODO':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}
