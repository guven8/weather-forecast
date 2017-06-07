const root = 'http://api.openweathermap.org';
const APIKEY = '6aba3401eccb11ba8f4d3a5611c5b1b0';
const londonForecast = `${root}/data/2.5/forecast?q=London,us&mode=json&APPID=${APIKEY}`

export const getWeatherForecast = () =>
  fetch(londonForecast)
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad res from server');
      }
      return res.json();
    });

