import { combineReducers } from 'redux';

function pokemons(state = [], action) {
    switch(action.type) {
        case 'ADD_POKEMON_LIST':
            return [
                ...state,
                ...action.payload
            ];
        default:
            return state;
    }
}

function pokemonSelected(state = false, action) {
    switch(action.type) {
        case 'ADD_POKEMON_SELECTED':
            return action.payload;
        default:
            return state;
    }
}

const reducers = combineReducers({
    pokemons,
    pokemonSelected
})

export default reducers;