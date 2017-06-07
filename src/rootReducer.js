import { combineReducers } from 'redux';
import * as WeatherForecast from './WeatherForecast';

export default combineReducers({
  [WeatherForecast.constants.NAME]: WeatherForecast.reducer
});
