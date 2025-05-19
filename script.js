let player = {
    "pos": [[-64, 576][Math.round(Math.random())], 0],
    "vel": [0, 0],
    "rot": 0,
    "gripper": 0,
    "anchor": null,
    "hold": {},
    "stamina": 100,
    "best": 0,
    "dead": true,
    "holds": 0,
    "lb": "z",
    "crampon": 1,
    "axes": false
}

let scores = {
    "p0": [
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
    ],
    "p1": [
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
    ],
    "p10": [
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
    ],
    "p100": [
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
    ],
    "p0Cache": undefined,
    "p1Cache": undefined,
    "p10Cache": undefined,
    "p100Cache": undefined
}

let skins = [
    ["peakMan", "peak man"],
    ["peakManGL", "good luck"],
    ["bald", "bald peak man"],
    ["peakManHD", "peak man hd"],
    ["peakManGB", "peak man gameboy"],
    ["peakManGBBW", "peak man gameboy (monochrome)"],
    ["rolereverse", "ice axes"],
    ["mountain", "forevisir"],
    ["victim", "the victim"],
]

let skinPacks = []
let savePack = localStorage.getItem("PEAKS87SKINPACKS")
if (savePack != null){
    skinPacks = JSON.parse(savePack)
}

let settings = {
    "menu": {
        "selection": [0, 0],
        "lockin": false,
        "options": [
            [
                {
                    "name": "settings",
                    "value": "save and return to menu",
                    "var": "menu",
                    "small": true
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
                }
            ],
            [
                {
                    "name": "settings",
                    "value": "save and return to menu",
                    "var": "menu",
                    "small": true
                },
                {
                    "name": "more skins",
                    "value": "on discord",
                    "var": "discord link",
                },
                {
                    "name": "",
                    "value": "change skin",
                    "var": "cycle skin",
                    "title": true
                },
                {
                    "name": "",
                    "value": "import skin",
                    "var": "change skin",
                    "small": true
                },
                {
                    "name": "",
                    "value": "import skin pack",
                    "var": "load spack",
                    "small": true
                },
                {
                    "name": "reset skin",
                    "value": "reset skin",
                    "var": "reset skin",
                    "small": true
                },
                {
                    "name": "skin sheet",
                    "value": "$",
                    "var": "skin",
                    "select": false
                },
                {
                    "name": "skin sheet",
                    "value": "£",
                    "var": "idk lmao",
                    "small": true
                },
                {
                    "name": "if this is blank",
                    "value": "the url is invalid",
                    "var": "idk lmao",
                    "select": false
                }
            ],
            [
                {
                    "name": "settings",
                    "value": "save and return to menu",
                    "var": "menu",
                    "small": true
                },
                {
                    "name": "reset scores",
                    "value": "this will clear all local scores",
                    "handler": "bool",
                    "var": "reset scores",
                    "on": "!!! resetting scores !!!"
                },
                {
                    "name": "reset skins",
                    "value": "this will clear all saved skin packs",
                    "handler": "bool",
                    "var": "reset",
                    "on": "!!! resetting skins !!!"
                },
                {
                    "name": "reset settings",
                    "value": "this will reset settings",
                    "handler": "bool",
                    "var": "reset settings",
                    "on": "!!! resetting settings !!!"
                },
                {
                    "name": "hard reset",
                    "value": "this will reset everything",
                    "handler": "bool",
                    "var": "hard reset",
                    "on": "!!! resetting everything !!!"
                }
            ],
            [
                {
                    "name": "settings",
                    "value": "save and return to menu",
                    "var": "menu",
                    "small": true
                },
                {
                    "name": "",
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
        ],
        "titles": [
            "general",
            "skin",
            "data management",
            "debug menu"
        ]
    },
    "zoom": 1,
    "grayscale": false,
    "punishment": 0.1,
    "debugtitles": true,
    "debuggen": false,
    "debugpef": false,
    "debugice": false,
    "reset scores": false,
    "reset skins": false,
    "reset settings": false,
    "hard reset": false,
    "skin": ["L", 0]
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
    if (JSON.parse(saveData)["p0"] == undefined){
        console.log("Existing Old Format Data")
        console.log(saveData)
        scores["p" + Math.floor(settings.punishment)] = JSON.parse(saveData)
    } else {
        scores = JSON.parse(saveData)
    }
    
    for (let x = 0; x < scores["p" + Math.floor(settings.punishment)].length; x++){
        if (scores["p" + Math.floor(settings.punishment)][x][0] == "MHó"){
            scores["p" + Math.floor(settings.punishment)][x][0] = "MHO"
        }

        if (scores["p" + Math.floor(settings.punishment)][x][0] == "VíS"){
            scores["p" + Math.floor(settings.punishment)][x][0] = "VIS"
        }
    }
}

for (let x = 0; x < scores["p" + Math.floor(settings.punishment)].length; x++){
    if (scores["p" + Math.floor(settings.punishment)][x][0] == "YOU"){
        player.best = scores["p" + Math.floor(settings.punishment)][x][1]*16
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

let wind = new Audio("audio/highwind.mp3")
wind.loop = true
wind.volume = 0

let forest = new Audio("audio/forestambience.mp3")
forest.loop = true
forest.volume = 0

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
let particles = []

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

            if (player.best/1600 > 1){
                forest.volume = 0
            } else {
                forest.volume = 1-(player.best/1600)
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
                holdbiome = ["normal", "oldnormal", "crack", "oldcrack", "clutter", "classic", "inset", "slipnslide", "paindrain", "slipndrain"][Math.floor(Math.random()*10)]
            }
        }

        if (holdbiome == "crack" && holds.length != 0){
            if (!document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage.endsWith("E.png\")")){
                holdx = holds[holds.length-1][0]
                holdy = holds[holds.length-1][1] + 16
            }

                   if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage.endsWith("L.png\")")){
                holdx -= 16
            } else if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage.endsWith("C.png\")")){
            } else if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage.endsWith("R.png\")")){
                holdx += 16
            } else if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage.endsWith("E.png\")")){
            } else {
                holdx += [-16, 0, 16][Math.floor(Math.random()*3)]
            }
        } else if (holdbiome == "oldcrack" && holds.length != 0){
            holdx = holds[holds.length-1][0]
            holdy = holds[holds.length-1][1] + 16

            if (Math.random() < 0.05){
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

        if (Math.random() < ((holdy)/(16000/settings.punishment)) && holdy > 16000){
            ice = true
        }

        if (settings.debugtitles && settings.debugice){
            genDebug.push("")
            genDebug.push("- ice info -")
        }

        let newHold = document.createElement("div")
        newHold.className = "hold" + holdy
        newHold.style.top = 512 - holdy + "px"
        newHold.style.left = holdx + "px"
        newHold.style.position = "absolute"
        newHold.style.width = "16px"
        newHold.style.height = "16px"

        if (holdbiome == "normal"){
            newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + ["dangeregg", "hold", "edgecrimp", "edgecrimp3"][Math.floor(Math.random()*4)] + ".png)"
        } else if (holdbiome == "oldnormal"){
            newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + ["bigpocket", "dangeregg", "fingercrimp", "hold"][Math.floor(Math.random()*4)] + ".png)"
        } else if (holdbiome == "crack" && holds.length != 0){
                   if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage.endsWith("L.png\")")){
                newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + "crackR" + "LCRE"[Math.floor(Math.random()*4)] + ".png)"
            } else if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage.endsWith("C.png\")")){
                newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + "crackC" + "LCRE"[Math.floor(Math.random()*4)] + ".png)"
            } else if (document.querySelector(".hold" + holds[holds.length-1][1]).style.backgroundImage.endsWith("R.png\")")){
                newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + "crackL" + "LCRE"[Math.floor(Math.random()*4)] + ".png)"
            } else {
                newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + "crackE" + "LCR"[Math.floor(Math.random()*3)] + ".png)"
            }
        } else if (holdbiome == "oldcrack" && holds.length != 0){
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
        } else if (holdbiome == "slipnslide"){
            newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + ["bigpocket", "dangeregg", "edgecrimp2", "edgecrimp4"][Math.floor(Math.random()*4)] + ".png)"
        } else if (holdbiome == "paindrain"){
            newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + ["bigpocket", "pinch", "handjam", "fingercrimp"][Math.floor(Math.random()*4)] + ".png)"
        } else if (holdbiome == "slipndrain"){
            newHold.style.backgroundImage = "url(img/holds/" + ["", "ice"][ice+0] + ["bigpocket", "dangeregg", "edgecrimp2", "edgecrimp4", "pinch", "handjam", "fingercrimp"][Math.floor(Math.random()*7)] + ".png)"
        }
        holds.push([holdx, holdy, ice, newHold.style.backgroundImage.slice(15).split(".")[0]])

        if (settings.debugice){
            genDebug.push("ice: " + ice)
            genDebug.push("spawnable: " + (holdy>16000))
            genDebug.push("chance: " + Math.round(((holdy)/(16000/settings.punishment))*10000)/100 + "%")
        }

        if (settings.debuggen){
            genDebug.push("biome: " + holdbiome)
            genDebug.push("x: " + holdx)
            genDebug.push("y: " + holdy)
            genDebug.push("type: " + holds[holds.length-1][3])
        }

        if (settings.debuggen || settings.debugice){
            document.querySelector(".debugG").innerHTML = renderStrings(genDebug, "default", "right")
        }

        document.querySelector(".holdzone").appendChild(newHold)
    }
}

