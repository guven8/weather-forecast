import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as a } from '../WeatherForecast';
import './style.css';

class Header extends Component {
  constructor() {
    super();
    this.state = { city: '' };
  };

  handleChange = (e) => {
    this.setState({ city: e.target.value });
  }

  submitCity = (e) => {
    e.preventDefault();
    this.props.getWeatherForecast({ city: this.state.city });
  }

  render() {
    return (
      <header className="main-header">
        <form onSubmit={this.submitCity}>
          <input
            type="text"
            value={this.state.city}
            placeholder="Choose city"
            onChange={this.handleChange}
          />
          <button onClick={this.submitCity}>Submit</button>
        </form>
        {this.props.city ?
          <div>
            <span className="city">{this.props.city.name},</span>{' '}
            <span className="city"> { this.props.city.country}</span>
          </div>
          :
          null
        }
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  const { city } = state.weatherForecast;
  return { city };
};

export default connect(
  mapStateToProps, { getWeatherForecast: a.getWeatherForecast }
)(Header)