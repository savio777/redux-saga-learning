export default function user(state = {}, action) {
  switch (action.type) {
    case 'CONFIRM_LOGIN':
      return {
        name: action.payload.name,
        user: action.payload.user,
        logado: true,
        error: '',
      };
    case 'ERROR_LOGIN':
      return {
        name: '',
        user: action.payload.user,
        logado: false,
        error: action.payload.error,
      };
    case 'LOGOUT':
      return {
        name: '',
        user: '',
        logado: false,
        error: '',
      };
    default:
      return state;
  }
}
