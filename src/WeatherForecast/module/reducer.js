import * as t from './actionTypes';

const initialState = {
  forecast: null,
  city: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case t.STORE_WEATHER_FORECAST:
      return {
        ...state,
        forecast: action.forecast,
        city: action.city
      }
    default:
      return state;
  }
}
