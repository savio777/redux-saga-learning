export default function todos(state = [], action) {
  console.log('action reducer', action);

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {id: Math.random(), text: action.payload.text}];
    case 'DECREASE_TODO':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    default:
      return state;
  }
}
