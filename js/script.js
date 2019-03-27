
const WeatherApp = (function () {
  const fahrenheitToCelcius = (fahrenheit) => {
    return (fahrenheit - 32) * (5/9)
  }
  const parseJsonResponse = (weatherData) => {
    if (typeof weatherData === "string") weatherData = JSON.parse(weatherData)
    const fahrenheit = weatherData.main.temp;
    const celcius = fahrenheitToCelcius(fahrenheit)
    return {
      celcius,
      fahrenheit
    }
  }
  const fetchWeather = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e686eb81691141fa6168377f12b326cd`
    return new Promise((resolve, reject) => {
      fetch(URL).then((response) => {
        response.json().then((res) => {
          resolve(parseJsonResponse(res))
        }).catch((error) => {
          reject(error)
        })
      }).catch((error) => {
        reject(error)
        console.log(error)
      })
    });

  }

})()
