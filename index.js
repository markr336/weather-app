import { dayTabs } from "./createDOMElements.js"
import { dayTabsEventListner } from "./eventListners.js"
import { createTable } from "./weatherTable.js"
import { formatDate, timeTrimmed, roundToWholeNumber, roundToOneDecimal} from "./formatting.js"
import { convertCelciusToFahrenheit, convertFahrenheitToCelcius, convertKphToMph, convertMphToKph, convertToKilometres, convertToMiles } from "./unitConversions-1.js"
import { celsiusTempColour } from "./tempColour.js"
import { iconResizing, precipStyle } from "./styleTableElements.js"

console.log(roundToWholeNumber(1.89898))

// Toggle between celcius & fahrenheit


// API
let city = 'Edinburgh'
let API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=uk&key=L4MLNKS6TK5UBXFAPRX9SSYB8&contentType=json`

// Toggle between units from buttons
// Toggle Units


document.querySelector('.search-bar').value = city

// Units
let celcius = '°C'
let fahrenheit = '°F'
let mph = 'mph'
let kph = 'kph'
let miles = 'mi'
let km = 'km'

let tempUnit = celcius
let speedUnit = mph
let distanceUnit = miles




dayTabs()
createTable()
dayTabsEventListner()
unitSwitchEventListner()


// Begin loading data from here
const todayTab = document.getElementById('day0')
todayTab.classList.toggle('active-tab')
todayTab.classList.toggle('inactive-tab')
getWeatherData(API)


/**
 * use async to retrieve data
 * don't use async for logic such as styling
 */

const searchBar = document.querySelector('.search-bar')
searchBar.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    city = searchBar.value
      let newAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=uk&key=L4MLNKS6TK5UBXFAPRX9SSYB8&contentType=json`
      getWeatherData(newAPI)
  }
})

function showLoader() {
  const loader = document.querySelector('.loader')
  loader.classList.add('show')
}

function hideLoader() {
  const loader = document.querySelector('.loader')
  loader.classList.remove('show')
}

function hideAllElements() {
  const dayTabsContainer = document.querySelector('.day-tabs-container')
  dayTabsContainer.setAttribute('style', 'display: none')
  const table = document.querySelector('table')
  table.setAttribute('style', 'display: none')
}

hideAllElements()

function showAllElements() {
  const dayTabsContainer = document.querySelector('.day-tabs-container')
  dayTabsContainer.setAttribute('style', 'display: flex')
  const table = document.querySelector('table')
  table.setAttribute('style', 'display: block')
}

async function getWeatherData (API) {
  try {
    hideAllElements()
    showLoader()
    const getData = await fetch(API, {mode: 'cors'})
    const data = await getData.json()
    const todayConditions = data.currentConditions
    const weeksConditions = data.days
    todayDataForActiveTab(todayConditions, weeksConditions)
    weeksDataInTabs(weeksConditions)
    dataInTable(weeksConditions)
    hideLoader()
    showAllElements()
  }
  catch (error) {
    alert('Please enter a valid location')
    hideLoader()
  }
}

