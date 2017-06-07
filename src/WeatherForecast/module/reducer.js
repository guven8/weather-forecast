import * as t from './actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case t.STORE_WEATHER_FORECAST:
      return {
        ...action.weatherForecast
      }
    default:
      return state;
  }
}
