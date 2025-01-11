/**
 * Renders a character into a HTML String.
 * 
 * For compatable chars see: [docs](https://github.com/WaspVentMan/Peaks-87/tree/main?tab=readme-ov-file#compatable-characters)
 * @param {string} char 
 * @returns {string} HTML UFO 50 Text, apply to an element's `.innerHTML`
 */
function renderChar(char){
    return `<div style="width: 8px; height: 16px; background-image: url(img/letter/${char[0].toLowerCase()}.png);"></div>`
}

/**
 * Renders a string into a HTML String.
 * 
 * For compatable chars see: [docs](https://github.com/WaspVentMan/Peaks-87/tree/main?tab=readme-ov-file#compatable-characters)
 * @param {string} string 
 * @returns {string} HTML UFO 50 Text, apply to an element's `.innerHTML`
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
 * Renders a list of strings as a HTML String.
 * 
 * For compatable chars see: [docs](https://github.com/WaspVentMan/Peaks-87/tree/main?tab=readme-ov-file#compatable-characters)
 * @param {[string, string]} strings 
 * @returns {string} HTML String, apply to an element's `.innerHTML`
 */
function renderStrings(strings){
    let newString = ``

    for (let x = 0; x < strings.length; x++){
        newString += renderString(strings[x])
    }

    return newString
}

/**
 * Spits out `count` of commas.
 * @param {int} count
 * @returns {string} `count` number of commas
 */
function renderDots(count){
    let dots = ""
    for (let z = 0; z < count; z++){
        dots += ","
    }
    return dots
}

/**
 * Renders a time integer as a HTML String.
 * @param {int} time Time integer in ms
 * @returns {string} HTML String, apply to an element's `.innerHTML`
 */
function renderTime(time) {
    var ms = String(time % 1000)
    time = (time - ms) / 1000
    var secs = String(time % 60)
    time = (time - secs) / 60
    var mins = String(time % 60)
    var hrs = String((time - mins) / 60)

    while (ms.length < 3){
        ms = "0" + ms
    }

    while (secs.length < 2){
        secs = "0" + secs
    }

    while (mins.length < 2){
        mins = "0" + mins
    }
  
    return renderString(hrs + '£' + mins + '£' + secs + ',' + ms)
}

/**
 * Renders the game's stats: time, height and holds
 * @returns Nothing
 */
function renderUI(){
    document.querySelector(".time").innerHTML = renderTime(Date.now() - start)
    document.querySelector(".height").innerHTML = renderString(Math.round(player.best/16) + "m")
    document.querySelector(".holds").innerHTML = renderString(player.holds + "_holds")
}