let towers = {
    starter: {
        names: [
            "Scout",
            "Sniper",
            "Soldier",
            "Paintballer",
            "Demoman",
            "Hunter",
            "Golden Scout",
            "Golden Solder"
        ],
        ticked: [1, 1, 1, 1, 1, 1, 1, 1,],
    },
    intermediate: {
        names: [
            "Crook Boss",
            "Militant",
            "Medic",
            "Freezer",
            "Rocketeer",
            "Shotgunner",
            "Military Base",
            "Farm",
            "Trapper",
            "Pyromancer",
            "Ace Pilot",
            "Golden Crook Boss",
            "Golden Pyromancer"
        ],
        ticked: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    advanced: {
        names: [
            "Mortar",
            "Turret",
            "Pursuit",
            "Electroshocker",
            "Commander",
            "Warden",
            "Cowboy",
            "DJ",
            "Minigunner",
            "Ranger",
            "Golden Cowboy",
            "Golden Minigunner"
        ],
        ticked: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    },
    hardcore: {
        names: [
            "Accelerator",
            "Engineer"
        ],
        ticked: [1, 1],
    },
    exclusive: {
        names: [
            "Cryomancer",
            "Executioner",
            "Archer",
            "Sledger",
            "Gladiator",
            "Toxic Gunner",
            "Frost Blaster",
            "Elf Camp",
            "Jester",
            "Necromancer",
            "Commando",
            "Swarmer"
        ],
        ticked: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    },
};

let sections = ["starter", "intermediate", "advanced", "hardcore", "exclusive"];

for(i = 0; i < sections.length; i++) {
    let options = document.getElementById(sections[i] + "Options");

    for(ii = 0; ii < towers[sections[i]].names.length; ii++) {
        let option = document.createElement("div");
        option.classList.add("option");

        let optionText = document.createElement("div");
        optionText.classList.add("optionText");
        optionText.innerHTML = towers[sections[i]].names[ii];

        let optionCheck = document.createElement("input");
        optionCheck.classList.add("optionCheck");
        optionCheck.id = sections[i] + (towers[sections[i]].names[ii].replace(/\s/g, ""));
        optionCheck.type = "checkbox";
        towers[sections[i]].ticked[ii] == 1 ? optionCheck.checked = true : optionCheck.checked = false;

        option.append(optionText);
        option.append(optionCheck);

        options.append(option);
    }
}

document.querySelector(".generate").onclick = function() {
    let selected = [];
    let chosen = [];

    for(i = 0; i < sections.length; i++) {
        for(ii = 0; ii < towers[sections[i]].names.length; ii++) {
            if(document.getElementById(sections[i] + (towers[sections[i]].names[ii].replace(/\s/g, ""))).checked == true) {
                selected.push(towers[sections[i]].names[ii]);
            }
        }
    }

    for(i = 0; i < 5; i++) {
        let randTower = selected[Math.floor(Math.random() * selected.length)];
        chosen.push(randTower);
        selected.splice(selected.indexOf(randTower), 1);
    }

    alert(chosen.join("\n"));
}