export function dayTabsEventListner() {
    const dayTabs = document.querySelectorAll('.day-tab')
    dayTabs.forEach((dayTab) => {
        dayTab.addEventListener('click', () => {
            for (let i = 0; i < 7; i++) {


                if (dayTabs[i].classList == 'day-tab active-tab') {
                    dayTabs[i].classList.toggle('active-tab')
                    dayTabs[i].classList.toggle('inactive-tab')
                }
            }
            
            
            // First toggle to active-tab
            dayTab.classList.toggle('active-tab')
            dayTab.classList.toggle('inactive-tab')
            // Second toggle all other elements to inactive
        })
    })
}




export let ukUnit = 'uk'
export let usUnit = 'us'
export let metricUnit = 'metric'
export let units = ukUnit

// Units
export let celcius = '°C'
export let fahrenheit = '°F'
export let mph = 'mph'
export let kph = 'kph'
export let miles = 'mi'
export let km = 'km'

export let tempUnit = celcius
export let speedUnit = mph
export let distanceUnit = miles

export function unitSwitchEventListner() {

    const usButton = document.querySelector('.us-units')
    const metricButton = document.querySelector('.metric-units')
    const ukButton = document.querySelector('.uk-units')

    usButton.addEventListener('click', () => {
        units = usUnit
        tempUnit = fahrenheit
        speedUnit = mph
        distanceUnit = miles
        usButton.classList.add('selected')
        if (ukButton.classList == 'uk-units selected') {
            ukButton.classList.remove('selected')
        }
        if (metricButton.classList == 'metric-units selected') {
            metricButton.classList.remove('selected')
        }
        console.log(tempUnit, speedUnit, distanceUnit)
        let newAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${units}&key=L4MLNKS6TK5UBXFAPRX9SSYB8&contentType=json`
        getWeatherData(newAPI)
    })

    metricButton.addEventListener('click', () => {
        units = metricUnit
        tempUnit = celcius
        speedUnit = kph
        distanceUnit = km
        metricButton.classList.add('selected')
        if (ukButton.classList == 'uk-units selected') {
            ukButton.classList.remove('selected')
        }
        if (usButton.classList == 'us-units selected') {
            usButton.classList.remove('selected')
        }
        console.log(tempUnit, speedUnit, distanceUnit)
        let newAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${units}&key=L4MLNKS6TK5UBXFAPRX9SSYB8&contentType=json`
        getWeatherData(newAPI)

    })
    
    ukButton.addEventListener('click', () => {
        units = ukUnit
        tempUnit = celcius
        speedUnit = mph
        distanceUnit = miles
        ukButton.classList.add('selected')
        if (usButton.classList == 'us-units selected') {
            usButton.classList.remove('selected')
        }
        if (metricButton.classList == 'metric-units selected') {
            metricButton.classList.remove('selected')
        }
        console.log(tempUnit, speedUnit, distanceUnit)
        let newAPI = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${units}&key=L4MLNKS6TK5UBXFAPRX9SSYB8&contentType=json`
        getWeatherData(newAPI)
    })

}