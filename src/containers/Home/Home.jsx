/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { login } from '../../actions/authActions';
import {useDispatch, useSelector} from 'react-redux';
import {getNombre} from '../../reducers/loggedReducer';

const Home = () => {
  const dispatch = useDispatch();
  const nombre = useSelector((state)=>state);
  const handleClick = () => {
    dispatch(login('Geraldine'));
  }
  console.log(nombre)
  return (
    <div>
      <button type='button' onClick={handleClick}>Ciclo Redux</button>
    </div>
  );
};

export default Home;
