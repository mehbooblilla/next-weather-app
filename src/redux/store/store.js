

import { createStore } from 'redux';
import weatherReducer from '../Reducers/WeatherReducer';

const store = createStore(weatherReducer);

export default store;
