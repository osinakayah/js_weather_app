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
