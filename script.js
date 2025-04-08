let player = {
    "pos": [[-64, 576][Math.round(Math.random())], 0],
    "vel": [0, 0],
    "rot": 0,
    "gripper": 0,
    "anchor": null,
    "best": 0,
    "dead": true,
    "holds": 0,
    "lb": "z",
    "crampon": 1,
    "axes": false
}

let scores = [
    ["SLM", 7464],
    ["BUL", 2288],
    ["MHO", 2017],
    ["ELD", 1476],
    ["VIS", 1370],
    ["YMR", 543],
    ["WLK", 536],
    ["DND", 495],
    ["MHR", 396],
    ["EIN", 394]
]

let settings = {
    "menu": {
        "selection": 0,
        "lockin": false,
        "options": [
            {
                "name": "save and return to menu",
                "value": undefined,
                "var": "menu"
            },
            {
                "name": "newgrounds",
                "value": "log in",
                "var": "ng",
                "title": true
            },
            {
                "name": "screen zoom",
                "value": "$x zoom",
                "var": "zoom"
            },
            {
                "name": "grayscale",
                "value": "$",
                "var": "grayscale",
                "handler": "bool"
            },
            {
                "name": "punishment level",
                "value": "PUNISHMENT LV.$",
                "var": "punishment"
            },
            {
                "name": "debug menu options",
                "value": "titles: $",
                "var": "debugtitles",
                "handler": "bool",
                "title": true
            },
            {
                "name": "generation debug",
                "value": "generation: $",
                "var": "debuggen",
                "handler": "bool",
                "small": true
            },
            {
                "name": "ice debug",
                "value": "ice: $",
                "var": "debugice",
                "handler": "bool",
                "small": true
            },
            {
                "name": "game debug",
                "value": "game: $",
                "var": "debugpef",
                "handler": "bool",
                "small": true
            }
        ]
    },
    "zoom": 1,
    "grayscale": false,
    "punishment": 0.1,
    "debugtitles": true,
    "debuggen": false,
    "debugpef": false,
    "debugice": false
}

let title = {
    "selection": 0,
    "options": [
        "start",
        "scores",
        "settings",
        "credits"
    ]
}

let deathMenu = {
    "selection": 0,
    "options": [
        "quick restart",
        "back to title",
        "toggle scores"
    ]
}

let subtitles = {
    "intro": [
        {
            "m": "Good morning lad.",
            "a": "Good afternoon lad.",
            "e": "Good evening lad."
        },
        "I'm a lawyer here on the behalf of the official ascencion society.",
        "If you want to climb forevisir you'll need to sign this here waiver.",
        "It's a bloody dangerous climb, and we don't want to be sued by your next of kin."
    ],
    "waiver_signed": [
        "Thank you, lad.",
        "The mountain is calling.",
        "Have a good climb."
    ]
}

let saveData = localStorage.getItem("PEAKS87")
if (saveData != null){
    scores = JSON.parse(saveData)
    
    for (let x = 0; x < scores.length; x++){
        if (scores[x][0] == "MHó"){
            scores[x][0] = "MHO"
        }

        if (scores[x][0] == "VíS"){
            scores[x][0] = "VIS"
        }
    }
}

for (let x = 0; x < scores.length; x++){
    if (scores[x][0] == "YOU"){
        player.best = scores[x][1]*16
        break
    }
}

let saveSett = localStorage.getItem("PEAKS87SETTINGS")
if (saveSett != null){
    saveSett = JSON.parse(saveSett)

    for (let x = 0; x < Object.keys(saveSett).length; x++){
        if(Object.keys(saveSett)[x]=="menu"){continue}
        settings[Object.keys(saveSett)[x]] = saveSett[Object.keys(saveSett)[x]]
    }
}

let wind = new Audio(sounddict.wind)
wind.loop = true
wind.volume = 0

let best = false
let leaderboard = "z"
let holds = []
let punishment = 0.1
let deathtimeout = []
let deathcam = 0
let tick = Date.now()
let start = 0
let lastcramp = 0
let lastaxe = 0
let holdbiome = "normal"

