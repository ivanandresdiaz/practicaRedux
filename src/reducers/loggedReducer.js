/* eslint-disable import/prefer-default-export */
import { types } from '../types';

const initialState = {
  nombre: 'Default Nombre',
  edad:''
};
//pasan cosas redux las hace.
export const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login: {
      console.log('llego al reducer para actualizar el estado')
    return{...state, nombre:action.payload } }
    default:
      return state;
  }
};
//Inumutabilidad: crea un nuevo estado. cada vez que se crea un nuevo estado se renderiza el componente

export const getNombre = (state) => state.logged.nombre;
export const getEdad  = (state) => state.logged.edad;
