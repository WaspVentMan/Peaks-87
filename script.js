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
    ["MHó", 2017],
    ["ELD", 1476],
    ["VíS", 1370],
    ["YMR", 543],
    ["WLK", 536],
    ["DND", 495],
    ["MHR", 396],
    ["EIN", 394]
]

let saveData = localStorage.getItem("PEAKS87")
if (saveData != null){
    scores = JSON.parse(saveData)
}

let wind = new Audio("audio/highwind.wav")
wind.loop = true
wind.volume = 0

let best = false
let leaderboard = "z"
let holds = []
let punishment = 0.1
let deathtimeout = []
let deathcam = 0

let sounds = []
function sfx(sound, vol = 100){
    let a = new Audio(sound)
    a.play()
    a.volume = vol/100
    sounds.push(a)

    if (sounds.length > 32){
        sounds[0].pause()
        sounds.splice(0, 1)
    }
}

function sfxClear(){
    for (let x = 0; x < deathtimeout.length; x++){
        clearTimeout(deathtimeout[x])
    }
    for (let x = 0; x < sounds.length; x++){
        sounds[x].pause()
    }
    deathtimeout = []
    sounds = []
}

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

setInterval(function(){
    // LOGIC
    gametime()

    if (key.f && !held.f && window.location != window.parent.location){
        held.f = true
        window.open(window.location.href, '_blank').focus()
    }

    if (document.querySelector(".loadZoneDeluxe").style.width != "0px"){return}

    if (document.querySelector(".credits").style.display != "none"){return}

    if (document.querySelector(".title").style.display != "none"){
        if (key.z && !held.z){
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

            sfxClear()

            document.querySelector(".holdzone").innerHTML = ""
            document.querySelector(".gameOver").style.display = "none"
            document.querySelector(".title").style.display = "none"
        } else if (key.x && !held.x){
            document.querySelector(".title").style.display = "none"
            playCredits("block")
        }
        return
    }

    if (player.dead){
        if (player.best > 256){
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

        if (key.z && key.x){
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

            sfxClear()

            document.querySelector(".holdzone").innerHTML = ""
            document.querySelector(".gameOver").style.display = "none"
        } else if (key.z && !held.z && leaderboard != "z"){
            held.z = true
            leaderboard = "z"
            renderLB()
        } else if (key.x && !held.x && leaderboard != "x"){
            held.x = true
            leaderboard = "x"
            renderLB()
        }
        if (key.ArrowLeft && !held.ArrowLeft){
            held.ArrowLeft = true

            if (punishment != 0.1){
                sfx("audio/click.wav", 25)
                punishment /= 10
            }

            leaderboard = "z"
            renderLB()
        }

        if (key.ArrowRight && !held.ArrowRight){
            held.ArrowRight = true
            
            if (punishment != 100){
                sfx("audio/click.wav", 25)
                punishment *= 10
            }
            leaderboard = "z"
            renderLB()
        }
    } else {
        deathcam = 0
        document.querySelector(".boards").style.display = "none"

        if (player.anchor == null){
            player.pos[0] += player.vel[0]
            player.pos[1] += player.vel[1]

            if (player.pos[1] < 64){
                player.vel[1] = 0
                player.pos[1] = 64
                player.crampon = 1

                if (player.pos[0] + player.vel[0] > 249){
                    player.vel[0] -= 0.5
                } else if (player.pos[0] + player.vel[0] < 247){
                    player.vel[0] += 0.5
                }
                
                if (key.ArrowUp){
                    held.ArrowUp = true
                    sfx("audio/jump" + Math.ceil(Math.random()*4) + ".wav")
                    player.vel[1] = 5
                }

                player.vel[0] *= 0.8
            } else {
                if (key.ArrowLeft){
                    held.ArrowLeft = true
                    player.vel[0] -= 0.1
                }
            
                if (key.ArrowRight){
                    held.ArrowRight = true
                    player.vel[0] += 0.1
                }

                if (key.x && key.z && !held.z && !held.z && player.pos[0] > 112 && player.pos[0] < 400){
                    held.x = true
                    held.z = true
        
                    player.vel[1] += 5/player.crampon

                    if (player.crampon < 4){
                        sfx("audio/jump" + Math.ceil(Math.random()*4) + ".wav")
                    } else {
                        sfx("audio/cramponfail" + Math.ceil(Math.random()*3) + ".wav")
                    }

                    player.crampon++
                }
            }

            if (key.ArrowDown && !held.ArrowDown){
                held.ArrowDown = true
                player.axes = !player.axes
            }

            player.vel[1] -= 0.25
        
            if (key.z){
                for (let x = 0; x < holds.length; x++){
                    if (Math.round(holds[x][0]/16) == Math.round((player.pos[0]-16)/16) && Math.round(holds[x][1]/16) == Math.round(player.pos[1]/16) && holds[x][2] == player.axes){
                        player.gripper = 0
                        player.anchor = Object.assign([], player.pos)
                        player.anchor[0] -= 16
                        player.rot = 1
                        player.vel = player.vel[1]*2

                        if (!player.axes){
                            sfx("audio/grab" + Math.ceil(Math.random()*3) + ".wav")
                        } else {
                            sfx("audio/axehit" + Math.ceil(Math.random()*3) + ".wav")
                            sfx("audio/axecrunch" + Math.ceil(Math.random()*3) + ".wav")
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
                            sfx("audio/grab" + Math.ceil(Math.random()*3) + ".wav")
                        } else {
                            sfx("audio/axehit" + Math.ceil(Math.random()*3) + ".wav")
                            sfx("audio/axecrunch" + Math.ceil(Math.random()*3) + ".wav")
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
                player.vel -= 0.2
            }
        
            if (key.ArrowRight){
                held.ArrowRight = true
                player.vel += 0.2
            }

            if (player.rot +90 < 0){
                player.vel += 0.3
            }

            if (player.rot +90 > 0){
                player.vel -= 0.3
            }

            if (player.rot > 90){
                player.rot -= 360
            }

            if (player.rot < -270){
                player.rot += 360
            }

            player.vel *= 0.99
            player.rot += player.vel

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

            let deathboard = 0

            if (punishment == 0.1){deathboard = 14449}
            if (punishment == 1)  {deathboard = 14452}
            if (punishment == 10) {deathboard = 14451}
            if (punishment == 100){deathboard = 14453}

            if (!offline){NGIO.postScore(deathboard, Math.round(player.best/16)*100, function(){})}

            sfx("audio/fall" + Math.ceil(Math.random()*4) + ".wav", 50)
            deathtimeout.push(setTimeout(function(){sfx("audio/fall" + Math.ceil(Math.random()*4) + ".wav", 25)}, 1000))
            deathtimeout.push(setTimeout(function(){sfx("audio/fall" + Math.ceil(Math.random()*4) + ".wav", 12.5)}, 2000))
            deathtimeout.push(setTimeout(function(){sfx("audio/fall" + Math.ceil(Math.random()*4) + ".wav", 6.25)}, 3000))
            deathtimeout.push(setTimeout(function(){sfx("audio/fall" + Math.ceil(Math.random()*4) + ".wav", 3.125)}, 4000))
            deathtimeout.push(setTimeout(function(){sfx("audio/fall" + Math.ceil(Math.random()*4) + ".wav", 1.5625)}, 5000))

            best = false
            let prepos = 0

            Math.round(player.best/16)

            for (let x = 0; x < 10; x++){
                if (scores[x][0] == "YOU"){break}
                prepos++
            }

            if (scores[prepos][0] == "YOU" && scores[prepos][1] < Math.round(player.best/16)){best = true}

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
                    sfx("audio/ForestA.mp3", 15)
                }
            } else {
                sfx("audio/ExecutiveOffice.mp3", 15)
                if (Math.round(player.best/16) == 87){
                    sfx("audio/87.mp3")
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

        if (holds.length == 0){
            holds.push([256, 96, false])

            let newHold = document.createElement("div")
            newHold.className = "hold" + holds[holds.length-1][1]
            newHold.style.top = 512 - holds[holds.length-1][1] + "px"
            newHold.style.left = holds[holds.length-1][0] + "px"
            newHold.style.position = "absolute"
            newHold.style.backgroundImage = "url(img/hold.png)"
            newHold.style.width = "16px"
            newHold.style.height = "16px"

            document.querySelector(".holdzone").appendChild(newHold)
        }
        while (holds[holds.length-1][1] < player.best + 512){
            let holdx = holds[holds.length-1][0] + Math.round(Math.random()*((holds[holds.length-1][1]/(2560/punishment))+4)-(((holds[holds.length-1][1]/(2560/punishment))+4)/2))*16
            let holdy = holds[holds.length-1][1] + (Math.ceil(Math.random()*((holds[holds.length-1][1]/(2560/punishment))+4))*16)
            
            if (holdx < 128){
                holdx = 128
                holdx += Math.round(Math.random()*4)*16
            }
            
            if (holdx > 384){
                holdx = 384
                holdx -= Math.round(Math.random()*4)*16
            }

            let ice = false

            if (Math.random() < ((holdy)/(16000/punishment)) && holdy > 16000){
                ice = true
            }

            holds.push([holdx, holdy, ice])

            let newHold = document.createElement("div")
            newHold.className = "hold" + holds[holds.length-1][1]
            newHold.style.top = 512 - holds[holds.length-1][1] + "px"
            newHold.style.left = holds[holds.length-1][0] + "px"
            newHold.style.position = "absolute"
            newHold.style.width = "16px"
            newHold.style.height = "16px"

            newHold.style.backgroundImage = "url(img/" + ["hold", "icehold"][ice+0] + ".png)"
            
            document.querySelector(".holdzone").appendChild(newHold)
        }
        
        while (holds[0][1] < player.best - 256){
        //    document.querySelector(".hold" + holds[0][1]).remove()
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
            document.querySelector(".peakMan").style.backgroundImage = "url(img/peakMan.png)"
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

        document.querySelector(".holds").innerHTML = renderString(player.holds + "h")
        document.querySelector(".height").innerHTML = renderString(Math.round(player.best/16) + "m")
    }

    if (player.best > 256){
        document.querySelector(".game").style.top = Math.round(player.best - 256) + "px"
        document.querySelector(".towerRender").style.top = (Math.round((player.best - 256)%512)-512) + "px"
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
}, 1000/60)

setInterval(function(){
    if (!document.hasFocus()) {
        document.querySelector(".focus").style.display = 'block'
    }
})