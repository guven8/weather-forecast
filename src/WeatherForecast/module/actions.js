import * as t from './actionTypes';

export const storeWeatherForecast = ({ weatherForecast }) => ({
  type: t.STORE_WEATHER_FORECAST,
  weatherForecast
});