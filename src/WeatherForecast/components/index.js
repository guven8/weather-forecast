import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWeatherForecast } from '../services';
import * as a from '../module/actions'
import '../style.css';

class WeatherForecast extends Component {
  componentWillMount() {
    const { storeWeatherForecast } = this.props;
    getWeatherForecast().then(res =>
      console.log(res)
    );
  }

  render() {
    return (
      <div className="weather-forecast">
        <div className="day">
          <span className="date">2017-06-07</span>
          <span className="city">London</span>
          <div className="three-hour-forecast">00:00</div>
          <div className="three-hour-forecast">03:00</div>
          <div className="three-hour-forecast">06:00</div>
          <div className="three-hour-forecast">09:00</div>
          <div className="three-hour-forecast">12:00</div>
          <div className="three-hour-forecast">15:00</div>
          <div className="three-hour-forecast">18:00</div>
          <div className="three-hour-forecast">21:00</div>
          <div className="three-hour-forecast">24:00</div>
        </div>
        <div className="day">
          <span className="date">2017-06-08</span>
          <span className="city">London</span>
          <div className="three-hour-forecast">00:00</div>
          <div className="three-hour-forecast">03:00</div>
          <div className="three-hour-forecast">06:00</div>
          <div className="three-hour-forecast">09:00</div>
          <div className="three-hour-forecast">12:00</div>
          <div className="three-hour-forecast">15:00</div>
          <div className="three-hour-forecast">18:00</div>
          <div className="three-hour-forecast">21:00</div>
          <div className="three-hour-forecast">24:00</div>
        </div>
        <div className="day">
          <span className="date">2017-06-09</span>
          <span className="city">London</span>
          <div className="three-hour-forecast">00:00</div>
          <div className="three-hour-forecast">03:00</div>
          <div className="three-hour-forecast">06:00</div>
          <div className="three-hour-forecast">09:00</div>
          <div className="three-hour-forecast">12:00</div>
          <div className="three-hour-forecast">15:00</div>
          <div className="three-hour-forecast">18:00</div>
          <div className="three-hour-forecast">21:00</div>
          <div className="three-hour-forecast">24:00</div>
        </div>
        <div className="day">
          <span className="date">2017-06-10</span>
          <span className="city">London</span>
          <div className="three-hour-forecast">00:00</div>
          <div className="three-hour-forecast">03:00</div>
          <div className="three-hour-forecast">06:00</div>
          <div className="three-hour-forecast">09:00</div>
          <div className="three-hour-forecast">12:00</div>
          <div className="three-hour-forecast">15:00</div>
          <div className="three-hour-forecast">18:00</div>
          <div className="three-hour-forecast">21:00</div>
          <div className="three-hour-forecast">24:00</div>
        </div>
        <div className="day">
          <span className="date">2017-06-11</span>
          <span className="city">London</span>
          <div className="three-hour-forecast">00:00</div>
          <div className="three-hour-forecast">03:00</div>
          <div className="three-hour-forecast">06:00</div>
          <div className="three-hour-forecast">09:00</div>
          <div className="three-hour-forecast">12:00</div>
          <div className="three-hour-forecast">15:00</div>
          <div className="three-hour-forecast">18:00</div>
          <div className="three-hour-forecast">21:00</div>
          <div className="three-hour-forecast">24:00</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = s => s;

export default connect(
  mapStateToProps, { storeWeatherForecast: a.storeWeatherForecast }
)(WeatherForecast);
