export function convertCelciusToFahrenheit(temp) {
    let fahrenheitTemp = (temp * 9 / 5) + 32
    return fahrenheitTemp
}
  
export function convertFahrenheitToCelcius(temp) {
    let celciusTemp = (temp - 32) * 5 / 9
    return celciusTemp
}

export function convertKphToMph(speed) {
    let speedMph = speed / 1.60934
    return speedMph
}

export function convertMphToKph(speed) {
    let speedKph = speed * 1.60934
    return speedKph
}

export function convertToMiles(speed) {
    let speedMph = speed / 1.60934
    return speedMph
}

export function convertToKilometres(speed) {
    let speedKph = speed * 1.60934
    return speedKph
}