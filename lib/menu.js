function buildSettings(){
    let settingsBuild = ["", "", "", "settings", ""]
    for (let x = 0; x < settings.menu.options.length; x++){

        if (settings.menu.options[x].var == "zoom" && window.location != window.parent.location){
            settingsBuild.push("")
            settingsBuild.push("fullscreen mode")
        } else if (!settings.menu.options[x].small){
            settingsBuild.push("")
            if (settings.menu.selection == x && !settings.menu.lockin && !settings.menu.options[x].title){
                settingsBuild.push("> " + settings.menu.options[x].name + " <")
            } else {
                settingsBuild.push(settings.menu.options[x].name)
            }
        }

        if (x == 0){continue}

        let value = settings.menu.options[x].value.replace("$", settings[settings.menu.options[x].var])

        switch (settings.menu.options[x].var){
            case "punishment":
                if (settings[settings.menu.options[x].var] == 0.1){
                    value = "normal"
                }
                break

            case "grayscale":
                if (settings[settings.menu.options[x].var]){
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
        }

        if (settings.menu.options[x].var == "zoom" && window.location != window.parent.location){
            value = "enter fullscreen"
        }
        
        if (settings.menu.selection == x && (settings.menu.lockin || (settings.menu.options[x].var == "zoom" && window.location != window.parent.location))){
            settingsBuild.push("< " + value + " >")
        } else if (settings.menu.selection == x && (settings.menu.options[x].small || settings.menu.options[x].title)) {
            settingsBuild.push("> " + value + " <")
        } else {
            settingsBuild.push(value)
        }
    }

    settingsBuild.push("")
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