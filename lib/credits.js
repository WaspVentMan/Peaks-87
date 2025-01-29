let credits = [
    "BY_JACOB_A,_G,_TAYLOR",
    "",
    "NEW_HOLD_DESIGNS",
    "NORFOLKRAIL",
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
    "ITS_JANKY_ON_PHONE",
    "",
    "SORRY_£^",
    "",
    ""
]

document.querySelector(".creditsText").innerHTML += `<div style="height: 512px;"></div><div style="background-image: url(img/logo.png); width: 256px; height: 64px; margin: auto"></div>` + renderStrings(credits)

/**
 * Plays the credits onscreen
 * @param {boolean} title Show the title screen after ending?
 * @param {boolean} board Show the leaderboard after ending?
 */
function playCredits(title = "none", board = false){
    let tick = Date.now()
    let startTime = Date.now()
    let playbackRate = 1
    let creditsMusic = new Audio("audio/ExecutiveOffice.mp3", 15)
    let creditsText = document.querySelector(".creditsText")
    
    creditsMusic.volume = 0.5
    creditsMusic.play()

    document.querySelector(".credits").style.display = "block"

    let creditslife = setInterval(function(){
        let d = (Date.now()-tick)/1000
        let creditsScroll = 0

        if (!mobile){
            creditsScroll = creditsText.getBoundingClientRect().height*(creditsMusic.currentTime / creditsMusic.duration)
        } else {
            creditsScroll = creditsText.getBoundingClientRect().height*(((Date.now()-startTime)/1000) / 63.063764)
        }

        creditsText.style.marginTop = "-" + Math.round(creditsScroll) + "px"

        if (key.z || key.x){
            held.z = key.z
            held.x = key.x
            playbackRate *= 1.01
            if (playbackRate >= 8){
                playbackRate = 8
            }
            startTime -= playbackRate*d
        } else {
            // frame rate of the credits drops if you don't have this?
            if (playbackRate = 1){
                playbackRate = 0.99999
            } else {
                playbackRate = 1
            }
        }

        creditsMusic.playbackRate = playbackRate

        if ((creditsMusic.currentTime / creditsMusic.duration) >= 1 || (((Date.now()-startTime)/1000) / 63.063764) >= 1 ){
            clearInterval(creditslife)

            if (board){
                renderLB()
                document.querySelector(".boards").style.display = "block"
            }

            document.querySelector(".credits").style.display = "none"
            document.querySelector(".title").style.display = title
        }
    }, 0)
}