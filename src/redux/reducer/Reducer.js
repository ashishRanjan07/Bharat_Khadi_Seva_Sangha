import {
  CHANGE_LANGUAGE,
  LOGIN,
  SAVE_USER_INFO,
  SAVEDATA,
  THEME_CHANGE,
} from '../action/Action';

//Initial State
const initialState = {
  language: 'en',
  mode: 'light',
  isLoggedIn: 'No',
  saveData: 'null',
  saveUserInfo: 'null',
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case THEME_CHANGE:
      return {
        ...state,
        mode: action.payload,
      };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case SAVEDATA:
      return {
        ...state,
        saveData: action.payload,
      };
    case SAVE_USER_INFO:
      return {
        ...state,
        saveUserInfo: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
