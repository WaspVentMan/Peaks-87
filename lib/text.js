/**
 * Renders a character into a html compatable UFO50 character.
 * 
 * All chars are automatically converted to lower case.
 * 
 * Char subs: `_ to space` `+ to '` `, to .` `^ to <` `% to >`
 * 
 * Compatable chars: `a-z, 0-9, -, plus those displayed above`
 * @param {string} char 
 * @returns 
 */
function renderChar(char){
    return `<div style="width: 8px; height: 16px; background-image: url(img/letter/${char.toLowerCase()}.png);"></div>`
}

/**
 * Renders a string into a html compatible UFO50 string.
 * 
 * All chars are automatically converted to lower case.
 * 
 * Char subs: `_ to space` `+ to '` `, to .` `^ to <` `% to >`
 * 
 * Compatable chars: `a-z, 0-9, -, plus those displayed above`
 * @param {string} string 
 */
function renderString(string){
    let newString = `<div style="width: max-content; margin: auto; height: 16px; display: flex; text-align: center">`

    for (let x = 0; x < string.length; x++){
        newString += renderChar(string[x])
    }

    newString += `</div>`

    return newString
}

/**
 * Renders a list of strings as a html compatible UFO 50 string.
 * 
 * All chars are automatically converted to lower case.
 * 
 * Char subs: `_ to space` `+ to '` `, to .` `^ to <` `% to >`
 * 
 * Compatable chars: `a-z, 0-9, -, plus those displayed above`
 * @param {[string, string]} strings 
 * @returns 
 */
function renderStrings(strings){
    let newString = ``

    for (let x = 0; x < strings.length; x++){
        newString += renderString(strings[x])
    }

    return newString
}

/**
 * Spits out `count` of full stops.
 * @param {int} count
 */
function renderDots(count){
    let dots = ""
    for (let z = 0; z < count; z++){
        dots += ","
    }
    return dots
}