async function todayDataForActiveTab(todayConditions, weeksConditions) {
  todayTab.querySelector('.date').textContent = formatDate(weeksConditions[0].datetime)
  todayTab.querySelector('.weather-icon').setAttribute('src', `./images/${todayConditions.icon}.svg`)
  todayTab.querySelector('.weather-text').textContent = todayConditions.conditions
  todayTab.querySelector('.preciptation').textContent = `Preciptation ${roundToWholeNumber(todayConditions.precipprob)}%`
  if (speedUnit == kph) {
    todayTab.querySelector('.wind-speed-tab').textContent = `Wind ${roundToWholeNumber(convertMphToKph(todayConditions.windspeed))}${speedUnit}`
  }
  else {
    todayTab.querySelector('.wind-speed-tab').textContent = `Wind ${roundToWholeNumber(todayConditions.windspeed)}${speedUnit}`
  }
  todayTab.querySelector('.uv-index').textContent = `UV Index ${todayConditions.uvindex}`
  todayTab.querySelector('.sunrise').textContent = `Sunrise ${todayConditions.sunrise}`
  todayTab.querySelector('.sunset').textContent = `Sunset ${todayConditions.sunset}`
  if (tempUnit == fahrenheit) {
    todayTab.querySelector('.current-temp').textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(todayConditions.temp))}${tempUnit}`
    todayTab.querySelector('.feels-like').textContent = `Feels Like ${roundToWholeNumber(convertCelciusToFahrenheit(todayConditions.feelslike))}${tempUnit}`
    todayTab.querySelector('.max-temp').textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(weeksConditions[0].tempmax))}${tempUnit}`
    todayTab.querySelector('.min-temp').textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(weeksConditions[0].tempmin))}${tempUnit}`
  }
  else {
    todayTab.querySelector('.current-temp').textContent = `${roundToWholeNumber(todayConditions.temp)}${tempUnit}`
    todayTab.querySelector('.feels-like').textContent = `Feels Like ${roundToWholeNumber(todayConditions.feelslike)}${tempUnit}`
    todayTab.querySelector('.max-temp').textContent = `${roundToWholeNumber(weeksConditions[0].tempmax)}${tempUnit}`
    todayTab.querySelector('.min-temp').textContent = `${roundToWholeNumber(weeksConditions[0].tempmin)}${tempUnit}`
  }
  todayTab.querySelector('.description').textContent = weeksConditions[0].description
  todayTab.querySelector('.cloud-coverage').textContent = `Cloud Cover ${roundToWholeNumber(todayConditions.cloudcover)}%`
}

async function weeksDataInTabs(weeksConditions) {
  for (let i = 1; i < 7; i++) {
    const dayTab = document.getElementById(`day${i}`)
    dayTab.querySelector('.date').textContent = formatDate(weeksConditions[i].datetime)
    dayTab.querySelector('.weather-icon').setAttribute('src', `./images/${weeksConditions[i].icon}.svg`)
    dayTab.querySelector('.weather-text').textContent = weeksConditions[i].conditions
    dayTab.querySelector('.preciptation').textContent = `Preciptation ${roundToWholeNumber(weeksConditions[i].precipprob)}%`
    if (speedUnit == kph) {
      dayTab.querySelector('.wind-speed-tab').textContent = `Wind ${roundToWholeNumber(convertMphToKph(weeksConditions[i].windspeed))}${speedUnit}`
    }
    else {
      dayTab.querySelector('.wind-speed-tab').textContent = `Wind ${roundToWholeNumber(weeksConditions[i].windspeed)}${speedUnit}`
    }
    dayTab.querySelector('.uv-index').textContent = `UV Index ${weeksConditions[i].uvindex}`
    dayTab.querySelector('.sunrise').textContent = `Sunrise ${weeksConditions[i].sunrise}`
    dayTab.querySelector('.sunset').textContent = `Sunset ${weeksConditions[i].sunset}`
    if (tempUnit == fahrenheit) {
      dayTab.querySelector('.current-temp').textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(weeksConditions[i].temp))}${tempUnit}`
      dayTab.querySelector('.feels-like').textContent = `Feels Like ${roundToWholeNumber(convertCelciusToFahrenheit(weeksConditions[i].feelslike))}${tempUnit}`
      dayTab.querySelector('.max-temp').textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(weeksConditions[i].tempmax))}${tempUnit}`
      dayTab.querySelector('.min-temp').textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(weeksConditions[i].tempmin))}${tempUnit}`
    }
    else {
      dayTab.querySelector('.current-temp').textContent = `${roundToWholeNumber(weeksConditions[i].temp)}${tempUnit}`
      dayTab.querySelector('.feels-like').textContent = `Feels Like ${roundToWholeNumber(weeksConditions[i].feelslike)}${tempUnit}`
      dayTab.querySelector('.max-temp').textContent = `${roundToWholeNumber(weeksConditions[i].tempmax)}${tempUnit}`
      dayTab.querySelector('.min-temp').textContent = `${roundToWholeNumber(weeksConditions[i].tempmin)}${tempUnit}`
    }
    dayTab.querySelector('.description').textContent = weeksConditions[i].description
    dayTab.querySelector('.cloud-coverage').textContent = `Cloud Cover ${roundToWholeNumber(weeksConditions[i].cloudcover)}%`
  }
}

