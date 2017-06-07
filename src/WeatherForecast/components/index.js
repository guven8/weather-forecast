import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { groupBy, isEqual } from 'lodash';
import { getWeatherForecast } from '../services';
import * as a from '../module/actions'
import '../style.css';

class WeatherForecast extends Component {
  componentWillMount() {
    const { storeWeatherForecast } = this.props;
    getWeatherForecast().then(res => {
      const weatherForecast = res.list.map(forecast => {
        return {
          ...forecast,
          day: moment(forecast.dt_txt).format('YYYY-MM-DD')
        }
      });
      storeWeatherForecast({
        forecast: groupBy(weatherForecast, 'day'),
        city: res.city.name
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.forecast, nextProps.forecast)) {
      this.renderForecast(nextProps.forecast);
    }
  }

  renderForecast = (forecast) => {
    this.weekForecast = Object.keys(forecast).map((dayForecast, i) => {
        const {day} = forecast[dayForecast];
        const hours = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00',
          '18:00', '21:00', '24:00'];
        return (
          <div className="day" key={`${day}-${i}`}>
            <span className="date">{day}</span>
            {forecast[dayForecast].map(f => {
              const {icon, main} = f.weather[0];
              const {temp} = f.main;
              const hour = moment(f.dt_txt).format('HH:mm');
                return (
                  <div className="hour-weather" key={`${hour}-${i}`}>
                    <span className="hour">{hour}</span>
                    <img
                      src={`http://openweathermap.org/img/w/${icon}.png`}
                      className="weather-icon"
                    />
                    <span className="weather">{temp} - {main}</span>
                  </div>
                )
              }
            )}
          </div>
        );
      }
    )
  }

  render() {
    return (
      <div className="weather-forecast">
        <span className="city">London</span>
        {this.weekForecast}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { forecast, city } = state.weatherForecast;
  return { forecast, city };
};

export default connect(
  mapStateToProps, { storeWeatherForecast: a.storeWeatherForecast }
)(WeatherForecast);
