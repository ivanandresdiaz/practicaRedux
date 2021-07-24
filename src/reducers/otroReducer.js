/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  datosOtro: 'Default blalabllfaks',
};
//pasan cosas redux las hace.
export const otroReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'otroReducer': {
      console.log('llego al reducer para actualizar el estado');
      return { ...state, datosOtro: action.payload }; }
    default:
      return state;
  }
};
