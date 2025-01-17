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
            boardRender.push("GAME_OVER")
            boardRender.push("NEW_BEST")
        }
        boardRender.push("")
        boardRender.push("FOREVISIR_CLAIMS")
        boardRender.push("ANOTHER_VICTIM")
        boardRender.push("")

        if (punishment == 0.1){boardRender.push("___NORMAL_-&")}
        if (punishment == 1)  {boardRender.push("^-_PUNISHMENT_LV,1_-&")}
        if (punishment == 10) {boardRender.push("^-_PUNISHMENT_LV,10_-&")}
        if (punishment == 100){boardRender.push("^-_PUNISHMENT_LV,100___")}
        
        boardRender.push("LOCAL_SCORES")

        for (let x = 0; x < 9; x++){
            boardRender.push("_" + (x+1) + "," + scores[x][0] + renderDots(32-("_0,AAA" + scores[x][1] + "m").length).replaceAll(",", "-") + scores[x][1] + "m")
        }

        boardRender.push("10," + scores[9][0] + renderDots(32-("_0,AAA" + scores[9][1] + "m").length).replaceAll(",", "-") + scores[9][1] + "m")
        boardRender.push("")
        boardRender.push("z_for_local___x_for_global")
        boardRender.push("")
        boardRender.push("z_and_x_to_restart")

        document.querySelector(".boards").innerHTML = renderStrings(boardRender)
    } else if (leaderboard == "x"){
        boardRender.push("")
        if (!best){
            boardRender.push("game")
            boardRender.push("over")
        } else {
            boardRender.push("GAME_OVER")
            boardRender.push("NEW_BEST")
        }
        boardRender.push("")
        boardRender.push("FOREVISIR_CLAIMS")
        boardRender.push("ANOTHER_VICTIM")
        boardRender.push("")

        if (punishment == 0.1){boardRender.push("___NORMAL_-&")}
        if (punishment == 1)  {boardRender.push("^-_PUNISHMENT_LV,1_-&")}
        if (punishment == 10) {boardRender.push("^-_PUNISHMENT_LV,10_-&")}
        if (punishment == 100){boardRender.push("^-_PUNISHMENT_LV,100___")}
        
        boardRender.push("GLOBAL_SCORES")
        boardRender.push("")
        boardRender.push("FETCHING_NEWGROUNDS")
        boardRender.push("LEADERBOARD")
        boardRender.push("")
        boardRender.push("PLEASE_HOLD,,,")

        for (let x = 0; x < 6; x++){boardRender.push("")}

        boardRender.push("z_for_local___x_for_global")
        boardRender.push("")
        boardRender.push("z_and_x_to_restart")

        document.querySelector(".boards").innerHTML = renderStrings(boardRender)

        if (!offline){
            let options = {
                "period": NGIO.PERIOD_ALL_TIME,
                "limit": 10
            }

            let deathboard = 0

            if (punishment == 0.1){deathboard = 14449}
            if (punishment == 1){deathboard = 14452}
            if (punishment == 10){deathboard = 14451}
            if (punishment == 100){deathboard = 14453}

            boardRender = []
    
            NGIO.getScores(deathboard, options, function(scores, board, options){
                boardRender.push("")
                if (!best){
                    boardRender.push("game")
                    boardRender.push("over")
                } else {
                    boardRender.push("GAME_OVER")
                    boardRender.push("NEW_BEST")
                }
                boardRender.push("")
                boardRender.push("FOREVISIR_CLAIMS")
                boardRender.push("ANOTHER_VICTIM")
                boardRender.push("")

                if (punishment == 0.1){boardRender.push("___NORMAL_-&")}
                if (punishment == 1)  {boardRender.push("^-_PUNISHMENT_LV,1_-&")}
                if (punishment == 10) {boardRender.push("^-_PUNISHMENT_LV,10_-&")}
                if (punishment == 100){boardRender.push("^-_PUNISHMENT_LV,100___")}
                
                boardRender.push("GLOBAL_SCORES")

                for (let x = 0; x < scores.length; x++){
                    if (x == 9){break}
                    if (scores[x] == undefined){
                        boardRender.push("")
                    } else {
                        boardRender.push("_" + (x+1) + "," + scores[x].user.name + renderDots(32-("_0," + scores[x].user.name + (scores[x].value/100) + "m").length).replaceAll(",", "-") + (scores[x].value/100) + "m")
                    }
                }

                if (scores[9] != undefined){
                    boardRender.push("10," + scores[9].user.name + renderDots(32-("_0," + scores[9].user.name + (scores[9].value/100) + "m").length).replaceAll(",", "-") + (scores[9].value/100) + "m")
                } else {
                    boardRender.push("")
                }
                boardRender.push("")
                boardRender.push("z_for_local___x_for_global")
                boardRender.push("")
                boardRender.push("z_and_x_to_restart")

                document.querySelector(".boards").innerHTML = renderStrings(boardRender)
            })
        } else {
            boardRender = []
    
            boardRender.push("")
            if (!best){
                boardRender.push("game")
                boardRender.push("over")
            } else {
                boardRender.push("GAME_OVER")
                boardRender.push("NEW_BEST")
            }
            boardRender.push("")
            boardRender.push("FOREVISIR_CLAIMS")
            boardRender.push("ANOTHER_VICTIM")
            boardRender.push("")

            if (punishment == 0.1){boardRender.push("___NORMAL_-&")}
            if (punishment == 1)  {boardRender.push("^-_PUNISHMENT_LV,1_-&")}
            if (punishment == 10) {boardRender.push("^-_PUNISHMENT_LV,10_-&")}
            if (punishment == 100){boardRender.push("^-_PUNISHMENT_LV,100___")}
            
            boardRender.push("GLOBAL_SCORES")
            boardRender.push("")
            boardRender.push("LOG_IN_TO_NEWGROUNDS")
            boardRender.push("FOR_GLOBAL_SCORES")

            for (let x = 0; x < 8; x++){boardRender.push("")}

            boardRender.push("z_for_local___x_for_global")
            boardRender.push("")
            boardRender.push("z_and_x_to_restart")

            document.querySelector(".boards").innerHTML = renderStrings(boardRender)
        }
    }
}