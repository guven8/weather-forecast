import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import WeatherForecast from './WeatherForecast';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <WeatherForecast />
        </div>
      </Provider>
    );
  }
}

export default App;
