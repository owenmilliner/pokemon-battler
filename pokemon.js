//-------------------------POKEMON-------------------------\\
function Pokemon(name, health, damage, sound, move, type = "normal") {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.sound = sound;
    this.move = move;
    this.type = type;
    this.strengths = types[type].strengths;
    this.weaknesses = types[type].weaknesses;
}

Pokemon.prototype.talk = function () {
    return this.sound;
};

Pokemon.prototype.moves = function () {
    return this.move;
};
const types = {
    normal: { strengths: [] },
    fire: {
        strengths: ["grass", "ice", "bug", "steel"],
        weaknesses: ["water", "ground", "rock"],
    },
    water: {
        strengths: ["fire", "ground", "rock"],
        weaknesses: ["electric", "grass"],
    },
    electric: {
        strengths: ["water", "flying"],
        weaknesses: ["ground"],
    },
    grass: {
        strengths: ["water", "ground", "rock"],
        weaknesses: ["fire", "ice", "poison", "flying", "bug"],
    },
    ice: {
        strengths: ["grass", "ground", "flying", "dragon"],
        weaknesses: ["fire", "fighting", "rock", "steel"],
    },
    fighting: {
        strengths: ["normal", "ice", "rock", "dark", "steel"],
        weaknesses: ["flying", "psychic", "fairy"],
    },
    poison: {
        strengths: ["grass", "fairy"],
        weaknesses: ["ground", "psychic"],
    },
    ground: {
        strengths: ["fire", "electric", "poison", "rock", "steel"],
        weaknesses: ["water", "grass", "ice"],
    },
    flying: {
        strengths: ["grass", "fighting", "bug"],
        weaknesses: ["electric", "ice", "rock"],
    },
    psychic: {
        strengths: ["fighting", "poison"],
        weaknesses: ["bug", "ghost", "dark"],
    },
    bug: {
        strengths: ["grass", "psychic", "dark"],
        weaknesses: ["fire", "flying", "rock"],
    },
    rock: {
        strengths: ["fire", "ice", "flying", "rock"],
        weaknesses: ["water", "grass", "fighting", "ground", "steel"],
    },
    ghost: { strengths: ["psychic", "ghost"], weaknesses: ["ghost", "dark"] },
    dragon: { strengths: ["dragon"], weaknesses: ["ice", "dragon", "fairy"] },
    dark: {
        strengths: ["psychic", "ghost"],
        weaknesses: ["fighting", "bug", "fairy"],
    },
    steel: {
        strengths: ["ice", "rock", "fairy"],
        weaknesses: ["fire", "fighting", "ground"],
    },
    fairy: {
        strengths: ["fighting", "dragon", "dark"],
        weaknesses: ["poison", "steel"],
    },
};

//-------------------------TRAINER-------------------------\\

function Trainer(name) {
    this.name = name;
    this.party = [];
    this.pokemonCount = 0;
    this.maxPartySize = 6;
}

Trainer.prototype.catch = function (pokemon) {
    if (this.pokemonCount < this.maxPartySize) {
        this.party.push(pokemon);
    }
};

//-------------------------BATTLE-------------------------\\
function Battle(trainerOne, trainerTwo, pokemonOne, pokemonTwo) {
    this.trainerOne = trainerOne;
    this.trainerTwo = trainerTwo;
    this.pokemonOne = pokemonOne;
    this.pokemonTwo = pokemonTwo;
}

Battle.prototype.fightOnce = function () {
    const superEffective = this.pokemonOne.strengths.includes(
        this.pokemonTwo.type
    );
    const notVeryEffective = this.pokemonOne.weaknesses.includes(
        this.pokemonTwo.type
    );

    if (superEffective) {
        this.pokemonTwo.health -= Math.ceil(this.pokemonOne.damage * 1.25);
    } else if (notVeryEffective) {
        console.log("heres");
        this.pokemonTwo.health -= Math.ceil(this.pokemonOne.damage * 0.75);
    } else {
        this.pokemonTwo.health -= this.pokemonOne.damage;
    }

    if (this.pokemonOne.health <= 0) {
        return `${this.trainerTwo.name} and ${this.pokemonTwo.name} win!`;
    } else if (this.pokemonTwo.health <= 0) {
        return `${this.trainerOne.name} and ${this.pokemonOne.name} win!`;
    }
};

module.exports = { Pokemon, Trainer, Battle };
