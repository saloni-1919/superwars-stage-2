const PLAYERS = [
    "Spiderman", "Captain America", "Wonderwoman", "Popcorn", "Gemwoman",
    "Bolt", "Antwoman", "Mask", "Tiger", "Captain", "Catwoman", "Fish",
    "Hulk", "Ninja", "Black Cat", "Volverine", "Thor", "Slayer", "Vader", "Slingo"
];

const heroTeam = ["Spiderman", "Wonderwoman", "Gemwoman", "Antwoman", "Tiger", "Catwoman", "Hulk", "Black Cat", "Thor", "Vader"];

const initPlayers = (players) => {
    let detailedPlayers = [];
    for (let i = 0; i < players.length; i++) {
        detailedPlayers.push({
            name: players[i],
            strength: getRandomStrength(),
            image: `images/super-${i + 1}.png`
        });
    }
    return detailedPlayers;
}

const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

const buildPlayers = (players, type) => {
    let fragment = '';
    for (let i = 0; i < players.length; i++) {
        if (type === 'hero' && heroTeam.includes(players[i].name)) {
            fragment += `<div class="player">
                            <img src="${players[i].image}" alt="">
                            <div class="name">${players[i].name}</div>
                            <div class="strength">${players[i].strength}</div>
                        </div>`;
        } else if (type === 'villain' && !heroTeam.includes(players[i].name)) {
            fragment += `<div class="player">
                            <img src="${players[i].image}" alt="">
                            <div class="name">${players[i].name}</div>
                            <div class="strength">${players[i].strength}</div>
                        </div>`;
        }
    }
    return fragment;
}

const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}

window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}
