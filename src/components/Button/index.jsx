import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CustomButton } from './styles';

function Button({ id, dataPokemon, children }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const setPokemonSelected = () => {
    dispatch({ type: 'ADD_POKEMON_SELECTED', payload: dataPokemon })
    return history.push('/pokemon');
  }

  return (
    <CustomButton onClick={setPokemonSelected} id={id}>{children}</CustomButton>
  );
}

export default Button;