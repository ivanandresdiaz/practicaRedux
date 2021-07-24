import { types } from '../types';

export const login = (nombre) => {
  return{
    type: types.login,
    payload:nombre,
  }
}