function gametime(){
    let time = new Date()
    time = time.toString().split(" ", 5)[4].split(":", 3)

    let hour = time[0]
    let min = time[1]

    let colour = [[0,0,0,1], [0,0,0,1]]

    // 08:00PM - 06:00AM | Night
    // 06:00AM - 08:00AM | Sunrise
    // 08:00AM - 06:00PM | Day
    // 06:00PM - 08:00PM | Sunset

    let mode = "FN"
    let shift = min/60

    if (hour < 6){
        mode = "N"
    } else if (hour < 7){
        mode = "FN"
    //} else if (hour < 7){
    //    mode = "S"
    } else if (hour < 8){
        mode = "TD"
    } else if (hour < 18){
        mode = "D"
    } else if (hour < 19){
        mode = "FD"
    //} else if (hour < 20){
    //    mode = "S"
    } else if (hour < 20){
        mode = "TN"
    } else {
        mode = "N"
    }

    if (mode == "FD"){
        colour[0][0] = 100+(35*shift)
        colour[0][1] = 206
        colour[0][2] = 235

        colour[1][0] = 135+(91*shift)
        colour[1][1] = 206-(30*shift)
        colour[1][2] = 235-(166*shift)
    }

    if (mode == "TD"){
        colour[0][0] = 135-(35*shift)
        colour[0][1] = 206
        colour[0][2] = 235

        colour[1][0] = 226-(91*shift)
        colour[1][1] = 176+(30*shift)
        colour[1][2] = 69 +(166*shift)
    }

    if (mode == "TN"){
        colour[0][0] = 135-(135*shift)
        colour[0][1] = 206-(206*shift)
        colour[0][2] = 235-(210*shift)

        colour[1][0] = 226-(226*shift)
        colour[1][1] = 176-(176*shift)
        colour[1][2] = 69 -(19*shift)

        document.querySelector(".stars").style.opacity = (100*shift) + "%"
    }

    if (mode == "FN"){
        colour[0][0] = 0  +(135*shift)
        colour[0][1] = 0  +(206*shift)
        colour[0][2] = 25 +(210*shift)

        colour[1][0] = 0  +(226*shift)
        colour[1][1] = 0  +(176*shift)
        colour[1][2] = 50 +(19*shift)

        document.querySelector(".stars").style.opacity = (100-(100*shift)) + "%"
    }

    if (mode == "D"){
        colour[0][0] = 100
        colour[0][1] = 206
        colour[0][2] = 235

        colour[1][0] = 135
        colour[1][1] = 206
        colour[1][2] = 235
    }

    if (mode == "S"){
        colour[0][0] = 135
        colour[0][1] = 206
        colour[0][2] = 235

        colour[1][0] = 226
        colour[1][1] = 176
        colour[1][2] = 69
    }

    if (mode == "N"){
        colour[0][0] = 0
        colour[0][1] = 0
        colour[0][2] = 25

        colour[1][0] = 0
        colour[1][1] = 0
        colour[1][2] = 50

        document.querySelector(".stars").style.opacity = "100%"
    }

    document.querySelector(".gameWindow").style.background = `linear-gradient(180deg, rgba(${colour[0][0]},${colour[0][1]},${colour[0][2]},${colour[0][3]}) 0%, rgba(${colour[1][0]},${colour[1][1]},${colour[1][2]},${colour[1][3]}) 100%)`
}

function scroll(){
    if (player.best > 256){
        if (player.dead){
            player.best -= deathcam/10

            let deathcambreak = 0
            for (let x = 0; x < deathcam; x++){deathcambreak += x+4}
            if (player.best - (deathcambreak/10) < 256){
                deathcam--
            } else {
                deathcam++
            }

            if (player.best/16000 > 1){
                wind.volume = 1
            } else {
                wind.volume = player.best/16000
            }

            document.querySelector(".player").style.left = "-10000px"
        }
        
        document.querySelector(".game").style.top = Math.round(player.best - 256) + "px"
        document.querySelector(".towerRender").style.top = (Math.round((player.best - 256)%1024)-1024) + "px"
        for (let x = 0; x < 14; x++){
            document.querySelector(".paralax"+x).style.bottom = Math.round(-32-((player.best-256)/((x+2)**2))) + "px"
        }
    } else {
        document.querySelector(".game").style.top = "0px"
        document.querySelector(".towerRender").style.top = "0px"
        for (let x = 0; x < 14; x++){
            document.querySelector(".paralax"+x).style.bottom = "-32px"
        }
    }
}

