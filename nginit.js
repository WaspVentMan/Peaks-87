let offline = true

// Set up the options for NGIO.
var options = {
    version: "2.1.0",
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
                    document.querySelector(".ver").innerHTML = renderString("v" + options.version + " old", "default", "right")
                } else {
                    document.querySelector(".ver").innerHTML = renderString("v" + options.version, "default", "right")
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

                NGIO.getScores(14449, {"period": NGIO.PERIOD_ALL_TIME}, function(onlinescores, board, options){scores["p0Cache"] = onlinescores})
                NGIO.getScores(14452, {"period": NGIO.PERIOD_ALL_TIME}, function(onlinescores, board, options){scores["p1Cache"] = onlinescores})
                NGIO.getScores(14451, {"period": NGIO.PERIOD_ALL_TIME}, function(onlinescores, board, options){scores["p10Cache"] = onlinescores})
                NGIO.getScores(14453, {"period": NGIO.PERIOD_ALL_TIME}, function(onlinescores, board, options){scores["p100Cache"] = onlinescores})
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