async function dataInTable(data) {

  console.log(data)
  // Day Row
  const dayCells = document.querySelectorAll('.day-header')
  for (let i = 0; i < 7; i++) {
    dayCells[i].textContent = formatDate(data[i].datetime)
  }

  // Time Row
  const timeCells = document.querySelectorAll('.time-header')
  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const cell = day * 24 + hour;
      timeCells[cell].textContent = timeTrimmed(data[day].hours[hour].datetime);
    }
  }

  // Weather data
  const weatherIcons = document.querySelectorAll('.weather-icon-table')
  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const cell = day * 24 + hour;
      weatherIcons[cell].classList.remove('shrink')
      weatherIcons[cell].setAttribute('src', `./images/${data[day].hours[hour].icon}.svg`)
      iconResizing(weatherIcons[cell], data[day].hours[hour].icon)
    }
  }

  // Precip data
  const precipCells = document.querySelectorAll('.precip-cell')
  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const cell = day * 24 + hour;
      precipCells[cell].textContent = `${roundToWholeNumber(data[day].hours[hour].precipprob)}%`
      precipCells[cell].setAttribute('style', 'color: black')
      precipStyle(precipCells[cell], roundToWholeNumber(data[day].hours[hour].precipprob))
    }
  }
    
  // Temp row
  const tempCells = document.querySelectorAll('.temp-cell')
  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const cell = day * 24 + hour;
      tempCells[cell].textContent = `${roundToWholeNumber(data[day].hours[hour].temp)}${tempUnit}`
      tempCells[cell].setAttribute('style', 'background-color: white')
      celsiusTempColour(tempCells[cell], roundToWholeNumber(data[day].hours[hour].temp))
      if (tempUnit == fahrenheit) {
        tempCells[cell].textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(data[day].hours[hour].temp))}${tempUnit}`
      }
    }
  }

  // Feels Like row
  const feelsLikeCells = document.querySelectorAll('.feels-like-cell')
  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const cell = day * 24 + hour;
      feelsLikeCells[cell].setAttribute('style', 'background-color: white')
      feelsLikeCells[cell].textContent = `${roundToWholeNumber(data[day].hours[hour].feelslike)}${tempUnit}`
      celsiusTempColour(feelsLikeCells[cell], roundToWholeNumber(data[day].hours[hour].feelslike))
      if (tempUnit == fahrenheit) {
        feelsLikeCells[cell].textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(data[day].hours[hour].feelslike))}${tempUnit}`
      }
    }
  }

  // Wind row
  const windDiretion = document.querySelectorAll('.fa-location-arrow')
  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const cell = day * 24 + hour;
      // font awesome icon is rotated to 45 degs by default so reset by deducting 45 deg
      windDiretion[cell].setAttribute('style', `rotate: ${data[day].hours[hour].winddir - 45}deg;`)
    }
  }
  const windSpeedDiv = document.querySelectorAll('.wind-speed')
  const windCells = document.querySelectorAll('.wind-cell')
  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const cell = day * 24 + hour;
      windCells[cell].setAttribute('style', 'color: black')
      windSpeedDiv[cell].textContent = `${roundToWholeNumber(data[day].hours[hour].windspeed)}${speedUnit}`
      if (roundToWholeNumber(data[day].hours[hour].windspeed) > 29) {
        windCells[cell].setAttribute('style', 'color: orange')
      }
      else if (roundToWholeNumber(data[day].hours[hour].windspeed) > 39) {
        windCells[cell].setAttribute('style', 'color: orangered')
      }
      else if (roundToWholeNumber(data[day].hours[hour].windspeed) > 49) {
        windCells[cell].setAttribute('style', 'color: red')
      }
      if (speedUnit == kph) {
        windSpeedDiv[cell].textContent = `${roundToWholeNumber(convertMphToKph(data[day].hours[hour].windspeed))}${speedUnit}`
      }  
    }

  }

  // Gust row
  const gustCells = document.querySelectorAll('.gust-cell')
  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const cell = day * 24 + hour;
      gustCells[cell].textContent = `${roundToWholeNumber(data[day].hours[hour].windgust)}${speedUnit}`
      gustCells[cell].setAttribute('style', 'font-weight: normal')
      if ((data[day].hours[hour].windgust) > 28) {
        gustCells[cell].setAttribute('style', 'font-weight: bold')
      }
      if (speedUnit == kph) {
        gustCells[cell].textContent = `${roundToWholeNumber(convertMphToKph(data[day].hours[hour].windgust))}${speedUnit}`
      }
    }
  }

  // Visbility row
  const visibilityCells = document.querySelectorAll('.visib-cell')
  for (let day = 0; day < 7; day++) {
    for (let hour = 0; hour < 24; hour++) {
      const cell = day * 24 + hour;
      visibilityCells[cell].textContent = `${roundToOneDecimal(data[day].hours[hour].visibility)}${distanceUnit}`
      visibilityCells[cell].setAttribute('style', 'color: lightgrey')
      if (data[day].hours[hour].visibility > 12.43 && data[day].hours[hour].visibility <= 24.86) {
        visibilityCells[cell].setAttribute('style', 'color: green')
      }
      else if (data[day].hours[hour].visibility > 6.22 && data[day].hours[hour].visibility <= 12.43) {
        visibilityCells[cell].setAttribute('style', 'color: orange')
      }
      else if (data[day].hours[hour].visibility > 2.49 && data[day].hours[hour].visibility <= 6.22) {
        visibilityCells[cell].setAttribute('style', 'color: orangered')
      }
      else if (data[day].hours[hour].visibility > 0.62 && data[day].hours[hour].visibility <= 2.49) {
        visibilityCells[cell].setAttribute('style', 'color: red')
      }
      else if (data[day].hours[hour].visibility <= 0.62) {
        visibilityCells[cell].setAttribute('style', 'color: red; font-weight: bold')
      }
      if (distanceUnit == km) {
        visibilityCells[cell].textContent = `${roundToOneDecimal(convertToKilometres(data[day].hours[hour].visibility))}${distanceUnit}`
      }
    }
  }

    // Humidity row
    const humidityCells = document.querySelectorAll('.hum-cell')
    for (let day = 0; day < 7; day++) {
        for (let hour = 0; hour < 24; hour++) {
          const cell = day * 24 + hour;
          humidityCells[cell].textContent = `${roundToWholeNumber(data[day].hours[hour].humidity)}%`
        }
    }

    // UV row
    const uvBox = document.querySelectorAll('.uv-box')
    for (let day = 0; day < 7; day++) {
        for (let hour = 0; hour < 24; hour++) {
          const cell = day * 24 + hour;
          uvBox[cell].textContent = `${data[day].hours[hour].uvindex}`
          if (data[day].hours[hour].uvindex < 1) {
            uvBox[cell].setAttribute('style', 'background-color: lightgrey')
          }
          if (data[day].hours[hour].uvindex > 0 && data[day].hours[hour].uvindex < 3) {
            uvBox[cell].setAttribute('style', 'background-color: green')
          }
          if (data[day].hours[hour].uvindex > 2 && data[day].hours[hour].uvindex < 6) {
            uvBox[cell].setAttribute('style', 'background-color: yellow')
          }
          if (data[day].hours[hour].uvindex > 5 && data[day].hours[hour].uvindex < 8) {
            uvBox[cell].setAttribute('style', 'background-color: orange')
          }
          if (data[day].hours[hour].uvindex > 7 && data[day].hours[hour].uvindex < 11) {
            uvBox[cell].setAttribute('style', 'background-color: red')
          }
          if (data[day].hours[hour].uvindex > 11) {
            uvBox[cell].setAttribute('style', 'background-color: purple')
          }
        }
    }  
}