function generateHolds(force=false){
    let generated = 0
    while (holds.length == 0 || holds[holds.length-1][1] < player.best + 512 || force && generated == 0){
        generated++

        let holdx = 0
        let holdy = 0
        let ice = false

        let genDebug = []

        if (settings.debugtitles && settings.debuggen){
            genDebug.push("")
            genDebug.push("- hold info -")
        }

        if (holds.length == 0){
            holdx = 256
            holdy = 96
            holdbiome = "normal"
        } else {
            holdx = holds[holds.length-1][0] + Math.round(Math.random()*((holds[holds.length-1][1]/(2560/settings.punishment))+4)-(((holds[holds.length-1][1]/(2560/settings.punishment))+4)/2))*16
            holdy = holds[holds.length-1][1] + (Math.ceil(Math.random()*((holds[holds.length-1][1]/(2560/settings.punishment))+4))*16)
            if (Math.random() < settings.punishment/10){
                holdbiome = ["normal", "crack", "clutter", "classic", "inset"][Math.floor(Math.random()*4)]
            }
        }

        if (holdbiome == "crack" && holds.length >= 2){
            holdx = holds[holds.length-1][0]
            holdy = holds[holds.length-1][1] + 16

            if (Math.random() < 0.1){
                holdx += Math.round(Math.random()*((holds[holds.length-1][1]/(2560/settings.punishment))+4)-(((holds[holds.length-1][1]/(2560/settings.punishment))+4)/2))*16
                holdy += Math.ceil(Math.random()*((holds[holds.length-1][1]/(2560/settings.punishment))+4))*16
            } else if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage == `url("img/holds/edgecrimp.png")`){
                holdx += 16
            } else if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage == `url("img/holds/edgecrimp2.png")`){
                holdx += [-16, 0][Math.floor(Math.random()*2)]
            } else if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage == `url("img/holds/edgecrimp3.png")`){
                holdx -= 16
            } else if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage == `url("img/holds/edgecrimp4.png")`){
                holdx += [16, 0][Math.floor(Math.random()*2)]
            } else {
                holdx += [-16, 0, 16][Math.floor(Math.random()*3)]
            }
        }

        if (holdx < 128){
            holdx = 128
            holdx += Math.round(Math.random()*4)*16
        }
        
        if (holdx > 384){
            holdx = 384
            holdx -= Math.round(Math.random()*4)*16
        }

        if (settings.debuggen){
            genDebug.push("biome: " + holdbiome)
            genDebug.push("x: " + holdx)
            genDebug.push("y: " + holdy)
        }

        if (Math.random() < ((holdy)/(16000/settings.punishment)) && holdy > 16000){
            ice = true
        }

        if (settings.debugtitles && settings.debugice){
            genDebug.push("")
            genDebug.push("- ice info -")
        }

        if (settings.debugice){
            genDebug.push("ice: " + ice)
            genDebug.push("spawnable: " + (holdy>16000))
            genDebug.push("chance: " + Math.round(((holdy)/(16000/settings.punishment))*10000)/100 + "%")
        }

        let newHold = document.createElement("div")
        newHold.className = "hold" + holdy
        newHold.style.top = 512 - holdy + "px"
        newHold.style.left = holdx + "px"
        newHold.style.position = "absolute"
        newHold.style.width = "16px"
        newHold.style.height = "16px"

        if (holdbiome == "normal"){
            newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + ["bigpocket", "dangeregg", "fingercrimp", "hold"][Math.floor(Math.random()*4)] + ".png)"
        } else if (holdbiome == "crack"){
            if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage == `url("img/holds/edgecrimp.png")`){
                newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + "edgecrimp4.png)"
            } else if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage == `url("img/holds/edgecrimp2.png")`){
                if (holdx - holds[holds.length-1][0] == 0){
                    newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + ["edgecrimp", "edgecrimp4"][Math.floor(Math.random()*2)] + ".png)"
                } else if (holdx - holds[holds.length-1][0] == -16){
                    newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + "edgecrimp3.png)"
                }
            } else if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage == `url("img/holds/edgecrimp3.png")`){
                newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + "edgecrimp2.png)"
            } else if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage == `url("img/holds/edgecrimp4.png")`){
                if (holdx - holds[holds.length-1][0] == 0){
                    newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + ["edgecrimp2", "edgecrimp3"][Math.floor(Math.random()*2)] + ".png)"
                } else if (holdx - holds[holds.length-1][0] == 16){
                    newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + "edgecrimp.png)"
                }
            } else {
                newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + ["edgecrimp", "edgecrimp2", "edgecrimp3", "edgecrimp4"][Math.floor(Math.random()*4)] + ".png)"
            }
        } else if (holdbiome == "clutter"){
            newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + ["bigpocket", "dangeregg", "fingercrimp", "handjam", "hold", "pinch", "edgecrimp", "edgecrimp2", "edgecrimp3", "edgecrimp4"][Math.floor(Math.random()*10)] + ".png)"
        } else if (holdbiome == "classic"){
            newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + "hold.png)"
        } else if (holdbiome == "inset"){
            newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + ["bigpocket", "handjam"][Math.floor(Math.random()*2)] + ".png)"
        }
        holds.push([holdx, holdy, ice])

        document.querySelector(".debugG").innerHTML = renderStrings(genDebug, "default", "right")
        document.querySelector(".holdzone").appendChild(newHold)
    }
}

