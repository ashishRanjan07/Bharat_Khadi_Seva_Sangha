//Actions
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const THEME_CHANGE = 'THEME_CHANGE';
export const LOGIN = 'LOGIN';
export const SAVEDATA = 'SAVEDATA';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';

// Action Creator
export const changeLanguage = language => ({
  type: CHANGE_LANGUAGE,
  payload: language,
});

export const switchMode = mode => ({
  type: THEME_CHANGE,
  payload: mode,
});

export const login = data => ({
  type: LOGIN,
  payload: data,
});

export const saveData = data => ({
  type: SAVEDATA,
  payload: data,
});

export const saveUserData = data => ({
  type: SAVE_USER_INFO,
  payload: data,
});