function skinSelection(reset=false){
    key.z = false
    held.z = false

    if (reset){
        settings.skin = ["L", 0]
        buildSettings()
    } else {
        settings.skin = ["U", prompt("Please enter skin URL", "")]
        if (settings.skin[1] == null){settings.skin = ["L", 0]}
        buildSettings()
    }
}

function spawnParticle(type, pos){
    let newParticle = document.createElement("div")
    newParticle.className = ("particle" + Date.now() + "r" + Math.random()).replaceAll(".", "")

    newParticle.style.backgroundImage = "url(img/particle/" + type + ".png)"
    newParticle.style.width = "4px"
    newParticle.style.height = "4px"
    newParticle.style.position = "absolute"
    newParticle.style.left = "4px"
    newParticle.style.top = "4px"
    newParticle.style.transform = "rotate(" + Math.round(Math.random())*90 + "deg)"

    pos[0] += 8
    pos[1] -= 8

    document.querySelector(".holddeco").appendChild(newParticle)
    particles.push({"pos": pos, "vel": [(Math.random()-0.5)*100, (Math.random()-0.5)*50], "className": newParticle.className})
}

async function importSkinpack(url){
    if (skins){}
    let newSkins = await (await fetch(url + "/pack.json")).json()
    for (let x = 0; x < newSkins.length; x++){
        skins.push([url + "/skins/" + newSkins[x][0] + ".png", newSkins[x][1], newSkins[x][2]])
    }
}

