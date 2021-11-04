//-------------------------POKEMON-------------------------\\
function Pokemon(name, health, damage, sound, move, type = "normal") {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.sound = sound;
    this.move = move;
    this.type = type;
}

Pokemon.prototype.talk = function () {
    return this.sound;
};

Pokemon.prototype.moves = function () {
    return this.move;
};
const types = {
    normal: { strengths: [] },
    fire: { strengths: ["grass", "ice", "bug", "steel"] },
    water: { strengths: ["fire", "ground", "rock"] },
    electric: { strengths: ["water", "flying"] },
    grass: { strengths: ["water", "ground", "rock"] },
    ice: { strengths: ["grass", "ground", "flying", "dragon"] },
    fighting: { strengths: ["normal", "ice", "rock", "dark", "steel"] },
    poison: { strengths: ["grass", "fairy"] },
    ground: { strengths: ["fire", "electric", "poison", "rock", "steel"] },
    flying: { strengths: ["grass", "fighting", "bug"] },
    psychic: { strengths: ["fighting", "poison"] },
    bug: { strengths: ["grass", "psychic", "dark"] },
    rock: { strengths: ["fire", "ice", "flying", "rock"] },
    ghost: { strengths: ["psychic", "ghost"] },
    dragon: { strengths: ["dragon"] },
    dark: { strengths: ["psychic", "ghost"] },
    steel: { strengths: ["ice", "rock", "fairy"] },
    fairy: { strengths: ["fighting", "dragon", "dark"] },
};

//-------------------------TRAINER-------------------------\\

function Trainer(name) {
    this.name = name;
}

module.exports = { Pokemon, Trainer };
