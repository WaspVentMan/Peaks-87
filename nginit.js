let offline = true

// Set up the options for NGIO.
var options = {
    version: "2.0.0",
    preloadScoreBoards: true,
    preloadMedals: true,
    preloadSaveSlots: true
};

NGIO.init("59514:7LSeS0Bb", "nLp7V+3Uk6kcOsAzvgpOqQ==", options);

let ngLoop = setInterval(function(){
    document.querySelector(".con").innerHTML = renderString(["ONLINE", "OFFLINE"][offline+0])
    NGIO.getConnectionStatus(function(status) {
        
        switch (status) {

            // we have version and license info
            case NGIO.STATUS_LOCAL_VERSION_CHECKED:

                if (NGIO.isDeprecated) {
                    document.querySelector(".ver").innerHTML = renderString("v" + options.version + " old")
                } else {
                    document.querySelector(".ver").innerHTML = renderString("v" + options.version)
                }

                if (!NGIO.legalHost) {
                    document.body.innerHTML = "<h1>THIS GAME IS BEING HOSTED ILLEGALLY, GO TO <a href=\"https://waspventman.co.uk\">WASPVENTMAN.CO.UK</a> OR <a href=\"https://waspventman.newgrounds.com/\">WASPVENTMAN.NEWGROUNDS.COM</a></h1>"
                }

                break

            // user needs to log in
            case NGIO.STATUS_LOGIN_REQUIRED: break

            // We are waiting for the user to log in
            case NGIO.STATUS_WAITING_FOR_USER: break

            // user needs to log in
            case NGIO.STATUS_READY:
                offline = false
                buildSettings()
                break
        }

    })
}, 100)

function unlockMedal(medal, condition = true){
    if (!offline){
        if (!NGIO.getMedal(medal).unlocked && condition){
            NGIO.unlockMedal(medal, onMedalUnlocked)
        }
    }
}

function onMedalUnlocked(medal){}