function spawnBests(){
    document.querySelector(".scoreMarkers").innerHTML = ""
    
    if (scores["p" + Math.floor(settings.punishment) + "Cache"] != undefined){
        for (let x = 0; x < scores["p" + Math.floor(settings.punishment) + "Cache"].length; x++){
            let newElement = document.createElement("div")

            newElement.style.width = "512px"
            newElement.style.position = "absolute"
            newElement.style.top = 528-((scores[["p" + Math.floor(settings.punishment) + "Cache"]][x].value/100)*16) + "px"
    
            newElement.innerHTML = `<div style="width: max-content; margin: auto; margin-left: 0px; height: 16px; display: flex; text-align: center;"><div style="width: 16px; height: 16px; background-image: url(` + scores[["p" + Math.floor(settings.punishment) + "Cache"]][x].user.icons.large + `); background-size: cover; margin-left: 128px; margin-right: 8px"></div>` + renderString(scores["p" + Math.floor(settings.punishment) + "Cache"][x].user.name + " - " + (scores[["p" + Math.floor(settings.punishment) + "Cache"]][x].value/100) + "m").slice(95)
            newElement.innerHTML += `<div class="animtape" style="width: 512px; height: 2px; background-image: url(img/scoreMarker.png);"></div>`
            document.querySelector(".scoreMarkers").appendChild(newElement)
        }
    }

    for (let x = 0; x < scores["p" + Math.floor(settings.punishment)].length; x++){
        let newElement = document.createElement("div")

        newElement.style.width = "512px"
        newElement.style.position = "absolute"
        newElement.style.top = 528-((scores[["p" + Math.floor(settings.punishment)]][x][1])*16) + "px"

        newElement.innerHTML = `<div style="width: max-content; margin: auto; margin-left: 0px; height: 16px; display: flex; text-align: center;"><div style="width: 16px; height: 16px; background-image: url(img/local.png); margin-left: 128px; margin-right: 8px;"></div>` + renderString(scores["p" + Math.floor(settings.punishment)][x][0] + " - " + scores["p" + Math.floor(settings.punishment)][x][1] + "m").slice(95)
        newElement.innerHTML += `<div class="animtape" style="width: 512px; height: 2px; background-image: url(img/scoreMarker.png);"></div>`
        document.querySelector(".scoreMarkers").appendChild(newElement)
    }
}

