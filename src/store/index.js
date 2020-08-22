import { createStore } from 'redux';
import reducers from './reducers/pokemons.js';

const store = createStore(reducers);

export default store;