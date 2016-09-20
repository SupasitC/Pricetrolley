import * as types from '../constants/action-types';

const initialState = {
  isLoggedIn: false,
  id: '',
  accessToken: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        id: action.id,
        accessToken: action.accessToken
      };

    default:
      return state;
  }
}
