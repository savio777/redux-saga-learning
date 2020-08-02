const INITIAL_STATE = {
  name: '',
  user: '',
  logado: false,
  error: '',
  loading: false,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ASYNC_REQUEST_LOGIN':
      return {...state, loading: true};
    case 'CONFIRM_LOGIN':
      return {
        name: action.payload.name,
        user: action.payload.user,
        logado: true,
        error: '',
        loading: false,
      };
    case 'ERROR_LOGIN':
      return {
        name: '',
        user: action.payload.user,
        logado: false,
        error: action.payload.error,
        loading: false,
      };
    case 'LOGOUT':
      return {
        name: '',
        user: '',
        logado: false,
        error: '',
        loading: false,
      };
    default:
      return state;
  }
}
