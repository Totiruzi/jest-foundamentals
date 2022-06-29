let cities = []

//   const initializeCityDatabase = () => {
//     cities.push('Ekaterinbourge');
//     cities.push('Krasnodar');
//     cities.push('Lagos')
//   }
  
// const isCity = (city) => {
//   return cities.includes(city);
// }

// const clearCityDatabase  = () => {
//   return cities = []
// }

function initializeCityDatabase() {
  cities.push('Ekaterinbourge');
  cities.push('Krasnodar');
  cities.push('Lagos')
}

function isCity(city) {
return cities.includes(city);
}

function clearCityDatabase() {
return cities = []
}

module.exports = { initializeCityDatabase, isCity, clearCityDatabase }