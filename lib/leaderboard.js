/**
 * Renders the leaderboard, simple as
 */
function renderLB(){
    let boardRender = []

    // LOCAL BOARD
    if (leaderboard == "z"){
        boardRender.push("")
        if (!best){
            boardRender.push("game")
            boardRender.push("over")
        } else {
            boardRender.push("GAME OVER")
            boardRender.push("NEW BEST")
        }
        boardRender.push("")
        boardRender.push("FOREVISIR CLAIMS")
        boardRender.push("ANOTHER VICTIM")
        boardRender.push("")

        if (settings.punishment == 0.1){boardRender.push("NORMAL")}
        if (settings.punishment == 1)  {boardRender.push("PUNISHMENT LV.1")}
        if (settings.punishment == 10) {boardRender.push("PUNISHMENT LV.10")}
        if (settings.punishment == 100){boardRender.push("PUNISHMENT LV.100")}
        
        boardRender.push("LOCAL SCORES")

        for (let x = 0; x < 9; x++){
            boardRender.push(" " + (x+1) + "." + scores["p" + Math.floor(settings.punishment)][x][0] + renderDots(32-(" 0,AAA" + scores["p" + Math.floor(settings.punishment)][x][1] + "m").length).replaceAll(",", "-") + scores["p" + Math.floor(settings.punishment)][x][1] + "m")
        }

        boardRender.push("10." + scores["p" + Math.floor(settings.punishment)][9][0] + renderDots(32-(" 0,AAA" + scores["p" + Math.floor(settings.punishment)][9][1] + "m").length).replaceAll(",", "-") + scores["p" + Math.floor(settings.punishment)][9][1] + "m")
    } else if (leaderboard == "x"){
        boardRender.push("")
        if (!best){
            boardRender.push("game")
            boardRender.push("over")
        } else {
            boardRender.push("GAME OVER")
            boardRender.push("NEW BEST")
        }
        boardRender.push("")
        boardRender.push("FOREVISIR CLAIMS")
        boardRender.push("ANOTHER VICTIM")
        boardRender.push("")

        if (settings.punishment == 0.1){boardRender.push("NORMAL")}
        if (settings.punishment == 1)  {boardRender.push("PUNISHMENT LV.1")}
        if (settings.punishment == 10) {boardRender.push("PUNISHMENT LV.10")}
        if (settings.punishment == 100){boardRender.push("PUNISHMENT LV.100")}
        
        boardRender.push("GLOBAL SCORES")
        boardRender.push("")
        boardRender.push("FETCHING NEWGROUNDS")
        boardRender.push("LEADERBOARD")
        boardRender.push("")
        boardRender.push("PLEASE HOLD...")

        for (let x = 0; x < 5; x++){boardRender.push("")}

        document.querySelector(".boardText").innerHTML = renderStrings(boardRender)

        if (!offline){
            let options = {
                "period": NGIO.PERIOD_ALL_TIME,
                "limit": 10
            }

            let deathboard = 0

            if (settings.punishment == 0.1){deathboard = 14449}
            if (settings.punishment == 1){deathboard = 14452}
            if (settings.punishment == 10){deathboard = 14451}
            if (settings.punishment == 100){deathboard = 14453}

            boardRender = []
    
            NGIO.getScores(deathboard, options, function(onlinescores, board, options){
                scores["p" + Math.floor(settings.punishment) + "Cache"] = onlinescores
                boardRender.push("")
                if (!best){
                    boardRender.push("game")
                    boardRender.push("over")
                } else {
                    boardRender.push("GAME OVER")
                    boardRender.push("NEW BEST")
                }
                boardRender.push("")
                boardRender.push("FOREVISIR CLAIMS")
                boardRender.push("ANOTHER VICTIM")
                boardRender.push("")

                if (settings.punishment == 0.1){boardRender.push("NORMAL")}
                if (settings.punishment == 1)  {boardRender.push("PUNISHMENT LV.1")}
                if (settings.punishment == 10) {boardRender.push("PUNISHMENT LV.10")}
                if (settings.punishment == 100){boardRender.push("PUNISHMENT LV.100")}
                
                boardRender.push("GLOBAL SCORES")

                for (let x = 0; x < onlinescores.length; x++){
                    if (x == 9){break}
                    if (onlinescores[x] == undefined){
                        boardRender.push("")
                    } else {
                        boardRender.push(" " + (x+1) + "." + onlinescores[x].user.name + renderDots(32-(" 0," + onlinescores[x].user.name + (onlinescores[x].value/100) + "m").length).replaceAll(",", "-") + (onlinescores[x].value/100) + "m")
                    }
                }

                if (onlinescores[9] != undefined){
                    boardRender.push("10." + onlinescores[9].user.name + renderDots(32-(" 0," + onlinescores[9].user.name + (onlinescores[9].value/100) + "m").length).replaceAll(",", "-") + (onlinescores[9].value/100) + "m")
                } else {
                    boardRender.push("")
                }

                document.querySelector(".boardText").innerHTML = renderStrings(boardRender)
            })
            return
        } else {
            boardRender = []
    
            boardRender.push("")
            if (!best){
                boardRender.push("game")
                boardRender.push("over")
            } else {
                boardRender.push("GAME OVER")
                boardRender.push("NEW BEST")
            }
            boardRender.push("")
            boardRender.push("FOREVISIR CLAIMS")
            boardRender.push("ANOTHER VICTIM")
            boardRender.push("")

            if (settings.punishment == 0.1){boardRender.push("NORMAL")}
            if (settings.punishment == 1)  {boardRender.push("PUNISHMENT LV.1")}
            if (settings.punishment == 10) {boardRender.push("PUNISHMENT LV.10")}
            if (settings.punishment == 100){boardRender.push("PUNISHMENT LV.100")}
            
            boardRender.push("GLOBAL SCORES")
            boardRender.push("")
            boardRender.push("LOG IN TO NEWGROUNDS")
            boardRender.push("FOR GLOBAL SCORES")

            for (let x = 0; x < 7; x++){boardRender.push("")}
        }
    }

    document.querySelector(".boardText").innerHTML = renderStrings(boardRender)
}