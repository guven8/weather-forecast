import React, { Component } from 'react';
import { getWeatherForecast } from '../services';

class WeatherForecast extends Component {
  componentWillMount() {
    getWeatherForecast().then(res =>
      console.log(res)
    );
  }

  render() {
    return (
      <div className="weather-forecast">Weather Forecast</div>
    );
  }
}

export default WeatherForecast;
