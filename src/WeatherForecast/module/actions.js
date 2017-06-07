import * as t from './actionTypes';

export const storeWeatherForecast = ({ forecast, city } = {}) => ({
  type: t.STORE_WEATHER_FORECAST,
  forecast,
  city
});