async function mountPacks() {
    for (let x = 0; x < Object.keys(skinPacks).length; x++){
        await importSkinpack(skinPacks[x])
    }

    if (settings.skin[1] > skins.length-1){
        skinSelection(true)
    }
}

generateHolds()
buildTitle()
buildSettings()
buildDeath()
spawnBests()
mountPacks()

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

    if (particles.length != 0){
        while (particles[0].pos[1] < player.best - 256){
            document.querySelector("." + particles[0].className).remove()
            particles.splice(0, 1)

            if (particles.length == 0){
                break
            }
        }
    }

    for (let x = 0; x < particles.length; x++){
        particles[x].pos[0] += particles[x].vel[0]*d
        particles[x].pos[1] += particles[x].vel[1]*d

        particles[x].vel[0] *= 0.99
        particles[x].vel[1] -= 500*d

        document.querySelector("." + particles[x].className).style.left = Math.round(particles[x].pos[0]) + "px"
        document.querySelector("." + particles[x].className).style.top = Math.round(512 - particles[x].pos[1]) + "px"
    }

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
            playSound("audio/click.mp3", 25)

            if (settings.menu.selection[1] == 0){
                document.querySelector(".settings").style.display = "none"
                document.querySelector(".title").style.display = "block"

                if (settings["reset scores"] || settings["hard reset"]){
                    localStorage.clear("PEAKS87")
                }

                if (settings["reset skins"] || settings["hard reset"]){
                    localStorage.clear("PEAKS87SKINPACKS")
                }

                if (settings["reset settings"] || settings["hard reset"]){
                    localStorage.clear("PEAKS87SETTINGS")
                }

                if (settings["reset scores"] || settings["reset skins"] || settings["reset settings"] || settings["hard reset"]){
                    location.reload()
                    return
                }

                localStorage.setItem("PEAKS87SETTINGS", JSON.stringify(settings))

                return
            }

            if (settings.menu.options[settings.menu.selection[0]][settings.menu.selection[1]].var == "zoom" && window.location != window.parent.location){
                window.open(window.location.href, '_blank').focus()
                location.reload()
            }

            if (settings.menu.options[settings.menu.selection[0]][settings.menu.selection[1]].var == "ng"){
                if (offline){
                    NGIO.openLoginPage()
                    buildSettings()
                }
                
                return
            }

            if (settings.menu.options[settings.menu.selection[0]][settings.menu.selection[1]].var == "change skin"){
                skinSelection()
                return
            }

            if (settings.menu.options[settings.menu.selection[0]][settings.menu.selection[1]].var == "reset skin"){
                skinSelection(true)
                return
            }

            if (settings.menu.options[settings.menu.selection[0]][settings.menu.selection[1]].var == "load spack"){
                let newPack = prompt("Please enter skin pack URL", "")
                if (newPack != null && !skinPacks.includes(newPack)){
                    skinPacks.push(newPack)
                    importSkinpack(newPack)
                    localStorage.setItem("PEAKS87SKINPACKS", JSON.stringify(skinPacks))
                }
                return
            }

            if (settings.menu.options[settings.menu.selection[0]][settings.menu.selection[1]].var == "discord link"){
                window.open("https://discord.gg/8gzjP5bZ9R", '_blank').focus()
                return
            }

            settings.menu.lockin = !settings.menu.lockin
            buildSettings()
        }

        if (key.ArrowLeft && !held.ArrowLeft || key.ArrowRight && !held.ArrowRight){
            held.ArrowLeft = key.ArrowLeft
            held.ArrowRight = key.ArrowRight

            if (!settings.menu.lockin){
                if (key.ArrowLeft && settings.menu.selection[0] > 0){
                    playSound("audio/click.mp3", 25)
                    settings.menu.selection[0]--
                    settings.menu.selection[1] = 0
                }
                if (key.ArrowRight && settings.menu.selection[0] < settings.menu.options.length-1){
                    playSound("audio/click.mp3", 25)
                    settings.menu.selection[0]++
                    settings.menu.selection[1] = 0
                }
                buildSettings()
                return
            }

            if (settings.menu.options[settings.menu.selection[0]][settings.menu.selection[1]].handler != undefined){
                switch (settings.menu.options[settings.menu.selection[0]][settings.menu.selection[1]].handler){
                    case "bool":
                        playSound("audio/click.mp3", 25)
                        settings[settings.menu.options[settings.menu.selection[0]][settings.menu.selection[1]].var] = !settings[settings.menu.options[settings.menu.selection[0]][settings.menu.selection[1]].var]
                        break
                }
            } else {
                switch (settings.menu.options[settings.menu.selection[0]][settings.menu.selection[1]].var){
                    case "zoom":
                        if (held.ArrowLeft && settings.zoom > 1 && window.location == window.parent.location){
                            playSound("audio/click.mp3", 25)
                            settings.zoom--
                        } else if (held.ArrowRight && window.location == window.parent.location){
                            playSound("audio/click.mp3", 25)
                            settings.zoom++
                        }
                        break
                    
                    case "punishment":
                        if (held.ArrowLeft && settings.punishment != 0.1){
                            playSound("audio/click.mp3", 25)
                            settings.punishment /= 10
                        } else if (held.ArrowRight && settings.punishment != 100){
                            playSound("audio/click.mp3", 25)
                            settings.punishment *= 10
                        }
                        break

                    case "cycle skin":
                        if (settings.skin[0] != "L"){
                            playSound("audio/click.mp3", 25)
                            settings.skin = ["L", 0]
                            break
                        }

                        if (held.ArrowLeft && settings.skin[1] > 0){
                            playSound("audio/click.mp3", 25)
                            settings.skin[1]--
                        } else if (held.ArrowRight && settings.skin[1] < skins.length-1){
                            playSound("audio/click.mp3", 25)
                            settings.skin[1]++
                        }
                        break
                }
            }

            buildSettings()
        }

        if ((key.ArrowUp && !held.ArrowUp || key.ArrowDown && !held.ArrowDown) && !settings.menu.lockin){
            held.ArrowUp = key.ArrowUp
            held.ArrowDown = key.ArrowDown

            if (held.ArrowUp && settings.menu.selection[1] > 0){
                playSound("audio/click.mp3", 25)
                settings.menu.selection[1]--
            } else if (held.ArrowDown && settings.menu.selection[1] < settings.menu.options[settings.menu.selection[0]].length-1 && settings.menu.options[settings.menu.selection[0]][settings.menu.selection[1]+1].select == undefined){
                playSound("audio/click.mp3", 25)
                settings.menu.selection[1]++
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
                        "hold": {},
                        "stamina": 100,
                        "best": 0,
                        "dead": false,
                        "holds": 0,
                        "crampon": 1,
                        "axes": false
                    }

                    spawnBests()
        
                    holds = []
                    start = Date.now()
        
                    clearMusic()
                    playSound("audio/click.mp3", 25)
        
                    document.querySelector(".holdzone").innerHTML = ""
                    document.querySelector(".gameOver").style.display = "none"
                    document.querySelector(".title").style.display = "none"
                    break
                
                case "scores":
                    playSound("audio/click.mp3", 25)

                    document.querySelector(".title").style.display = "none"
                    document.querySelector(".boards").style.display = "block"
                    deathMenu.selection = 0
                    buildDeath()
                    renderLB()
                    break
                
                case "settings":
                    settings.menu.selection[1] = 0
                    playSound("audio/click.mp3", 25)

                    document.querySelector(".title").style.display = "none"
                    document.querySelector(".settings").style.display = "block"
                    buildSettings()
                    break
                
                case "credits":
                    clearMusic()
                    document.querySelector(".title").style.display = "none"
                    playCredits("block")
                    break
                
                case "skins":
                    skinSelection(true)
                    skinSelection()
                    break
            }
            return
        }

        if ((key.ArrowUp && !held.ArrowUp || key.ArrowDown && !held.ArrowDown)){
            held.ArrowUp = key.ArrowUp
            held.ArrowDown = key.ArrowDown

            if (held.ArrowUp && title.selection > 0){
                playSound("audio/click.mp3", 25)
                title.selection--
            } else if (held.ArrowDown && title.selection < title.options.length-1){
                playSound("audio/click.mp3", 25)
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
                        "hold": {},
                        "stamina": 100,
                        "best": 0,
                        "dead": false,
                        "holds": 0,
                        "crampon": 1,
                        "axes": false
                    }

                    spawnBests()
        
                    holds = []
                    start = Date.now()
        
                    clearMusic()
                    playSound("audio/click.mp3", 25)
        
                    document.querySelector(".holdzone").innerHTML = ""
                    document.querySelector(".gameOver").style.display = "none"
                    document.querySelector(".title").style.display = "none"
                    break
                
                case "back to title":
                    playSound("audio/click.mp3", 25)

                    document.querySelector(".title").style.display = "block"
                    document.querySelector(".boards").style.display = "none"
                    buildTitle()
                    break
                
                case "toggle scores":
                    playSound("audio/click.mp3", 25)

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
                playSound("audio/click.mp3", 25)
                deathMenu.selection--
            } else if (held.ArrowDown && deathMenu.selection < deathMenu.options.length-1){
                playSound("audio/click.mp3", 25)
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

            if (player.stamina < 100) {
                player.stamina += 10*d

                if (player.stamina > 100){
                    player.stamina = 100
                }
            }

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
                    playSound("audio/jump" + Math.ceil(Math.random()*4) + ".mp3")
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
                    
                    if (player.crampon < 4 && player.vel[1] < 0){
                        player.vel[1] = 5
                    } else {
                        player.vel[1] += 5/player.crampon
                    }

                    if (player.crampon < 4){
                        playSound("audio/jump" + Math.ceil(Math.random()*4) + ".mp3")
                    } else {
                        playSound("audio/cramponfail" + Math.ceil(Math.random()*3) + ".mp3")
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
                        player.hold = holds[x]
                        player.anchor = Object.assign([], player.pos)
                        player.anchor[0] -= 16
                        player.rot = 1
                        player.vel = player.vel[1]*2

                        if (!player.axes){
                            playSound("audio/grab" + Math.ceil(Math.random()*3) + ".mp3")
                            for (let x = 0; x < 10; x++){spawnParticle("stone", Object.assign([], player.anchor))}
                        } else {
                            playSound("audio/axehit" + Math.ceil(Math.random()*3) + ".mp3")
                            playSound("audio/axecrunch" + Math.ceil(Math.random()*3) + ".mp3")
                            for (let x = 0; x < 10; x++){spawnParticle("ice", Object.assign([], player.anchor))}
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
                        player.hold = holds[x]
                        player.anchor = Object.assign([], player.pos)
                        player.anchor[0] += 16
                        player.rot = -180
                        player.vel = -player.vel[1]*2
                        
                        if (!player.axes){
                            playSound("audio/grab" + Math.ceil(Math.random()*3) + ".mp3")
                            for (let x = 0; x < 10; x++){spawnParticle("stone", Object.assign([], player.anchor))}
                        } else {
                            playSound("audio/axehit" + Math.ceil(Math.random()*3) + ".mp3")
                            playSound("audio/axecrunch" + Math.ceil(Math.random()*3) + ".mp3")
                            for (let x = 0; x < 10; x++){spawnParticle("ice", Object.assign([], player.anchor))}
                        }

                        player.holds++
                        break
                    }
                }
            }
        } else {
            player.crampon = 1
            player.pos[0] = player.anchor[0] + (24 * Math.cos(player.rot/60))
            player.pos[1] = player.anchor[1] + (24 * Math.sin(player.rot/60))

            if (["dangeregg", "bigpocket", "edgecrimp2", "edgecrimp4"].includes(player.hold[3])){
                player.anchor[1] -= 5*d*Math.pow(settings.punishment*10, 0.05)
                if (Math.random() > 0.75){spawnParticle("stone", Object.assign([], player.anchor))}

                if (player.hold[1] - player.anchor[1] > 12){
                    key.z = false
                    key.x = false
                }
            }

            if (["bigpocket", "handjam", "pinch", "fingercrimp"].includes(player.hold[3]) || player.hold[3].slice(0, 3) == "ice"){
                player.stamina -= 15*d*Math.pow(settings.punishment*10, 0.16)
            } else if (["edgecrimp", "edgecrimp2", "edgecrimp3", "edgecrimp4"].includes(player.hold[3]) || player.hold[3].slice(0, 3) == "ice"){
                player.stamina -= 5*d*Math.pow(settings.punishment*10, 0.16)
            } else if (player.stamina < 100) {
                player.stamina += 30*d
            }

            if (player.stamina <= 0){
                key.z = false
                key.x = false
            }

            if (player.stamina > 100){
                player.stamina = 100
            }

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

            playSound("audio/fall" + Math.ceil(Math.random()*4) + ".mp3", 50)
            deathtimeout.push(setTimeout(function(){playSound("audio/fall" + Math.ceil(Math.random()*4) + ".mp3", 25)}, 1000))
            deathtimeout.push(setTimeout(function(){playSound("audio/fall" + Math.ceil(Math.random()*4) + ".mp3", 12.5)}, 2000))
            deathtimeout.push(setTimeout(function(){playSound("audio/fall" + Math.ceil(Math.random()*4) + ".mp3", 6.25)}, 3000))
            deathtimeout.push(setTimeout(function(){playSound("audio/fall" + Math.ceil(Math.random()*4) + ".mp3", 3.125)}, 4000))
            deathtimeout.push(setTimeout(function(){playSound("audio/fall" + Math.ceil(Math.random()*4) + ".mp3", 1.5625)}, 5000))

            best = false
            let prepos = 0

            Math.round(player.best/16)

            for (let x = 0; x < 10; x++){
                if (scores["p" + Math.floor(settings.punishment)][x][0] == "YOU"){break}
                prepos++
            }

            try {
                if (scores["p" + Math.floor(settings.punishment)][prepos][0] == "YOU" && scores["p" + Math.floor(settings.punishment)][prepos][1] < Math.round(player.best/16)){best = true}
            } catch {}

            for (let x = 0; x < 10; x++){
                if (scores["p" + Math.floor(settings.punishment)][9-x][1] > Math.round(player.best/16)){
                    scores["p" + Math.floor(settings.punishment)].splice(10-x, 0, ["YOU", Math.round(player.best/16)])
                    scores["p" + Math.floor(settings.punishment)].splice(10, 999)
                    break
                } else if (scores["p" + Math.floor(settings.punishment)][9-x][1] < Math.round(player.best/16) && x == 9){
                    scores["p" + Math.floor(settings.punishment)].splice(0, 0, ["YOU", Math.round(player.best/16)])
                    scores["p" + Math.floor(settings.punishment)].splice(10, 999)
                }
            }

            localStorage.setItem("PEAKS87", JSON.stringify(scores))

            let postpos = 0

            for (let x = 0; x < 10; x++){
                if (scores["p" + Math.floor(settings.punishment)][x][0] == "YOU"){break}
                postpos++
            }

            if (best || postpos < prepos || (prepos == 0 && scores["p" + Math.floor(settings.punishment)][0][1] == Math.round(player.best/16))){
                best = true
                if (postpos == 0 && prepos != 0 && scores["p" + Math.floor(settings.punishment)][1][0] == "SLM"){
                    playCredits("none", true)
                } else {
                    playMusic("audio/lanette.mp3", 15)
                }
            } else {
                playMusic("audio/marionette.mp3", 15)
                if (Math.round(player.best/16) == 87){
                    playSound("audio/87.mp3")
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
                if (scores["p" + Math.floor(settings.punishment)][x][0] == "YOU"){
                    yours++
                    unlockMedal(82414)
                    if (x < 3){
                        unlockMedal(82413)
                    }
                }
            }

            unlockMedal(82412, scores["p" + Math.floor(settings.punishment)][0][0] == "YOU")
            unlockMedal(82411, yours == 10)

            if (!(postpos == 0 && prepos != 0 && scores["p" + Math.floor(settings.punishment)][1][0] == "SLM")){
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

        if (player.best/1600 > 1){
            forest.volume = 0
        } else {
            forest.volume = 1-(player.best/1600)
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
                document.querySelector(".handL").style.left = -Math.round((player.pos[0] - player.anchor[0]) + ([-8*Math.random(), 8*Math.random()][Math.round(Math.random())]*(1-(player.stamina/100)))) + "px"
                document.querySelector(".handL").style.top = Math.round((player.pos[1] - player.anchor[1]) + ([-8*Math.random(), 8*Math.random()][Math.round(Math.random())]*(1-(player.stamina/100)))) + "px"
            } else {
                document.querySelector(".handL").style.left = "-16px"
                document.querySelector(".handL").style.top = "0px"
            }

            if (player.gripper == 1){
                document.querySelector(".handR").style.left = -Math.round((player.pos[0] - player.anchor[0]) + ([-8*Math.random(), 8*Math.random()][Math.round(Math.random())]*(1-(player.stamina/100)))) + "px"
                document.querySelector(".handR").style.top = Math.round((player.pos[1] - player.anchor[1]) + ([-8*Math.random(), 8*Math.random()][Math.round(Math.random())]*(1-(player.stamina/100)))) + "px"
            } else {
                document.querySelector(".handR").style.left = "16px"
                document.querySelector(".handR").style.top = "0px"
            }
        }

        document.querySelectorAll(".stamina")[1].style.width = Math.round(16*(player.stamina/100)) + "px"

        if (player.stamina < 100){
            document.querySelectorAll(".stamina")[0].style.opacity = "100%"
        } else {
            document.querySelectorAll(".stamina")[0].style.opacity = "0%"
        }

        let skin = ""

        if (settings.skin[0] == "U"){
            skin = "url(" + settings.skin[1] + ")"
        } else if (skins[settings.skin[1]][0].startsWith("https://")){
            skin = "url(" + skins[settings.skin[1]][0] + ")"
        } else if (settings.skin[0] == "L"){
            skin = "url(img/skins/" + skins[settings.skin[1]][0] + ".png)"
        }

        document.querySelector(".peakMan").style.backgroundImage = skin
        document.querySelector(".handL").style.backgroundImage = skin
        document.querySelector(".handR").style.backgroundImage = skin

        if (settings.skin[0] == "L" && skins[settings.skin[1]][2] != undefined && key.ArrowLeft){
            document.querySelector(".peakMan").style.transform = "scaleX(1)"
        } else if (settings.skin[0] == "L" && skins[settings.skin[1]][2] != undefined && key.ArrowRight){
            document.querySelector(".peakMan").style.transform = "scaleX(-1)"
        } else if (skins[settings.skin[1]][2] == undefined){
            document.querySelector(".peakMan").style.transform = "scaleX(1)"
        }

        if (player.axes){
            document.querySelector(".peakMan").style.backgroundPosition = "48px 32px"
        } else {
            document.querySelector(".peakMan").style.backgroundPosition = "48px 64px"
        }

        if (player.axes && key.z){
            document.querySelector(".handL").style.backgroundPosition = "32px 16px"
        } else if (player.axes){
            document.querySelector(".handL").style.backgroundPosition = "32px 32px"
        } else if (key.z){
            document.querySelector(".handL").style.backgroundPosition = "32px 48px"
        } else {
            document.querySelector(".handL").style.backgroundPosition = "32px 64px"
        }

        if (player.axes && key.x){
            document.querySelector(".handR").style.backgroundPosition = "16px 16px"
        } else if (player.axes){
            document.querySelector(".handR").style.backgroundPosition = "16px 32px"
        } else if (key.x){
            document.querySelector(".handR").style.backgroundPosition = "16px 48px"
        } else {
            document.querySelector(".handR").style.backgroundPosition = "16px 64px"
        }

        let stats = []

        if (!player.dead){
            stats.push(renderTime(Date.now() - start))
            stats.push(Math.round(player.best/16) + "m")
            stats.push(player.holds + " holds")

            if (scores["p" + Math.floor(settings.punishment) + "Cache"] != undefined){
                for (let x = 0; x < scores["p" + Math.floor(settings.punishment) + "Cache"].length; x++){
                    if (player.best/16 >= scores["p" + Math.floor(settings.punishment) + "Cache"][x].value/100){
                        stats.push("@ #" + (x+1))
                        break
                    }
                }
            }
        
            for (let x = 0; x < scores["p" + Math.floor(settings.punishment)].length; x++){
                if (player.best/16 >= scores["p" + Math.floor(settings.punishment)][x][1]){
                    stats.push("* #" + (x+1))
                    break
                }
            }

            document.querySelector(".stats").innerHTML = renderStrings(stats, "default", "left")
        }

        scroll()
    }
}, 1000/60)