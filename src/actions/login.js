import * as types from '../constants/action-types';

export function logIn(id, accessToken) {
  return{
    type: types.LOGIN,
    id,
    accessToken
  };
}
