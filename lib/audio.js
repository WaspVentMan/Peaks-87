let sounddict = {
    "axecrunch1": "audio/axecrunch1.mp3",
    "axecrunch2": "audio/axecrunch2.mp3",
    "axecrunch3": "audio/axecrunch3.mp3",
    "axehit1": "audio/axehit1.mp3",
    "axehit2": "audio/axehit2.mp3",
    "axehit3": "audio/axehit3.mp3",
    "cramponfail1": "audio/cramponfail1.mp3",
    "cramponfail2": "audio/cramponfail2.mp3",
    "cramponfail3": "audio/cramponfail3.mp3",
    "fall1": "audio/fall1.mp3",
    "fall2": "audio/fall2.mp3",
    "fall3": "audio/fall3.mp3",
    "fall4": "audio/fall4.mp3",
    "grab1": "audio/grab1.mp3",
    "grab2": "audio/grab2.mp3",
    "grab3": "audio/grab3.mp3",
    "jump1": "audio/jump1.mp3",
    "jump2": "audio/jump2.mp3",
    "jump3": "audio/jump3.mp3",
    "jump4": "audio/jump4.mp3",
    "ForestA": "audio/ForestA.mp3",
    "ExecutiveOffice": "audio/ExecutiveOffice.mp3",
    "wind": "audio/highwind.mp3",
    "87": "audio/87.mp3",
    "click": "audio/click.mp3"
}

let sounds = []
function sfx(sound, vol = 100){
    let a = new Audio(sounddict[sound])
    a.play()
    try {
        a.volume = vol/100
    } catch {
        a.volume = vol
    }
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