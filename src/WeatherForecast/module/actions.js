import * as t from './actionTypes';
import { groupBy } from 'lodash';
import moment from 'moment';
import { fetchWeatherForecast } from '../services';

export const getWeatherForecast = ({ city = 'London', country = 'uk' } = {}) => {
  return dispatch => {
    fetchWeatherForecast({ city, country }).then(res => {
      const weatherForecast = res.list.map(forecast => {
        return {
          ...forecast,
          day: moment(forecast.dt_txt).format('YYYY-MM-DD')
        }
      });
      dispatch({
        type: t.STORE_WEATHER_FORECAST,
        forecast: groupBy(weatherForecast, 'day'),
        city: res.city
      });
    });
  }
}