// keys for actiontypes
export const ActionTypes = {
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  SET_USER: 'SET_USER',
};

export function signinUser({ username, password }, history) {
  return (dispatch) => {
    // saving username as a token so that if page refreshes user is still signed in
    // only saving username as token because it's only frontend
    localStorage.setItem('custom_classrooms_token', username);
    history.push('/homepage');
    dispatch({ type: ActionTypes.AUTH_USER });
    dispatch({ type: ActionTypes.SET_USER, payload: username });
  };
}

export function signupUser({ email, password, username }, history) {
  return (dispatch) => {
    // saving username as a token so that if page refreshes user is still signed in
    // only saving username as token because it's only frontend
    localStorage.setItem('custom_classrooms_token', username);
    history.push('/homepage');
    dispatch({ type: ActionTypes.AUTH_USER });
    dispatch({ type: ActionTypes.SET_USER, payload: username });
  };
}

// deletes token from localstorage and deauths
export function signoutUser(history) {
  return (dispatch) => {
    history.push('/');
    localStorage.removeItem('custom_classrooms_token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
  };
}
