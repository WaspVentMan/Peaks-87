let credits = [
    "BY JACOB A. G. TAYLOR",
    "",
    "border artwork",
    "lady vah ruta",
    "",
    "NEW HOLD DESIGNS",
    "NORFOLKRAIL",
    "",
    "INSPIRED BY",
    "PEAKS OF YORE AND UFO 50",
    "",
    "PEAKS OF YORE",
    "ANDERS GRUBE JENSEN",
    "",
    "UFO 50",
    "DEREK YU",
    "JON PERRY",
    "EIRIK SUHRKE",
    "PAUL HUBANS",
    "TYRIQ PLUMMER",
    "OJIRO FUMOTO",
    "",
    "MUSIC",
    "EIRIK SUHRKE",
    "MOONCAT - FOREST A",
    "MIASMA TOWER - EXECUTIVE OFFICE",
    "",
    "FONT",
    "SFONTTALLBG, UFO 50",
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
    "2.0 PLAYTESTERS",
    "lady vah ruta",
    "ldd565",
    "snowyowl",
    "averageicewallenjoyer",
    "",
    "SPECIAL THANKS",
    "",
    "ASTRALSPIFF",
    "FOR GETTING ME INTO PEAKS",
    "",
    "SCOTT CAWTHON",
    "FOR CREATING FNAF 4 CAUSING",
    "MARKIPLIER TO RUIN THE NUMBER 87",
    "",
    "MARKIPLIER",
    "FOR RUINING THE NUMBER 87",
    "",
    "TRACY",
    "FOR BIRTHING ME",
    "",
    "PAUL",
    "FOR FUCKING MY MUM",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "THANK YOU FOR PLAYING",
    "<3",
    ""
]

document.querySelector(".creditsText").innerHTML += `<div style="height: 512px;"></div><div style="background-image: url(img/logo.png); width: 256px; height: 128px; margin: auto"></div>` + renderStrings(credits)

/**
 * Plays the credits onscreen
 * @param {boolean} title Show the title screen after ending?
 * @param {boolean} board Show the leaderboard after ending?
 */
function playCredits(title = "none", board = false){
    let startTime = Date.now()
    let creditsMusic = new Audio("audio/ExecutiveOffice.mp3", 15)
    let creditsText = document.querySelector(".creditsText")
    
    creditsMusic.volume = 0.5
    creditsMusic.play()

    document.querySelector(".credits").style.display = "block"

    let creditslife = setInterval(function(){
        let creditsScroll = 0

        if (!mobile){
            creditsScroll = (creditsText.getBoundingClientRect().height/settings.zoom)*(creditsMusic.currentTime / creditsMusic.duration)
        } else {
            creditsScroll = (creditsText.getBoundingClientRect().height/settings.zoom)*(((Date.now()-startTime)/1000) / 63.063764)
        }

        creditsText.style.marginTop = "-" + Math.round(creditsScroll) + "px"

        // frame rate of the credits drops if you don't have this?
        if (creditsMusic.playbackRate = 1){
            creditsMusic.playbackRate = 0.99999
        } else {
            creditsMusic.playbackRate = 1
        }

        if ((creditsMusic.currentTime / creditsMusic.duration) >= 1 && !mobile || (((Date.now()-startTime)/1000) / 63.063764) >= 1 && mobile){
            clearInterval(creditslife)

            if (board){
                renderLB()
                document.querySelector(".boards").style.display = "block"
            }

            document.querySelector(".credits").style.display = "none"
            document.querySelector(".title").style.display = title
        }
    }, 10)
}