generateHolds()
buildTitle()
buildSettings()
buildDeath()

setInterval(function(){
    let d = (Date.now()-tick)/1000
    tick = Date.now()

    let pefDebug = []
    if (settings.debugpef){
        if (settings.debugtitles){
            pefDebug.push("")
            pefDebug.push("- game info -")
        }

        pefDebug.push("tick: " + d*1000+"ms")
    }

    document.querySelector(".debugP").innerHTML = renderStrings(pefDebug, "default", "right")

    if (!document.hasFocus() && !mobile){
        document.querySelector(".focus").style.display = 'block'
    }

    if (document.querySelector(".focus").style.display == 'block'){return}

    if (mobile){
        document.body.style.zoom = "100%"
        document.body.style.userSelect = "none"
    }

    if (settings.grayscale){
        document.querySelector(".gameWindow").style.filter = "grayscale(100%)"
    } else {
        document.querySelector(".gameWindow").style.filter = "grayscale(0%)"
    }

    document.querySelector(".gameWindow").style.zoom = settings.zoom*100 + "%"

    // LOGIC
    gametime()
    if (player.dead){scroll()}

    if (document.querySelector(".loadZoneDeluxe").style.display != "none"){return}
    if (document.querySelector(".credits").style.display != "none"){return}

    if (document.querySelector(".settings").style.display != "none"){
        if (key.x && !held.x){
            held.x = true

            document.querySelector(".settings").style.display = "none"
            document.querySelector(".title").style.display = "block"

            localStorage.setItem("PEAKS87SETTINGS", JSON.stringify(settings))
            return
        }

        if (key.z && !held.z){
            held.z = true
            sfx("click", 25)

            if (settings.menu.selection == 0){
                document.querySelector(".settings").style.display = "none"
                document.querySelector(".title").style.display = "block"

                localStorage.setItem("PEAKS87SETTINGS", JSON.stringify(settings))
                return
            }

            if (settings.menu.options[settings.menu.selection].var == "zoom" && window.location != window.parent.location){
                window.open(window.location.href, '_blank').focus()
                location.reload()
            }

            if (settings.menu.options[settings.menu.selection].var == "ng"){
                if (offline){
                    NGIO.openLoginPage()
                    buildSettings()
                }
                
                return
            }

            settings.menu.lockin = !settings.menu.lockin
            buildSettings()
        }

        if ((key.ArrowLeft && !held.ArrowLeft || key.ArrowRight && !held.ArrowRight) && settings.menu.lockin){
            held.ArrowLeft = key.ArrowLeft
            held.ArrowRight = key.ArrowRight

            if (settings.menu.options[settings.menu.selection].handler != undefined){
                switch (settings.menu.options[settings.menu.selection].handler){
                    case "bool":
                        sfx("click", 25)
                        settings[settings.menu.options[settings.menu.selection].var] = !settings[settings.menu.options[settings.menu.selection].var]
                        break
                }
            } else {
                switch (settings.menu.options[settings.menu.selection].var){
                    case "zoom":
                        if (held.ArrowLeft && settings.zoom > 1 && window.location == window.parent.location){
                            sfx("click", 25)
                            settings.zoom--
                        } else if (held.ArrowRight && window.location == window.parent.location){
                            sfx("click", 25)
                            settings.zoom++
                        }
                        break
                    
                    case "punishment":
                        if (held.ArrowLeft && settings.punishment != 0.1){
                            sfx("click", 25)
                            settings.punishment /= 10
                        } else if (held.ArrowRight && settings.punishment != 100){
                            sfx("click", 25)
                            settings.punishment *= 10
                        }
                        break
                }
            }

            buildSettings()
        }

        if ((key.ArrowUp && !held.ArrowUp || key.ArrowDown && !held.ArrowDown) && !settings.menu.lockin){
            held.ArrowUp = key.ArrowUp
            held.ArrowDown = key.ArrowDown

            if (held.ArrowUp && settings.menu.selection > 0){
                sfx("click", 25)
                settings.menu.selection--
            } else if (held.ArrowDown && settings.menu.selection < settings.menu.options.length-1){
                sfx("click", 25)
                settings.menu.selection++
            }

            buildSettings()
        }

        return
    }

    if (document.querySelector(".title").style.display != "none"){
        if (key.z && !held.z){
            held.z = true

            switch (title.options[title.selection]){
                case "start":
                    player = {
                        "pos": [[-64, 576][Math.round(Math.random())], 0],
                        "vel": [0, 0],
                        "rot": 0,
                        "gripper": 0,
                        "anchor": null,
                        "best": 0,
                        "dead": false,
                        "holds": 0,
                        "crampon": 1,
                        "axes": false
                    }
        
                    holds = []
                    start = Date.now()
        
                    sfxClear()
                    sfx("click", 25)
        
                    document.querySelector(".holdzone").innerHTML = ""
                    document.querySelector(".gameOver").style.display = "none"
                    document.querySelector(".title").style.display = "none"
                    break
                
                case "scores":
                    sfx("click", 25)

                    document.querySelector(".title").style.display = "none"
                    document.querySelector(".boards").style.display = "block"
                    deathMenu.selection = 0
                    buildDeath()
                    renderLB()
                    break
                
                case "settings":
                    settings.menu.selection = 0
                    sfx("click", 25)

                    document.querySelector(".title").style.display = "none"
                    document.querySelector(".settings").style.display = "block"
                    buildSettings()
                    break
                
                case "credits":
                    sfxClear()
                    document.querySelector(".title").style.display = "none"
                    playCredits("block")
                    break
            }
            return
        }

        if ((key.ArrowUp && !held.ArrowUp || key.ArrowDown && !held.ArrowDown)){
            held.ArrowUp = key.ArrowUp
            held.ArrowDown = key.ArrowDown

            if (held.ArrowUp && title.selection > 0){
                sfx("click", 25)
                title.selection--
            } else if (held.ArrowDown && title.selection < title.options.length-1){
                sfx("click", 25)
                title.selection++
            }

            buildTitle()
        }

        return
    }

    if (player.dead){
        document.querySelector(".touchButtU").style.display = "block"
        if (key.z && !held.z){
            held.z = true

            switch (deathMenu.options[deathMenu.selection]){
                case "quick restart":
                    player = {
                        "pos": [[-64, 576][Math.round(Math.random())], 0],
                        "vel": [0, 0],
                        "rot": 0,
                        "gripper": 0,
                        "anchor": null,
                        "best": 0,
                        "dead": false,
                        "holds": 0,
                        "crampon": 1,
                        "axes": false
                    }
        
                    holds = []
                    start = Date.now()
        
                    sfxClear()
                    sfx("click", 25)
        
                    document.querySelector(".holdzone").innerHTML = ""
                    document.querySelector(".gameOver").style.display = "none"
                    document.querySelector(".title").style.display = "none"
                    break
                
                case "back to title":
                    sfx("click", 25)

                    document.querySelector(".title").style.display = "block"
                    document.querySelector(".boards").style.display = "none"
                    buildTitle()
                    break
                
                case "toggle scores":
                    sfx("click", 25)

                    if (leaderboard == "x"){
                        leaderboard = "z"
                    } else {
                        leaderboard = "x"
                    }
                    renderLB()
                    break
            }
            buildDeath()
            return
        }

        if ((key.ArrowUp && !held.ArrowUp || key.ArrowDown && !held.ArrowDown)){
            held.ArrowUp = key.ArrowUp
            held.ArrowDown = key.ArrowDown

            if (held.ArrowUp && deathMenu.selection > 0){
                sfx("click", 25)
                deathMenu.selection--
            } else if (held.ArrowDown && deathMenu.selection < deathMenu.options.length-1){
                sfx("click", 25)
                deathMenu.selection++
            }

            buildDeath()
        }
    } else {
        deathcam = 0
        document.querySelector(".boards").style.display = "none"

        if (player.anchor == null){
            player.pos[0] += (player.vel[0]*60)*d
            player.pos[1] += (player.vel[1]*60)*d

            if (player.pos[1] < 64){
                document.querySelector(".touchButtU").style.display = "block"
                start = Date.now()
                player.vel[1] = 0
                player.pos[1] = 64
                player.crampon = 1

                if (player.pos[0] + player.vel[0] > 249){
                    player.vel[0] -= (0.5*60)*d
                } else if (player.pos[0] + player.vel[0] < 247){
                    player.vel[0] += (0.5*60)*d
                }
                
                if (key.ArrowUp){
                    held.ArrowUp = true
                    sfx("jump" + Math.ceil(Math.random()*4))
                    player.vel[1] = 5
                }

                player.vel[0] *= 0.8
            } else {
                document.querySelector(".touchButtU").style.display = "none"
                if (key.ArrowLeft){
                    held.ArrowLeft = true
                    player.vel[0] -= 0.1
                }
            
                if (key.ArrowRight){
                    held.ArrowRight = true
                    player.vel[0] += 0.1
                }

                if (key.x && key.z && (lastcramp+250 < Date.now() || (!held.x && !held.z)) && player.pos[0] > 96 && player.pos[0] < 400){
                    held.x = true
                    held.z = true
                    lastcramp = Date.now()
                    
                    if (player.vel[1] < 0 && player.crampon < 4){
                        player.vel[1] = 5/player.crampon
                    } else {
                        player.vel[1] += 5/player.crampon
                    }

                    if (player.crampon < 4){
                        sfx("jump" + Math.ceil(Math.random()*4))
                    } else {
                        sfx("cramponfail" + Math.ceil(Math.random()*3))
                    }

                    player.crampon++
                }
            }

            if (key.ArrowDown && (!held.ArrowDown || lastaxe+250 < Date.now())){
                held.ArrowDown = true
                lastaxe = Date.now()
                player.axes = !player.axes
            }

            player.vel[1] -= (0.2*60)*d
        
            if (key.z){
                for (let x = 0; x < holds.length; x++){
                    if (Math.round(holds[x][0]/16) == Math.round((player.pos[0]-16)/16) && Math.round(holds[x][1]/16) == Math.round(player.pos[1]/16) && holds[x][2] == player.axes){
                        player.gripper = 0
                        player.anchor = Object.assign([], player.pos)
                        player.anchor[0] -= 16
                        player.rot = 1
                        player.vel = player.vel[1]*2

                        if (!player.axes){
                            sfx("grab" + Math.ceil(Math.random()*3))
                        } else {
                            sfx("axehit" + Math.ceil(Math.random()*3))
                            sfx("axecrunch" + Math.ceil(Math.random()*3))
                        }

                        player.holds++
                        break
                    }
                }
            }

            if (key.x){
                for (let x = 0; x < holds.length; x++){
                    if (Math.round(holds[x][0]/16) == Math.round((player.pos[0]+16)/16) && Math.round(holds[x][1]/16) == Math.round(player.pos[1]/16) && holds[x][2] == player.axes){
                        player.gripper = 1
                        player.anchor = Object.assign([], player.pos)
                        player.anchor[0] += 16
                        player.rot = -180
                        player.vel = -player.vel[1]*2
                        
                        if (!player.axes){
                            sfx("grab" + Math.ceil(Math.random()*3))
                        } else {
                            sfx("axehit" + Math.ceil(Math.random()*3))
                            sfx("axecrunch" + Math.ceil(Math.random()*3))
                        }

                        player.holds++
                        break
                    }
                }
            }
        }

        if (player.anchor != null){
            player.crampon = 1
            player.pos[0] = player.anchor[0] + (24 * Math.cos(player.rot/60))
            player.pos[1] = player.anchor[1] + (24 * Math.sin(player.rot/60))

            if (key.ArrowLeft){
                held.ArrowLeft = true
                player.vel -= (0.2*60)*d
            }
        
            if (key.ArrowRight){
                held.ArrowRight = true
                player.vel += (0.2*60)*d
            }

            if (player.rot +90 < 0){
                player.vel += (0.3*60)*d
            }

            if (player.rot +90 > 0){
                player.vel -= (0.3*60)*d
            }

            if (player.rot > 90){
                player.rot -= 360
            }

            if (player.rot < -270){
                player.rot += 360
            }

            player.rot += (player.vel*60)*d

            if (player.vel > 30 && player.vel < 31){
                player.vel = 30
            }

            if (player.vel < -30 && player.vel > -31){
                player.vel = -30
            }

            if (!key[["z", "x"][player.gripper]]){
                let velcache = Object.assign({}, [player.vel])
                player.anchor = null
                player.vel = [0, 0]
                if (player.rot > -45 && player.rot < 45){
                    player.vel[1] = velcache[0]
                } else if (player.rot > -135 && player.rot < -45){
                    player.vel[0] = velcache[0]/5
                    player.vel[1] = Math.abs(velcache[0])/1.5
                } else if (player.rot > -225 && player.rot < -135){
                    player.vel[1] = -velcache[0]
                } else {
                    player.vel[0] = -velcache[0]/5
                    player.vel[1] = Math.abs(velcache[0])/1.5
                }
            }
        }

        if (player.pos[1] - 64 > player.best){
            player.best = player.pos[1] - 64
        }

        leaderboard = "z"

        if (player.pos[1] < player.best - 288){
            player.dead = true
            title.selection = 0

            let deathboard = 0

            if (settings.punishment == 0.1){deathboard = 14449}
            if (settings.punishment == 1)  {deathboard = 14452}
            if (settings.punishment == 10) {deathboard = 14451}
            if (settings.punishment == 100){deathboard = 14453}

            if (!offline){NGIO.postScore(deathboard, Math.round(player.best/16)*100, function(){})}

            sfx("fall" + Math.ceil(Math.random()*4), 50)
            deathtimeout.push(setTimeout(function(){sfx("fall" + Math.ceil(Math.random()*4), 25)}, 1000))
            deathtimeout.push(setTimeout(function(){sfx("fall" + Math.ceil(Math.random()*4), 12.5)}, 2000))
            deathtimeout.push(setTimeout(function(){sfx("fall" + Math.ceil(Math.random()*4), 6.25)}, 3000))
            deathtimeout.push(setTimeout(function(){sfx("fall" + Math.ceil(Math.random()*4), 3.125)}, 4000))
            deathtimeout.push(setTimeout(function(){sfx("fall" + Math.ceil(Math.random()*4), 1.5625)}, 5000))

            best = false
            let prepos = 0

            Math.round(player.best/16)

            for (let x = 0; x < 10; x++){
                if (scores[x][0] == "YOU"){break}
                prepos++
            }

            try {
                if (scores[prepos][0] == "YOU" && scores[prepos][1] < Math.round(player.best/16)){best = true}
            } catch {}

            for (let x = 0; x < 10; x++){
                if (scores[9-x][1] > Math.round(player.best/16)){
                    scores.splice(10-x, 0, ["YOU", Math.round(player.best/16)])
                    scores.splice(10, 999)
                    break
                } else if (scores[9-x][1] < Math.round(player.best/16) && x == 9){
                    scores.splice(0, 0, ["YOU", Math.round(player.best/16)])
                    scores.splice(10, 999)
                }
            }

            localStorage.setItem("PEAKS87", JSON.stringify(scores))

            let postpos = 0

            for (let x = 0; x < 10; x++){
                if (scores[x][0] == "YOU"){break}
                postpos++
            }

            if (best || postpos < prepos || (prepos == 0 && scores[0][1] == Math.round(player.best/16))){
                best = true
                if (postpos == 0 && prepos != 0 && scores[1][0] == "SLM"){
                    playCredits("none", true)
                } else {
                    sfx("ForestA", 15)
                }
            } else {
                sfx("ExecutiveOffice", 15)
                if (Math.round(player.best/16) == 87){
                    sfx("87")
                }
            }

            // NG
            unlockMedal(82428, player.best/16 > 394)
            unlockMedal(82427, player.best/16 > 396)
            unlockMedal(82426, player.best/16 > 495)
            unlockMedal(82425, player.best/16 > 536)
            unlockMedal(82424, player.best/16 > 543)
            unlockMedal(82423, player.best/16 > 1370)
            unlockMedal(82422, player.best/16 > 1476)
            unlockMedal(82421, player.best/16 > 2017)
            unlockMedal(82420, player.best/16 > 2288)
            unlockMedal(82419, player.best/16 > 7464)

            let yours = 0
            for (let x = 0; x < 10; x++){
                if (scores[x][0] == "YOU"){
                    yours++
                    unlockMedal(82414)
                    if (x < 3){
                        unlockMedal(82413)
                    }
                }
            }

            unlockMedal(82412, scores[0][0] == "YOU")
            unlockMedal(82411, yours == 10)

            if (!(postpos == 0 && prepos != 0 && scores[1][0] == "SLM")){
                document.querySelector(".boards").style.display = "block"
                renderLB()
            }
        }

        generateHolds()
        
        while (holds[0][1] < player.best - 256){
            holds.splice(0, 1)
        }

        if (player.best/16000 > 1){
            wind.volume = 1
        } else {
            wind.volume = player.best/16000
        }

        // GRAPHICS
        document.querySelector(".player").style.left = (Math.round(player.pos[0]) + "px")
        document.querySelector(".player").style.top = (Math.round(512- player.pos[1]) + "px")

        if (player.anchor == null){
            document.querySelector(".handL").style.left = (Math.round(-16 + player.vel[0]) + "px")
            document.querySelector(".handL").style.top = (Math.round(-player.vel[1]) + "px")

            document.querySelector(".handR").style.left = (Math.round(16 + player.vel[0]) + "px")
            document.querySelector(".handR").style.top = (Math.round(-player.vel[1]) + "px")
        } else {
            if (player.gripper == 0){
                document.querySelector(".handL").style.left = -Math.round(player.pos[0] - player.anchor[0]) + "px"
                document.querySelector(".handL").style.top = Math.round(player.pos[1] - player.anchor[1]) + "px"
            } else {
                document.querySelector(".handL").style.left = "-16px"
                document.querySelector(".handL").style.top = "0px"
            }

            if (player.gripper == 1){
                document.querySelector(".handR").style.left = -Math.round(player.pos[0] - player.anchor[0]) + "px"
                document.querySelector(".handR").style.top = Math.round(player.pos[1] - player.anchor[1]) + "px"
            } else {
                document.querySelector(".handR").style.left = "16px"
                document.querySelector(".handR").style.top = "0px"
            }
        }

        if (player.axes){
            document.querySelector(".peakMan").style.backgroundImage = "url(img/peakManAxeless.png)"
        } else {
            document.querySelector(".peakMan").style.backgroundImage = "url(img/peakMan.png )"
        }

        if (player.axes){
            document.querySelector(".handL").style.backgroundImage = "url(img/handaxeL.png)"
        } else if (key.z){
            document.querySelector(".handL").style.backgroundImage = "url(img/handclampL.png)"
        } else {
            document.querySelector(".handL").style.backgroundImage = "url(img/handL.png)"
        }

        if (player.axes){
            document.querySelector(".handR").style.backgroundImage = "url(img/handaxeR.png)"
        } else if (key.x){
            document.querySelector(".handR").style.backgroundImage = "url(img/handclampR.png)"
        } else {
            document.querySelector(".handR").style.backgroundImage = "url(img/handR.png)"
        }

        document.querySelector(".time").innerHTML = renderTime(Date.now() - start)
        document.querySelector(".height").innerHTML = renderString(Math.round(player.best/16) + "m")
        document.querySelector(".holds").innerHTML = renderString(player.holds + " holds")

        scroll()
    }
}, 1000/60)