const root = 'http://api.openweathermap.org';
const APIKEY = '6aba3401eccb11ba8f4d3a5611c5b1b0';

export const fetchWeatherForecast = ({city, country}) => {
  const forecastEndpoint = `${root}/data/2.5/forecast?q=${city},${country}&mode=json&units=metric&APPID=${APIKEY}`
  return fetch(forecastEndpoint)
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad res from server');
      }
      return res.json();
    });
}
