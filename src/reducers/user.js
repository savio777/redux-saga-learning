export default function user(state = {}, action) {
  switch (action.type) {
    case 'CONFIRM_LOGIN':
      return {
        name: action.payload.name,
        error: '',
      };
    case 'ERROR_LOGIN':
      return {
        name: '',
        error: action.payload.error,
      };
    default:
      return state;
  }
}
