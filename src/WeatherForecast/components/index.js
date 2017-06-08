import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { isEqual } from 'lodash';
import * as a from '../module/actions'
import '../style.css';

class WeatherForecast extends Component {
  componentWillMount() {
    this.props.getWeatherForecast();
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.forecast, nextProps.forecast)) {
      this.renderForecast(nextProps.forecast);
    }
  }

  renderForecast = (forecast) => {
    this.weekForecast = Object.keys(forecast).map((dayForecast, i) => {
      let day = forecast[dayForecast][i].day;
      day = moment(day).format('ll')
      return (
          <div className="day" key={`${day}-${i}`}>
            <span className="date">{day}</span>
            {forecast[dayForecast].map(f => {
              const {icon, main} = f.weather[0];
              const {temp} = f.main;
              const hour = moment(f.dt_txt).format('HH:mm');
                return (
                  <div className="hour-weather" key={`${hour}-${i}`}>
                    <span className="weather-desc">{main}</span>
                    <span className="hour">{hour}</span>
                    <img
                      src={`http://openweathermap.org/img/w/${icon}.png`}
                      className="weather-icon"
                    />
                    <span className="weather">{temp} degrees</span>
                  </div>
                );
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
  mapStateToProps, { getWeatherForecast: a.getWeatherForecast }
)(WeatherForecast);
