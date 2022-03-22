const shoeObject = {
    "Acopa": {
        "model": ["Aztec", "Chameleon", "Enzo", "Fly", "Gama", "JB", "Legend", "Merlin", "Shot", "Spectre", "Other"]
    },
    "Black Diamond": {
        "model": ["Aspect", "Focus", "Method", "Momentum", "Momentum Lace", "Shadow", "Shadow LV", "Zone", "Zone LV", "Other"]
    },
    "Boreal": {
        "model": ["Ace", "Alpha", "Ballet", "Beta", "Beta Eco", "Crux", "Crux Lace", "Diabola", "Diabolo", "Dharma", "Joker", "Joker Lace", "Lynx", "Mutant", "Ninja", "Satori", "Silex", "Silex Lace", "Synergy", "Other"]
    }, 
    "Butora": {
        "model": ["Acro", "Acro Comp", "Advance", "Altura", "Brava", "Brava Knit", "Endeavor", "Gomi", "Libra", "Mantra", "Narsha", "Other"]
    },
    "Climb X": {
        "model": ["Apex", "Crush", "Crush NLV", "E-Motion", "Icon", "Icon X Rental", "Rave", "Rave NLV", "RaveX", "Rock It", "Rock It NLV", "Red Point", "Red Point NLV", "Rock Star", "X-Escape", "Other"]
    },
    "Cypher": {
        "model": ["Code", "Codex Vibram", "Modulo", "Phelix", "Prefix", "Rubix", "Sentinel", "Other"]
    },
    "Evolv": {
        "model": ["Ashima X Brain Dead Zenist", "Defy", "Defy Lace", "Docon", "Eldo Z", "Elektra", "Elektra Lace", "Geshido", "Geshido Lace", "Kira", "Kronos", "Oracle", "Phantom", "Rave", "Shakra", "Shamen", "The General", "Titan", "Zenist", "Other"]
    },
    "Five Ten": {
        "model": ["Aleon", "Crawe", "Hiangle", "Hiangle Pro Competition", "Hiangle Pro Tokyo", "Kirigami", "NIAD Lace", "NIAD Moccasym", "NIAD VCS", "Other"]
    },
    "La Sportiva": {
        "model": ["Aragon", "Cobra", "Cobra Eco", "Finale", "Futura", "Genius", "Katana Lace", "Kubo", "Mantra", "Maverink", "Miura", "Miura VS", "Mythos", "Mythos Eco", "Otaki", "Oxygym", "Skwama", "Solution", "Solution Comp", "Tarantula", "Tarantulace", "TC Pro", "Testarossa", "Theory", "Zenit", "Other"]
    },
    "Lowa": {
        "model": ["Rocket", "Rocket Lace", "Rocket Slip-On", "Falco Lace", "Falco VCR", "Parrot VCR", "Sparrow WS", "X-Boulder", "Other"]
    },
    "Mad Rock": {
        "model": ["Black Drone HV", "Black Drone LV", "Drone HV", "Drone LV", "Mad Monkey 2.0", "Pheonix", "RedLine Strap", "Remora HV", "Remora LV", "Remora Tokyo Edition", "Rover", "Shark 2.0", "Other"]
    },
    "Millet": {
        "model": ["Easy Up", "Siurana EVO"]
    },
    "Ocun": {
        "model": ["Built", "Crest LU", "Crest QC", "Diamond", "Havoc", "Jett Crack", "Jett LU", "Jett QC", "Nitro", "Oxi S", "Ozone", "Ozone HV", "Pearl", "Rental", "Strike LU", "Strike QC", "Other"]
    },
    "Red Chili": {
        "model": ["Charger", "Charger LV", "Circuit Lace", "Circuit VCR", "Crocy", "Fusion", "Fusion LV", "Magnet", "Mystix", "Puzzle", "Sausalito", "Sensor", "Session 4", "Session Air", "Spirit", "Spirit LV", "Ventic Air", "Ventic Air Lace", "Voltage 2", "Voltage Lace", "Voltage LV", "Other"]
    },
    "Rock Empire": {
        "model": ["Kanrei", "Shogun", "Other"]
    },
    "Scarpa": {
        "model": ["Booster", "Boostic", "Chimera", "Drago", "Drago LV", "Force V", "Furia Air", "Furia S", "Helix", "Instinct", "Instinct S", "Instinct VS", "Instinct VSR", "Maestro MID ECO", "Mago", "Origin", "Quantic", "Quantic SF", "Reflex V", "Vapor", "Vapor V", "Veloce", "Other"]
    },
    "Simond": {
        "model": ["Edge", "Edge Laces V2", "Vertika", "Rock+", "Other"]
    },
    "So iLL": {
        "model": ["Free Range Pro", "Main Street", "Main Street LV", "Momoa Pro", "Momoa Pro LV", "New Zero Pro", "One Pro", "Street LV", "So Ill X Topo", "The Street", "The Onset", "Other"]
    },
    "Tenaya": {
        "model": ["Aerial Plus Mastia", "Aerial Plus Mundaka", "Aerial Plus Iati", "Aerial Plus Tarifa", "Aerial Plus Oasi", "Aerial Plus LV", "Balance Pro RA", "Balance Pro Masai", "Balance Pro Inti", "Balance Pro Tatanka", "Balance Pro Aqua+", "Step Up Tanta", "Other"]
    },
    "Unparallel": {
        "model": ["Engage", "Engage Lace Up", "Engage VCS", "Engage VCS LV", "Flagship", "Flagship Women LV", "Hold Up Slipper", "Hold Up VCS", "Leopard II", "Lyra", "New TRO Lace", "New TRO VCS", "Regulus", "Regulus LV", "Sirius Lace", "Sirius Lace LV", "TN Pro", "TN Pro LV", "Up Grade", "Up Grade Mocc", "Up Mocc", "Up Lace", "Up Lace LV", "Up Rise Pro", "Up Rise VCS", "Up Rise VCS LV", "Up Rise Zero VCS LV", "Vega", "VIM"]
    },
    "Other": {
        "model": ["Other"]
    }
}

const sizeObject = {
    "US Sizes": {
        "sizes": [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13]
    }, 
    "European Sizes": {
        "sizes": [35, 35.5, 36, 37, 37.5, 38, 38.5, 39, 40, 41, 42, 43, 44, 45, 46.5, 48.5]
    }
}

window.onload = function() {
    let makerSel = document.getElementById("maker");
    let modelSel = document.getElementById("model");
    let sizeSel = document.getElementById("size");

    for (let x in shoeObject) {
        makerSel.options[makerSel.options.length] = new Option(x,x);
    }


    let y = shoeObject.Acopa.model[1];
    
    console.log(y);

    makerSel.onchange = function() {
        modelSel.length = 1; 
        const y = shoeObject[makerSel.value].model;
        console.log(y);
        for (let i = 0; i < y.length; i++) {
            modelSel.options[modelSel.options.length] = new Option(y[i],y[i]);
        }
    }
}