export function unitSwitchEventListner() {
  const celciusButton = document.querySelector('.celcius-unit')
  const fahrenheitButton = document.querySelector('.fahrenheit-unit')
  const mphButton = document.querySelector('.mph-unit')
  const kphButton = document.querySelector('.kph-unit')
  const milesButton = document.querySelector('.miles-unit')
  const kmButton = document.querySelector('.km-unit')


  celciusButton.addEventListener('click', () => {
    if (tempUnit != celcius) {
      tempUnit = celcius
      celciusButton.classList.add('selected')
      fahrenheitButton.classList.remove('selected')
      const currentTemps = document.querySelectorAll('.current-temp')
      currentTemps.forEach((cell) => {
        let temp = cell.textContent
        let tempOnly = Number(temp.slice(0, -2))
        cell.textContent = `${roundToWholeNumber(convertFahrenheitToCelcius(tempOnly))}${tempUnit}`
      })
      const minTemps = document.querySelectorAll('.min-temp')
      minTemps.forEach((cell) => {
        let temp = cell.textContent
        let tempOnly = Number(temp.slice(0, -2))
        cell.textContent = `${roundToWholeNumber(convertFahrenheitToCelcius(tempOnly))}${tempUnit}`
      })
      const maxTemps = document.querySelectorAll('.max-temp')
      maxTemps.forEach((cell) => {
        let temp = cell.textContent
        let tempOnly = Number(temp.slice(0, -2))
        cell.textContent = `${roundToWholeNumber(convertFahrenheitToCelcius(tempOnly))}${tempUnit}`
      })
      const tempCells = document.querySelectorAll('.temp-cell')
      tempCells.forEach((cell) => {
        let temp = cell.textContent
        let tempOnly = Number(temp.slice(0, -2))
        cell.textContent = `${roundToWholeNumber(convertFahrenheitToCelcius(tempOnly))}${tempUnit}`
      })
      const feelsLikeCells = document.querySelectorAll('.feels-like-cell')
      feelsLikeCells.forEach((cell) => {
        let temp = cell.textContent
        let tempOnly = Number(temp.slice(0, -2))
        cell.textContent = `${roundToWholeNumber(convertFahrenheitToCelcius(tempOnly))}${tempUnit}`
      })
    }
  })
  fahrenheitButton.addEventListener('click', () => {
    if (tempUnit != fahrenheit) {
      tempUnit = fahrenheit
      fahrenheitButton.classList.add('selected')
      celciusButton.classList.remove('selected')
      const currentTemps = document.querySelectorAll('.current-temp')
      currentTemps.forEach((cell) => {
        let temp = cell.textContent
        let tempOnly = Number(temp.slice(0, -2))
        cell.textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(tempOnly))}${tempUnit}`
      })
      const minTemps = document.querySelectorAll('.min-temp')
      minTemps.forEach((cell) => {
        let temp = cell.textContent
        let tempOnly = Number(temp.slice(0, -2))
        cell.textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(tempOnly))}${tempUnit}`
      })
      const maxTemps = document.querySelectorAll('.max-temp')
      maxTemps.forEach((cell) => {
        let temp = cell.textContent
        let tempOnly = Number(temp.slice(0, -2))
        cell.textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(tempOnly))}${tempUnit}`
      })
      const tempCells = document.querySelectorAll('.temp-cell')
      tempCells.forEach((cell) => {
        let temp = cell.textContent
        let tempOnly = Number(temp.slice(0, -2))
        cell.textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(tempOnly))}${tempUnit}`
      })
      const feelsLikeCells = document.querySelectorAll('.feels-like-cell')
      feelsLikeCells.forEach((cell) => {
        let temp = cell.textContent
        let tempOnly = Number(temp.slice(0, -2))
        cell.textContent = `${roundToWholeNumber(convertCelciusToFahrenheit(tempOnly))}${tempUnit}`
      })
    }
  })

  mphButton.addEventListener('click', () => {
    if (speedUnit != mph) {
      speedUnit = mph
      mphButton.classList.add('selected')
      kphButton.classList.remove('selected')
      const windSpeedTab = document.querySelectorAll('.wind-speed-tab')

      windSpeedTab.forEach((cell) => {
        let speed = cell.textContent
        speed = speed.slice(5)
        console.log(speed)
        let speedOnly = Number(speed.slice(0, -3))
        cell.textContent = `Wind ${roundToWholeNumber(convertKphToMph(speedOnly))}${speedUnit}`
      })

      const windCells = document.querySelectorAll('.wind-speed')
      windCells.forEach((cell) => {
        let speed = cell.textContent
        let speedOnly = Number(speed.slice(0, -3))
        cell.textContent = `${roundToWholeNumber(convertKphToMph(speedOnly))}${speedUnit}`
      })

      const gustCells = document.querySelectorAll('.gust-cell')
      gustCells.forEach((cell) => {
        let speed = cell.textContent
        let speedOnly = Number(speed.slice(0, -3))
        cell.textContent = `${roundToWholeNumber(convertKphToMph(speedOnly))}${speedUnit}`
      })      
    }
  })


  kphButton.addEventListener('click', () => {
    if (speedUnit != kph) {
      speedUnit = kph
      kphButton.classList.add('selected')
      mphButton.classList.remove('selected')
      const windSpeedTab = document.querySelectorAll('.wind-speed-tab')

      windSpeedTab.forEach((cell) => {
        let speed = cell.textContent
        speed = speed.slice(5)
        console.log(speed)
        let speedOnly = Number(speed.slice(0, -3))
        cell.textContent = `Wind ${roundToWholeNumber(convertMphToKph(speedOnly))}${speedUnit}`
      })

      const windCells = document.querySelectorAll('.wind-speed')
      windCells.forEach((cell) => {
        let speed = cell.textContent
        let speedOnly = Number(speed.slice(0, -3))
        cell.textContent = `${roundToWholeNumber(convertMphToKph(speedOnly))}${speedUnit}`
      })

      const gustCells = document.querySelectorAll('.gust-cell')
      gustCells.forEach((cell) => {
        let speed = cell.textContent
        let speedOnly = Number(speed.slice(0, -3))
        cell.textContent = `${roundToWholeNumber(convertMphToKph(speedOnly))}${speedUnit}`
      })      
    }
  })

  milesButton.addEventListener('click', () => {
    if (distanceUnit != miles) {
      distanceUnit = miles
      milesButton.classList.add('selected')
      kmButton.classList.remove('selected')
      const visbCells = document.querySelectorAll('.visib-cell')
      visbCells.forEach((cell) => {
        let visibility = cell.textContent
        let visibilityOnly = Number(visibility.slice(0, -2))
        cell.textContent = `${roundToOneDecimal(convertToMiles(visibilityOnly))}${distanceUnit}`
      })
    }
  })
  kmButton.addEventListener('click', () => {
    if (distanceUnit != km) {
      distanceUnit = km
      kmButton.classList.add('selected')
      milesButton.classList.remove('selected')
      const visbCells = document.querySelectorAll('.visib-cell')
      visbCells.forEach((cell) => {
        let visibility = cell.textContent
        let visibilityOnly = Number(visibility.slice(0, -2))
        cell.textContent = `${roundToOneDecimal(convertToKilometres(visibilityOnly))}${distanceUnit}`
      })
    }
  })

}