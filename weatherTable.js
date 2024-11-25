export function createTable() {
    const dayHeaderCells = 7
    const dataCells = 168
    // Day Row
    const dayRow = document.querySelector('.day-row')
    for (let cell = 0; cell < dayHeaderCells; cell++) {
        const day = document.createElement('th')
        day.classList.add('day-header')
        day.setAttribute('colspan', '24')
        dayRow.appendChild(day)

        // dataInTable
        // day.textContent = formatDate(data[i].datetime)
    }

    // Time row
    const timeRow = document.querySelector('.time-row')
    for (let cell = 0; cell < dataCells; cell++) {
        const time = document.createElement('th')
        time.classList.add('time-header')
        if (cell == 23 || cell == 47 || cell == 71 || cell == 95 || cell == 119 || cell == 143) {
            time.classList.add('last-column-of-day')
        }
        timeRow.appendChild(time)

        // dataInTable
        // time.textContent = timeTrimmed(data[i].hours[j].datetime)
    
    }

    // Weather row
    const weatherRow = document.querySelector('.weather-row')
    for (let cell = 0; cell < dataCells; cell++) {
        const weather = document.createElement('td')
        weather.classList.add('weather-cell')
        if (cell == 23 || cell == 47 || cell == 71 || cell == 95 || cell == 119 || cell == 143) {
            weather.classList.add('last-column-of-day')
        }
        weatherRow.appendChild(weather)
            const weatherIcon = document.createElement('img')
            weatherIcon.classList.add('weather-icon-table')
            weather.appendChild(weatherIcon)

                // for dataInTable function
                // if (data[i].hours[j].icon == 'clear-night' || data[i].hours[j].icon == 'clear-day') {
                //     weatherIcon.classList.add('shrink')
                // }
                // weatherIcon.setAttribute('src', `./images/${data[i].hours[j].icon}.svg`)
                            
        
    }

    // Temp row
    const tempRow = document.querySelector('.temp-row')
    for (let cell = 0; cell < dataCells; cell++) {
        const temp = document.createElement('td')
        temp.classList.add('temp-cell')
        if (cell == 23 || cell == 47 || cell == 71 || cell == 95 || cell == 119 || cell == 143) {
            temp.classList.add('last-column-of-day')
        }
        tempRow.appendChild(temp)

        // dataInTable
        // temp.textContent = `${data[i].hours[j].temp}${tempUnit}`
            
    }

    // Feelslike row
    const feelsLikeRow = document.querySelector('.feels-like-row')
    for (let cell = 0; cell < dataCells; cell++) {
        const feelslike = document.createElement('td')
        feelslike.classList.add('feels-like-cell')
        if (cell == 23 || cell == 47 || cell == 71 || cell == 95 || cell == 119 || cell == 143) {
            feelslike.classList.add('last-column-of-day')
        }
        feelsLikeRow.appendChild(feelslike)

        // dataInTable
        // feelslike.textContent = `${data[i].hours[j].feelslike}${tempUnit}`
        
    }

    // Precip row
    const precipRow = document.querySelector('.precip-row')
    for (let cell = 0; cell < dataCells; cell++) {
        const precip = document.createElement('td')
        precip.classList.add('precip-cell')
        if (cell == 23 || cell == 47 || cell == 71 || cell == 95 || cell == 119 || cell == 143) {
            precip.classList.add('last-column-of-day')
        }
        precipRow.appendChild(precip)

            // dataInTable Function
            // precip.textContent = `${data[i].hours[j].precipprob}%`
                
        
    }
    
    // Wind row
    const windRow = document.querySelector('.wind-row')
    for (let cell = 0; cell < dataCells; cell++) {
        const wind = document.createElement('td')
        wind.classList.add('wind-cell')
        if (cell == 23 || cell == 47 || cell == 71 || cell == 95 || cell == 119 || cell == 143) {
            wind.classList.add('last-column-of-day')
        }
        windRow.appendChild(wind)
        const windDiretion = document.createElement('div')
        windDiretion.classList.add('wind-direction')
        wind.appendChild(windDiretion)
            const windDiretionIcon = document.createElement('i')
            windDiretionIcon.classList.add('fa-solid')
            windDiretionIcon.classList.add('fa-location-arrow')
            windDiretion.appendChild(windDiretionIcon)
        const windSpeed = document.createElement('div')
        windSpeed.classList.add('wind-speed')
        wind.appendChild(windSpeed)

        // dataInTable
            // windDiretion.textContent = `${data[i].hours[j].winddir}`
            // windSpeed.textContent = `${data[i].hours[j].windspeed}${speedUnit}`
            
    }
    
    // Gust row
    const gustRow = document.querySelector('.gust-row')
    for (let cell = 0; cell < dataCells; cell++) {
        const gust = document.createElement('td')
        gust.classList.add('gust-cell')
        if (cell == 23 || cell == 47 || cell == 71 || cell == 95 || cell == 119 || cell == 143) {
            gust.classList.add('last-column-of-day')
        }
        gustRow.appendChild(gust)
        // dataInTab;e
        // gust.textContent = `${data[i].hours[j].windgust}${speedUnit}`
        
    
    }

    // Visibility row
    const visibRow = document.querySelector('.visib-row')
    for (let cell = 0; cell < dataCells; cell++) {
        const visib = document.createElement('td')
        visib.classList.add('visib-cell')
        if (cell == 23 || cell == 47 || cell == 71 || cell == 95 || cell == 119 || cell == 143) {
            visib.classList.add('last-column-of-day')
        }
        visibRow.appendChild(visib)
        // dataInTable
        // visib.textContent = `${data[i].hours[j].visibility}`
    
    }   
    
    // Humidity row
    const humRow = document.querySelector('.hum-row')
    for (let cell = 0; cell < dataCells; cell++) {
        const humidity = document.createElement('td')
        humidity.classList.add('hum-cell')
        if (cell == 23 || cell == 47 || cell == 71 || cell == 95 || cell == 119 || cell == 143) {
            humidity.classList.add('last-column-of-day')
        }
        humRow.appendChild(humidity)
        // dataInTable
        // humidity.textContent = `${data[i].hours[j].humidity}`
        
    
    }

    // UV row
    const uvRow = document.querySelector('.uv-row')
    for (let cell = 0; cell < dataCells; cell++) {
        const uv = document.createElement('td')
        uv.classList.add('uv-cell')
        if (cell == 23 || cell == 47 || cell == 71 || cell == 95 || cell == 119 || cell == 143) {
            uv.classList.add('last-column-of-day')
        }
        uvRow.appendChild(uv)
            const uvDiv = document.createElement('div')
            uvDiv.classList.add('uv-box')
            uv.appendChild(uvDiv)
            // dataInTable
            // uv.textContent = `${data[i].hours[j].uvindex}`
        
    }    

}

