export function celsiusTempColour(tempCell, temp) {

    let redIncrement = 0;
    let greenIncrement = 0;
    let blueIncrement = 0;
    
    // temp -20 to -11
    if (temp < -10 ) {
        let red = 124
        let green = 58
        let blue = 237

        if (temp < -20) {
            tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
        }

        for (let i = -20; i < -10; i++) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            if (temp ==  i) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }

            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }
            
            redIncrement = -7
            greenIncrement = 7
            blueIncrement = 1
    
        }
    }

    // temp -10 to -1
    if (temp > -11 && temp < 0 ) {

        let red = 59
        let green = 130
        let blue = 249
        for (let i = -10; i < 0; i++) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement

            if (temp ==  i) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }
            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }

            redIncrement = 18
            greenIncrement = 12
            blueIncrement = 1
    
        }
    }

    if (temp > -1 && temp < 0) {
        
    }

    // temp 0 to 9
    if (temp > -1 && temp < 10 ) {

        let red = 239
        let green = 246
        let blue = 255
        for (let i = 0; i < 10; i++) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            if (temp ==  i) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }

            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                // console.log(nDecimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }
            
            redIncrement = -22
            greenIncrement = -6
            blueIncrement = -13
    
        }
    }



    // temp 10 to 19
    if (temp > 9 && temp < 20 ) {

        let red = 16
        let green = 185
        let blue = 129
        for (let i = 10; i < 20; i++) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            if (temp ==  i) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }

            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                // console.log(nDecimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }

            redIncrement = 24
            greenIncrement = 3
            blueIncrement = -5
    
        }
    }


    // temp 20 to 29
    if (temp > 19 && temp < 30 ) {

        let red = 252
        let green = 211
        let blue = 77
        for (let i = 20; i < 30; i++) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            if (temp ==  i) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }

            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                // console.log(nDecimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }

            redIncrement = -1
            greenIncrement = -10
            blueIncrement = -1
    
        }
    }

    // temp 30 to 35
    if (temp > 29 && temp < 36 ) {

        let red = 243
        let green = 115
        let blue = 71
        for (let i = 30; i < 36; i++) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            if (temp ==  i) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }

            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }



            redIncrement = -1
            greenIncrement = -9
            blueIncrement = -1
    
        }
    }

    // temp 36 to 40
    if (temp > 35) {

        if (temp >  40) {
            tempCell.setAttribute('style', 'background-color: rgb(236, 72, 153)')
        }

        let red = 238
        let green = 68
        let blue = 85
        for (let i = 36; i < 41; i++) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            if (temp ==  i) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }

            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                // console.log(nDecimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }

            redIncrement = -1
            greenIncrement = 1
            blueIncrement = 17
    
        }
    }

}

export function fahrenheitTempColour(tempCell, temp) {

    
    let redIncrement = 0;
    let greenIncrement = 0;
    let blueIncrement = 0;
    
    // temp -20 to -11


    // temp -4 to 12.2
    if (temp < -4 ) {
        let red = 124
        let green = 58
        let blue = 237

        if (temp < -4) {
            tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
        }

        for (let i = -4; i < 14; i = i + 1.8) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            if (temp ==  i) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }

            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }
            
            redIncrement = -7
            greenIncrement = 7
            blueIncrement = 1
    
        }
    }

    // temp -10 to -1

    // temp 14 to 30.2
    if (temp > -12.2 && temp < 32 ) {

        let red = 59
        let green = 130
        let blue = 249
        for (let i = 14; i < 32; i = i + 1.8) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            console.log(i)
            console.log(i.toFixed(1))

            if (temp ==  i.toFixed(1)) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }
            // checks for decimal points
            // for (let j = 1; j < 10; j++) {
            //     let decimal = `${i}.${j}`
            //     let nDecimal = Number(decimal)
            //     if (temp ==  nDecimal) {
            //         tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            //     }
            // }

            redIncrement = 18
            greenIncrement = 12
            blueIncrement = 1
    
        }
    }

    // temp 0 to 9

    // temp 32 to 48.2
    if (temp > -30.2 && temp < 50 ) {

        let red = 239
        let green = 246
        let blue = 255
        for (let i = 32; i < 50; i = i + 1.8) {

            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            if (temp ==  i.toFixed(1)) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }

            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                // console.log(nDecimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }
            
            redIncrement = -22
            greenIncrement = -6
            blueIncrement = -13

        }
    }



    // temp 10 to 19

    // temp 50 to 66.2
    if (temp > 48.2 && temp < 68 ) {

        let red = 16
        let green = 185
        let blue = 129
        for (let i = 50; i < 68; i = i + 1.8) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            if (temp ==  i) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }

            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                // console.log(nDecimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }

            redIncrement = 24
            greenIncrement = 3
            blueIncrement = -5
    
        }
    }


    // temp 20 to 29

    // temp 68 to 84.2
    if (temp > 66.2 && temp < 86) {

        let red = 252
        let green = 211
        let blue = 77
        for (let i = 68; i < 86; i = i + 1.8) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            if (temp ==  i) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }

            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }

            redIncrement = -1
            greenIncrement = -10
            blueIncrement = -1
    
        }
    }

    // temp 30 to 35

    // temp 86 to 95
    if (temp > 84.2 && temp < 96.8 ) {

        let red = 243
        let green = 115
        let blue = 71
        for (let i = 86; i < 96.8; i++) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            if (temp ==  i) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }

            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }



            redIncrement = -1
            greenIncrement = -9
            blueIncrement = -1
    
        }
    }

    // temp 36 to 40

    // temp 96.8 to 104
    if (temp > 95) {

        if (temp >  104) {
            tempCell.setAttribute('style', 'background-color: rgb(236, 72, 153)')
        }

        let red = 238
        let green = 68
        let blue = 85
        for (let i = 96.8; i < 122; i = i + 1.8) {
            red = red + redIncrement
            green = green + greenIncrement
            blue = blue + blueIncrement
            if (temp ==  i) {
                tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
            }

            // checks for decimal points
            for (let j = 1; j < 10; j++) {
                let decimal = `${i}.${j}`
                let nDecimal = Number(decimal)
                // console.log(nDecimal)
                if (temp ==  nDecimal) {
                    tempCell.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
                }
            }

            redIncrement = -1
            greenIncrement = 1
            blueIncrement = 17
    
        }
    }

}