//Support weapon : 7-21
//Backpacks : 1-6,11,13,16,21 
const dataset = JSON.parse(`
[
    {
        "id": 1,
        "category": "Supply: Backpacks",
        "name": "LIFT-850 Jump Pack",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Hangar/Jump%20Pack.svg"
    },
    {
        "id": 2,
        "category": "Supply: Backpacks",
        "name": "B-1 Supply Pack",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Engineering%20Bay/Supply%20Pack.svg"
    },
    {
        "id": 3,
        "category": "Supply: Backpacks",
        "name": "AX/LAS-5 'Guard Dog' Rover",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Engineering%20Bay/Guard%20Dog%20Rover.svg"
    },
    {
        "id": 4,
        "category": "Supply: Backpacks",
        "name": "SH-20 Ballistic Shield Backpack",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Engineering%20Bay/Ballistic%20Shield%20Backpack.svg"
    },
    {
        "id": 5,
        "category": "Supply: Backpacks",
        "name": "SH-32 Shield Generator Pack",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Engineering%20Bay/Shield%20Generator%20Pack.svg"
    },
    {
        "id": 6,
        "category": "Supply: Backpacks",
        "name": "AX/AR-23 'Guard Dog'",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Robotics%20Workshop/Guard%20Dog.svg"
    },
    {
        "id": 7,
        "category": "Supply: Support Weapons",
        "name": "MG-43 Machine Gun",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Patriotic%20Administration%20Center/Machine%20Gun.svg"
    },
    {
        "id": 8,
        "category": "Supply: Support Weapons",
        "name": "APW-1 Anti-Materiel Rifle",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Patriotic%20Administration%20Center/Anti-Materiel%20Rifle.svg"
    },
    {
        "id": 9,
        "category": "Supply: Support Weapons",
        "name": "M-105 Stalwart",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Patriotic%20Administration%20Center/Stalwart.svg"
    },
    {
        "id": 10,
        "category": "Supply: Support Weapons",
        "name": "EAT-17 Expendable Anti-tank",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Patriotic%20Administration%20Center/Expendable%20Anti-Tank.svg"
    },
    {
        "id": 11,
        "category": "Supply: Support Weapons",
        "name": "GR-8 Recoilless Rifle",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Patriotic%20Administration%20Center/Recoilless%20Rifle.svg"
    },
    {
        "id": 12,
        "category": "Supply: Support Weapons",
        "name": "FLAM-40 Flamethrower",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Patriotic%20Administration%20Center/Flamethrower.svg"
    },
    {
        "id": 13,
        "category": "Supply: Support Weapons",
        "name": "AC-8 Autocannon",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Patriotic%20Administration%20Center/Autocannon.svg"
    },
    {
        "id": 14,
        "category": "Supply: Support Weapons",
        "name": "MG-206 Heavy Machine Gun",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Patriotic%20Administration%20Center/Heavy%20Machine%20Gun.svg"
    },
    {
        "id": 15,
        "category": "Supply: Support Weapons",
        "name": "RS-422 Railgun",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Patriotic%20Administration%20Center/Railgun.svg"
    },
    {
        "id": 16,
        "category": "Supply: Support Weapons",
        "name": "FAF-14 SPEAR Launcher",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Patriotic%20Administration%20Center/Spear.svg"
    },
    {
        "id": 17,
        "category": "Supply: Support Weapons",
        "name": "GL-21 Grenade Launcher",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Engineering%20Bay/Grenade%20Launcher.svg"
    },
    {
        "id": 18,
        "category": "Supply: Support Weapons",
        "name": "LAS-98 Laser Cannon",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Engineering%20Bay/Laser%20Cannon.svg"
    },
    {
        "id": 19,
        "category": "Supply: Support Weapons",
        "name": "ARC-3 Arc Thrower",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Engineering%20Bay/Arc%20Thrower.svg"
    },
    {
        "id": 20,
        "category": "Supply: Support Weapons",
        "name": "LAS-99 Quasar Cannon",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Engineering%20Bay/Quasar%20Cannon.svg"
    },
    {
        "id": 21,
        "category": "Supply: Support Weapons",
        "name": "RL-77 Airburst Rocket Launcher",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Patriotic%20Administration%20Center/Airburst%20Rocket%20Launcher.svg"
    },
    {
        "id": 22,
        "category": "Supply: Other",
        "name": "EXO-45 Patriot Exosuit",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Robotics%20Workshop/Patriot%20Exosuit.svg"
    },
    {
        "id": 23,
        "category": "Supply: Other",
        "name": "EXO-49 Emancipator Exosuit",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Robotics%20Workshop/Emancipator%20Exosuit.svg"
    },
    {
        "id": 24,
        "category": "Defensive",
        "name": "E/MG-101 HMG Emplacement",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Bridge/HMG%20Emplacement.svg"
    },
    {
        "id": 25,
        "category": "Defensive",
        "name": "FX-12 Shield Generator Relay",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Bridge/Shield%20Generator%20Relay.svg"
    },
    {
        "id": 26,
        "category": "Defensive",
        "name": "A/ARC-3 Tesla Tower",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Bridge/Tesla%20Tower.svg"
    },
    {
        "id": 27,
        "category": "Defensive",
        "name": "MD-6 Anti-Personnel Minefield",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Engineering%20Bay/Anti-Personnel%20Minefield.svg"
    },
    {
        "id": 28,
        "category": "Defensive",
        "name": "MD-I4 Incendiary Mines",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Engineering%20Bay/Incendiary%20Mines.svg"
    },
    {
        "id": 29,
        "category": "Defensive",
        "name": "A/MG-43 Machine Gun Sentry",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Robotics%20Workshop/Machine%20Gun%20Sentry.svg"
    },
    {
        "id": 30,
        "category": "Defensive",
        "name": "A/G-16 Gatling Sentry",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Robotics%20Workshop/Gatling%20Sentry.svg"
    },
    {
        "id": 31,
        "category": "Defensive",
        "name": "A/M-12 Mortar Sentry",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Robotics%20Workshop/Mortar%20Sentry.svg"
    },
    {
        "id": 32,
        "category": "Defensive",
        "name": "A/AC-8 Autocannon Sentry",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Robotics%20Workshop/Autocannon%20Sentry.svg"
    },
    {
        "id": 33,
        "category": "Defensive",
        "name": "A/MLS-4X Rocket Sentry",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Robotics%20Workshop/Rocket%20Sentry.svg"
    },
    {
        "id": 34,
        "category": "Defensive",
        "name": "A/M-23 EMS Mortar Sentry",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Robotics%20Workshop/EMS%20Mortar%20Sentry.svg"
    },
    {
        "id": 35,
        "category": "Offensive: Orbital",
        "name": "Orbital Gatling Barrage",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Orbital%20Cannons/Orbital%20Gatling%20Barrage.svg"
    },
    {
        "id": 36,
        "category": "Offensive: Orbital",
        "name": "Orbital Airburst Strike",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Orbital%20Cannons/Orbital%20Airburst%20Strike.svg"
    },
    {
        "id": 37,
        "category": "Offensive: Orbital",
        "name": "Orbital 120MM HE Barrage",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Orbital%20Cannons/Orbital%20120MM%20HE%20Barrage.svg"
    },
    {
        "id": 38,
        "category": "Offensive: Orbital",
        "name": "Orbital 380MM HE Barrage",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Orbital%20Cannons/Orbital%20380MM%20HE%20Barrage.svg"
    },
    {
        "id": 39,
        "category": "Offensive: Orbital",
        "name": "Orbital Walking Barrage",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Orbital%20Cannons/Orbital%20Walking%20Barrage.svg"
    },
    {
        "id": 40,
        "category": "Offensive: Orbital",
        "name": "Orbital Laser",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Orbital%20Cannons/Orbital%20Laser.svg"
    },
    {
        "id": 41,
        "category": "Offensive: Orbital",
        "name": "Orbital Railcannon Strike",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Orbital%20Cannons/Orbital%20Railcannon%20Strike.svg"
    },
    {
        "id": 42,
        "category": "Offensive: Orbital",
        "name": "Orbital Precision Strike",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Bridge/Orbital%20Precision%20Strike.svg"
    },
    {
        "id": 43,
        "category": "Offensive: Orbital",
        "name": "Orbital Gas Strike",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Bridge/Orbital%20Gas%20Strike.svg"
    },
    {
        "id": 44,
        "category": "Offensive: Orbital",
        "name": "Orbital EMS Strike",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Bridge/Orbital%20EMS%20Strike.svg"
    },
    {
        "id": 45,
        "category": "Offensive: Orbital",
        "name": "Orbital Smoke Strike",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Bridge/Orbital%20Smoke%20Strike.svg"
    },
    {
        "id": 46,
        "category": "Offensive: Eagle",
        "name": "Eagle Strafing Run",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Hangar/Eagle%20Strafing%20Run.svg"
    },
    {
        "id": 47,
        "category": "Offensive: Eagle",
        "name": "Eagle Airstrike",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Hangar/Eagle%20Airstrike.svg"
    },
    {
        "id": 48,
        "category": "Offensive: Eagle",
        "name": "Eagle Cluster Bomb",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Hangar/Eagle%20Cluster%20Bomb.svg"
    },
    {
        "id": 49,
        "category": "Offensive: Eagle",
        "name": "Eagle Napalm Airstrike",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Hangar/Eagle%20Napalm%20Airstrike.svg"
    },
    {
        "id": 50,
        "category": "Offensive: Eagle",
        "name": "Eagle Smoke Strike",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Hangar/Eagle%20Smoke%20Strike.svg"
    },
    {
        "id": 51,
        "category": "Offensive: Eagle",
        "name": "Eagle 110MM Rocket Pods",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Hangar/Eagle%20110MM%20Rocket%20Pods.svg"
    },
    {
        "id": 52,
        "category": "Offensive: Eagle",
        "name": "Eagle 500kg Bomb",
        "icon": "https://raw.githubusercontent.com/nvigneux/Helldivers-2-Stratagems-icons-svg/master/Hangar/Eagle%20500KG%20Bomb.svg"
    }
]
`);
const equipment = JSON.parse(`
[
	{
		"name": "Localization Confusion",
		"category": "Booster",
		"active": true,
		"warbond": "cutting",
		"id": 1
	},
	{
		"name": "Stun",
		"category": "Grenade",
		"active": true,
		"warbond": "cutting",
		"id": 2
	},
	{
		"name": "Blitzer",
		"category": "Primary",
		"active": true,
		"warbond": "cutting",
		"id": 3
	},
	{
		"name": "Sickle",
		"category": "Primary",
		"active": true,
		"warbond": "cutting",
		"id": 4
	},
	{
		"name": "Breaker Plasma",
		"category": "Primary",
		"active": true,
		"warbond": "cutting",
		"id": 5
	},
	{
		"name": "Dagger",
		"category": "Secondary",
		"active": true,
		"warbond": "cutting",
		"id": 6
	},
	{
		"name": "Expert Extraction Pilot",
		"category": "Booster",
		"active": true,
		"warbond": "democratic",
		"id": 7
	},
	{
		"name": "Thermite",
		"category": "Grenade",
		"active": true,
		"warbond": "democratic",
		"id": 8
	},
	{
		"name": "Adjudicator",
		"category": "Primary",
		"active": true,
		"warbond": "democratic",
		"id": 9
	},
	{
		"name": "Exploding Crossbow",
		"category": "Primary",
		"active": true,
		"warbond": "democratic",
		"id": 10
	},
	{
		"name": "Eruptor",
		"category": "Primary",
		"active": true,
		"warbond": "democratic",
		"id": 11
	},
	{
		"name": "Grenade Pistol",
		"category": "Secondary",
		"active": true,
		"warbond": "democratic",
		"id": 12
	},
	{
		"name": "Hellpod Space Optimization",
		"category": "Booster",
		"active": true,
		"warbond": "mobilise",
		"id": 13
	},
	{
		"name": "Increased Reinforcement Budget",
		"category": "Booster",
		"active": true,
		"warbond": "mobilise",
		"id": 14
	},
	{
		"name": "Muscle Enhancement",
		"category": "Booster",
		"active": true,
		"warbond": "mobilise",
		"id": 15
	},
	{
		"name": "Stamina Enhancement",
		"category": "Booster",
		"active": true,
		"warbond": "mobilise",
		"id": 16
	},
	{
		"name": "UAV Recon Booster",
		"category": "Booster",
		"active": true,
		"warbond": "mobilise",
		"id": 17
	},
	{
		"name": "Vitality Enhancement",
		"category": "Booster",
		"active": true,
		"warbond": "mobilise",
		"id": 18
	},
	{
		"name": "Heavy Explosive",
		"category": "Grenade",
		"active": true,
		"warbond": "mobilise",
		"id": 19
	},
	{
		"name": "Impact",
		"category": "Grenade",
		"active": true,
		"warbond": "mobilise",
		"id": 20
	},
	{
		"name": "Smoke",
		"category": "Grenade",
		"active": true,
		"warbond": "mobilise",
		"id": 21
	},
	{
		"name": "Fragmentation",
		"category": "Grenade",
		"active": true,
		"warbond": "mobilise",
		"id": 22
	},
	{
		"name": "Liberator",
		"category": "Primary",
		"active": true,
		"warbond": "mobilise",
		"id": 23
	},
	{
		"name": "Liberator Penetrator",
		"category": "Primary",
		"active": true,
		"warbond": "mobilise",
		"id": 24
	},
	{
		"name": "Scythe",
		"category": "Primary",
		"active": true,
		"warbond": "mobilise",
		"id": 25
	},
	{
		"name": "Knight",
		"category": "Primary",
		"active": false,
		"warbond": "mobilise",
		"id": 26
	},
	{
		"name": "Scorcher",
		"category": "Primary",
		"active": true,
		"warbond": "mobilise",
		"id": 27
	},
	{
		"name": "Diligence",
		"category": "Primary",
		"active": true,
		"warbond": "mobilise",
		"id": 28
	},
	{
		"name": "Diligence Counter Sniper",
		"category": "Primary",
		"active": true,
		"warbond": "mobilise",
		"id": 29
	},
	{
		"name": "Breaker",
		"category": "Primary",
		"active": true,
		"warbond": "mobilise",
		"id": 30
	},
	{
		"name": "Breaker Spray & Pray",
		"category": "Primary",
		"active": true,
		"warbond": "mobilise",
		"id": 31
	},
	{
		"name": "Punisher",
		"category": "Primary",
		"active": true,
		"warbond": "mobilise",
		"id": 32
	},
	{
		"name": "Slugger",
		"category": "Primary",
		"active": true,
		"warbond": "mobilise",
		"id": 33
	},
	{
		"name": "Defender",
		"category": "Primary",
		"active": true,
		"warbond": "mobilise",
		"id": 34
	},
	{
		"name": "Redeemer",
		"category": "Secondary",
		"active": true,
		"warbond": "mobilise",
		"id": 35
	},
	{
		"name": "Peacemaker",
		"category": "Secondary",
		"active": true,
		"warbond": "mobilise",
		"id": 36
	},
	{
		"name": "Motivational Shocks",
		"category": "Booster",
		"active": true,
		"warbond": "polar",
		"id": 37
	},
	{
		"name": "Incendiary Impact",
		"category": "Grenade",
		"active": true,
		"warbond": "polar",
		"id": 38
	},
	{
		"name": "Tenderizer",
		"category": "Primary",
		"active": true,
		"warbond": "polar",
		"id": 39
	},
	{
		"name": "Purifier",
		"category": "Primary",
		"active": true,
		"warbond": "polar",
		"id": 40
	},
	{
		"name": "Pummeler",
		"category": "Primary",
		"active": true,
		"warbond": "polar",
		"id": 41
	},
	{
		"name": "Verdict",
		"category": "Secondary",
		"active": true,
		"warbond": "polar",
		"id": 42
	},
	{
		"name": "Flexible Reinforcement Budget",
		"category": "Booster",
		"active": true,
		"warbond": "steeled",
		"id": 43
	},
	{
		"name": "Incendiary",
		"category": "Grenade",
		"active": true,
		"warbond": "steeled",
		"id": 44
	},
	{
		"name": "Liberator Concassor",
		"category": "Primary",
		"active": true,
		"warbond": "steeled",
		"id": 45
	},
	{
		"name": "Dominator",
		"category": "Primary",
		"active": true,
		"warbond": "steeled",
		"id": 46
	},
	{
		"name": "Breaker Incendiary",
		"category": "Primary",
		"active": true,
		"warbond": "steeled",
		"id": 47
	},
	{
		"name": "Senator",
		"category": "Secondary",
		"active": true,
		"warbond": "steeled",
		"id": 48
	},
	{
		"name": "Experimental Infusion",
		"category": "Booster",
		"active": true,
		"warbond": "viper",
		"id": 49
	},
	{
		"name": "Throwing Knife",
		"category": "Grenade",
		"active": true,
		"warbond": "viper",
		"id": 50
	},
	{
		"name": "Liberator Carbine",
		"category": "Primary",
		"active": true,
		"warbond": "viper",
		"id": 51
	},
	{
		"name": "Bushwhacker",
		"category": "Secondary",
		"active": true,
		"warbond": "viper",
		"id": 52
	}
]
`);
const activeWarbonds = ["mobilise","steeled","cutting","democratic","polar","viper"];
const stratList = document.getElementById("stratList");
const secondaryList = document.getElementById("secondaryList");
const grenadeList = document.getElementById("grenadeList");
const boosterList = document.getElementById("boosterList");
const primaryTab = document.getElementById("primaryTab");
const primaryRes = document.getElementById("primaryRes");
const secondaryRes = document.getElementById("secondaryRes");
const grenadeRes = document.getElementById("grenadeRes");
const boosterRes = document.getElementById("boosterRes");
const factionRes = document.getElementById("factionRes");
const resStratagems = document.getElementById("resStratagems");
const generateButton = document.getElementById("generateButton");
const resultDiv = document.getElementById("resultDiv");
const forceSupport = document.getElementById("forceSupport");
const forceDemolition = document.getElementById("forceDemolition");
const noDuplicateSupport = document.getElementById("noDuplicate");
const noDuplicateBackpack = document.getElementById("noDuplicateBackpack");
const randomizedElements = ["stratagems"]
const errDisplay = document.getElementById("errDisplay");
const backpackIDs = [1,2,3,4,5,6,11,13,16,21];
const supportWeaponsIDs = [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

//Degueulasse v2, mais flemme
const defFalse = ["primary","secondary","grenade","booster","faction"];
const defTrue = ["stratagems","mobilise","steeled","cutting","democratic","polar","viper"];
defFalse.forEach(x => document.getElementsByName(x)[0].checked = false);
defTrue.forEach(x => document.getElementsByName(x)[0].checked = true);
//Fin dégueulasse

equipment.sort((o1,o2) => o1.name.localeCompare(o2.name));

dataset.forEach( o => {
	o.active = true;
	let curImg = document.createElement("IMG");
	curImg.setAttribute("data-sid",o.id);
	curImg.setAttribute("src",o.icon);
	curImg.classList.toggle("active");
	curImg.addEventListener("click",function(){
		curImg.classList.toggle("inactive");
		curImg.classList.toggle("active");
		o.active = !o.active;
	});
	stratList.appendChild(curImg);
});

equipment.forEach(function(x){
	let newDiv = document.createElement("DIV");
	let checkbox = document.createElement("INPUT");
	let label = document.createElement("LABEL");
	let parent = null;
	if(x.category == "Primary"){
		parent = primaryTab;
	}
	if(x.category == "Secondary"){
		parent = secondaryList;
	}
	if(x.category == "Grenade"){
		parent = grenadeList;
	}
	if(x.category == "Booster"){
		parent = boosterList;
	}
	label.innerHTML = x.name;
	checkbox.type = "checkbox";
	checkbox.checked = x.active;
	checkbox.addEventListener("change",function(){
		x.active = !x.active;
	})
	
	newDiv.appendChild(checkbox);
	newDiv.appendChild(label);
	parent.appendChild(newDiv);
});

generateButton.addEventListener("click",function(){
	errDisplay.style = "display:none";
	let selectedPrimary = "Your choice";
	let selectedSecondary = "Your choice";
	let selectedGrenade = "Your choice";
	let selectedBooster = "Your choice";
	let selectedFaction = "Your choice";
	resultDiv.style = "";
	Array.from(resStratagems.getElementsByTagName("DIV")).forEach( divNode => {divNode.innerHTML = "";divNode.style="display:none"});
	document.getElementById("stratChoice").innerHTML = "";
	if(randomizedElements.includes("stratagems")){
		let randomIDs = [];
		let randomPossibleIDs = [];
		let totalRandomChoice = 4;
		dataset.forEach( o => {
			if(o.active){
				randomPossibleIDs.push(o.id);
			}
		});
		if(randomPossibleIDs.length < 4){
			console.error("You must enable at least 4 stratagems");
			errDisplay.innerHTML = "You must enable at least 4 stratagems";
			errDisplay.style = "color:red";
			return;
		}
		if(forceSupport.checked){
			const intersect = randomPossibleIDs.filter(value => supportWeaponsIDs.includes(value));
			if(intersect.length == 0){
				console.error("You must enable one support weapon if you use the force option");
				errDisplay.style = "color:red";
				errDisplay.innerHTML = "You must enable one support weapon if you use the force option";
				return;
			}
			totalRandomChoice--;
			found = false;
			//Degueulasse, a changer plus tard
			while(!found){
				let randId = getRandomArbitrary(7,21);
				if(randomPossibleIDs.includes(randId)){
					randomIDs.push(randId);
					randomPossibleIDs.splice(randomPossibleIDs.indexOf(randId),1);
					found = true;
					if(noDuplicateBackpack.checked && backpackIDs.includes(randId)){
						backpackIDs.forEach( x => {
							if(randomPossibleIDs.includes(x)){
								randomPossibleIDs.splice(randomPossibleIDs.indexOf(x),1);
							}
						})
					}
				}
			}
			if(noDuplicateSupport.checked){
				for(let i = 7;i<=22;i++){
					if(randomPossibleIDs.includes(i)){
						randomPossibleIDs.splice(randomPossibleIDs.indexOf(i),1);
					}
				}
			}
		}
		
		for(let i = 0;i<totalRandomChoice;i++){
			let found = false;
			while(!found){
				let randId = getRandomArbitrary(0,randomPossibleIDs.length);
				let stratId = randomPossibleIDs[randId];
				if(!randomIDs.includes(stratId)){
					found = true;
					randomIDs.push(stratId),
					randomPossibleIDs.splice(randId,1);
					if(noDuplicateSupport.checked && stratId >=7 && stratId <=22 ){
						for(let i = 7;i<=22;i++){
							if(randomPossibleIDs.includes(i)){
								randomPossibleIDs.splice(randomPossibleIDs.indexOf(i),1);
							}
						}
					}
					if(noDuplicateBackpack.checked && backpackIDs.includes(stratId)){
						backpackIDs.forEach( x => {
							if(randomPossibleIDs.includes(x)){
								randomPossibleIDs.splice(randomPossibleIDs.indexOf(x),1);
							}
						})
					}
				}
			}
		}
		let i = 0;
		
		Array.from(resStratagems.getElementsByTagName("DIV")).forEach( divNode => {
			divNode.innerHTML = "";
			divNode.style=""
			let curImg = document.createElement("IMG");
			let stratagem = null;
			let j = 0;
			while(!stratagem){
				if(dataset[j].id == randomIDs[i]){
					stratagem = dataset[j];
				}
				j++;
			}
			curImg.setAttribute("data-sid",stratagem.id);
			curImg.setAttribute("src",stratagem.icon);
			divNode.appendChild(curImg);
			i++;
		})
	}
	else{
		document.getElementById("stratChoice").innerHTML = " Your choice";
	}
	if(randomizedElements.includes("primary")){
		let primaryRandomList = equipment.filter(x => activeWarbonds.includes(x.warbond) && x.active && x.category == "Primary");
		selectedPrimary = primaryRandomList[getRandomArbitrary(0,primaryRandomList.length)].name;
	}
	if(randomizedElements.includes("secondary")){
		let secondaryRandomList = equipment.filter(x => activeWarbonds.includes(x.warbond) && x.active && x.category == "Secondary");
		selectedSecondary = secondaryRandomList[getRandomArbitrary(0,secondaryRandomList.length)].name;
	}
	if(randomizedElements.includes("grenade")){
		let randomList = equipment.filter(x => activeWarbonds.includes(x.warbond) && x.active && x.category == "Grenade");
		selectedGrenade = randomList[getRandomArbitrary(0,randomList.length)].name;
	}
	if(randomizedElements.includes("booster")){
		let randomList = equipment.filter(x => activeWarbonds.includes(x.warbond) && x.active && x.category == "Booster");
		selectedBooster = randomList[getRandomArbitrary(0,randomList.length)].name;
	}
	if(randomizedElements.includes("faction")){
		selectedFaction = "Terminids";
		if(getRandomArbitrary(0,2) >= 1){
			selectedFaction = "Automatons";
		}
	}
	primaryRes.innerHTML = selectedPrimary;
	secondaryRes.innerHTML = selectedSecondary;
	grenadeRes.innerHTML = selectedGrenade;
	boosterRes.innerHTML = selectedBooster;
	factionRes.innerHTML = selectedFaction;
	
	
});


function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function changeTab(e){
	let previousTab = document.getElementsByClassName("activeTab")[0];
	previousTab.classList.toggle("activeTab");
	previousTab.classList.toggle("inactiveTab");
	document.getElementById(previousTab.name).style = "display:none";
	e.classList.toggle("activeTab");
	e.classList.toggle("inactiveTab");
	document.getElementById(e.name).style = "";
}

function toggleWarbond(elem){
	if(activeWarbonds.includes(elem.name)){
		activeWarbonds.splice(activeWarbonds.indexOf(elem.name),1);
	}
	else{
		activeWarbonds.push(elem.name);
	}
}

function toggleRandomised(elem){
	if(randomizedElements.includes(elem.name)){
		randomizedElements.splice(randomizedElements.indexOf(elem.name),1);
	}
	else{
		randomizedElements.push(elem.name);
	}
}


