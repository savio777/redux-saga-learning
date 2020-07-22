export function requestLogin(user) {
  return {
    type: 'ASYNC_REQUEST_LOGIN',
    user,
  };
}
