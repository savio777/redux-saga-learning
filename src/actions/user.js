export function requestLogin(user) {
  return {
    type: 'ASYNC_REQUEST_LOGIN',
    user,
  };
}

export function logout() {
  return {
    type: 'LOGOUT_ACTION',
  };
}
