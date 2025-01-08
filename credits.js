let credits = [
    "BY_JACOB_A,_G,_TAYLOR",
    "",
    "INSPIRED_BY",
    "PEAKS_OF_YORE_AND_UFO_50",
    "",
    "PEAKS_OF_YORE",
    "BY_ANDERS_GRUBE_JENSEN",
    "",
    "UFO_50",
    "BY_UFOSOFT",
    "DEREK_YU",
    "JON_PERRY",
    "EIRIK_SUHRKE",
    "PAUL_HUBANS",
    "TYRIQ_PLUMMER",
    "OJIRO_FUMOTO",
    "",
    "MUSIC",
    "EIRIK_SUHRKE",
    "MOONCAT_-_FOREST_A",
    "MIASMA_TOWER_-_EXECUTIVE_OFFICE",
    "",
    "FONT",
    "SFONTTALLBG_FROM_UFO_50",
    "",
    "PLAYTESTERS",
    "NORFOLKRAIL",
    "NIPPLENICK",
    "PURPLESHADE",
    "CODERTOAST",
    "BLUEZANS",
    "THESILENTOR42",
    "MARKOX",
    "",
    "SPECIAL_THANKS",
    "",
    "ASTRALSPIFF",
    "FOR_GETTING_ME_INTO_PEAKS",
    "",
    "SCOTT_CAWTHON",
    "FOR_CREATING_FNAF_4_CAUSING",
    "MARKIPLIER_TO_RUIN_THE_NUMBER_87",
    "",
    "MARKIPLIER",
    "FOR_RUINING_THE_NUMBER_87",
    "",
    "TRACY",
    "FOR_BIRTHING_ME",
    "",
    "PAUL",
    "FOR_FUCKING_MY_MUM",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "THANK_YOU_FOR_PLAYING",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "HOLD_Z_OR_X_TO_SPEED_UP_THE_CREDITS",
    "",
    "",
    ""
]

let heightText = `<div style="height: 512px;"></div><div style="background-image: url(img/logo.png); width: 256px; height: 64px; margin: auto"></div>`

for (let y = 0; y < credits.length; y++){
    heightText += `<div style="width: max-content; margin: auto; height: 16px; display: flex; text-align: center">`
    for (let x = 0; x < credits[y].length; x++){
        heightText += `<div style="width: 8px; height: 16px; background-image: url(img/letter/${credits[y][x]}.png);"></div>`
    }
    heightText += `</div>`
}

document.querySelector(".creditsText").innerHTML = heightText.toLocaleLowerCase()

function playCredits(title = "none", board = false){
    let creditsMusic = new Audio("audio/ExecutiveOffice.mp3", 15)
    let creditsText = document.querySelector(".creditsText")
    
    creditsMusic.volume = 0.5
    creditsMusic.play()

    document.querySelector(".credits").style.display = "block"

    let creditslife = setInterval(function(){
        creditsScroll = creditsText.getBoundingClientRect().height*(creditsMusic.currentTime / creditsMusic.duration)
        creditsText.style.marginTop = "-" + Math.round(creditsScroll) + "px"

        if (key.z || key.x){
            held.z = key.z
            held.z = key.x
            creditsMusic.playbackRate *= 1.01
            if (creditsMusic.playbackRate >= 8){
                creditsMusic.playbackRate = 8
            }
        } else {
            // frame rate of the credits drops if you don't have this?
            if (creditsMusic.playbackRate = 1){
                creditsMusic.playbackRate = 0.999
            } else {
                creditsMusic.playbackRate = 1
            }
            
        }

        if ((creditsMusic.currentTime / creditsMusic.duration) >= 1){
            clearInterval(creditslife)

            console.log(board)
            if (board){
                renderLB()
            }

            document.querySelector(".credits").style.display = "none"
            document.querySelector(".title").style.display = title
        }
    }, 0)
}