function buildSettings(){
    let settingsBuild = ["", "", ""]

    if (settings.menu.lockin){
        settingsBuild.push(settings.menu.titles[settings.menu.selection[0]] + " settings")
    } else {
        settingsBuild.push("< " + settings.menu.titles[settings.menu.selection[0]] + " settings >")
    }

    for (let x = 0; x < settings.menu.options[settings.menu.selection[0]].length; x++){

        if (settings.menu.options[settings.menu.selection[0]][x].var == "zoom" && window.location != window.parent.location){
            settingsBuild.push("")
            settingsBuild.push("fullscreen mode")
        } else if (!settings.menu.options[settings.menu.selection[0]][x].small){
            settingsBuild.push("")
            if (settings.menu.selection[1] == x && !settings.menu.lockin && !settings.menu.options[settings.menu.selection[0]][x].title){
                settingsBuild.push("> " + settings.menu.options[settings.menu.selection[0]][x].name + " <")
            } else {
                settingsBuild.push(settings.menu.options[settings.menu.selection[0]][x].name)
            }
        }

        let value = settings.menu.options[settings.menu.selection[0]][x].value.replace("$", settings[settings.menu.options[settings.menu.selection[0]][x].var])

        if (settings.menu.options[settings.menu.selection[0]][x].handler != undefined){
            switch (settings.menu.options[settings.menu.selection[0]][x].handler){
                case "bool":
                    if (settings.menu.options[settings.menu.selection[0]][x].on != undefined && settings[settings.menu.options[settings.menu.selection[0]][x].var]){
                        value = settings.menu.options[settings.menu.selection[0]][x].on
                    }
                    break
            }
        } else {
            switch (settings.menu.options[settings.menu.selection[0]][x].var){
                case "punishment":
                    if (settings[settings.menu.options[settings.menu.selection[0]][x].var] == 0.1){
                        value = "normal"
                    }
                    break

                case "grayscale":
                    if (settings[settings.menu.options[settings.menu.selection[0]][x].var]){
                        value = "enabled"
                    } else {
                        value = "disabled"
                    }
                    break
                
                case "ng":
                    if (offline){
                        value = "log in to newgrounds"
                    } else {
                        value = "logged in as: " + NGIO.user.name
                    }
                    break
                
                case "skin":
                    if (settings.skin[0] == "L"){
                        value = skins[settings.skin[1]][1]
                    } else if (settings.skin[0] == "U"){
                        value = "url skin"
                    }
                    break
            }
        }

        if (settings.menu.options[settings.menu.selection[0]][x].var == "zoom" && window.location != window.parent.location){
            value = "enter fullscreen"
        }
        
        if (settings.menu.selection[1] == x && (settings.menu.lockin || (settings.menu.options[settings.menu.selection[0]][x].var == "zoom" && window.location != window.parent.location))){
            settingsBuild.push("< " + value + " >")
        } else if (settings.menu.selection[1] == x && (settings.menu.options[settings.menu.selection[0]][x].small || settings.menu.options[settings.menu.selection[0]][x].title)) {
            settingsBuild.push("> " + value + " <")
        } else {
            settingsBuild.push(value)
        }
    }

    settingsBuild.push("")
    settingsBuild.push("")
    settingsBuild.push("confirm: z")
    settingsBuild.push("select: arrows")
    settingsBuild.push("save and return: x")

    document.querySelector(".settings").innerHTML = renderStrings(settingsBuild)
    generateHolds(true)
}

function buildTitle(){
    let titleBuild = []
    for (let x = 0; x < title.options.length; x++){
        titleBuild.push("")
        if (title.selection == x){
            titleBuild.push("> " + title.options[x] + " <")
        } else {
            titleBuild.push(title.options[x])
        }
    }

    titleBuild.push("")
    titleBuild.push("")
    titleBuild.push("")
    titleBuild.push("")
    titleBuild.push("confirm: z")
    titleBuild.push("select: arrows")

    document.querySelector(".select").innerHTML = renderStrings(titleBuild)
    generateHolds(true)
}

function buildDeath(){
    let deathBuild = []
    for (let x = 0; x < deathMenu.options.length; x++){
        if (deathMenu.selection == x){
            deathBuild.push("> " + deathMenu.options[x] + " <")
        } else {
            deathBuild.push(deathMenu.options[x])
        }
    }

    deathBuild.push("")
    deathBuild.push("confirm: z")
    deathBuild.push("select: arrows")

    document.querySelector(".boardMenu").innerHTML = renderStrings(deathBuild)
    generateHolds(true)
}