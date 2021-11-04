function Pokemon(name, health, damage, sound, move, type = "Normal") {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.sound = sound;
    this.move = move;
    this.type = type;
}

module.exports = { Pokemon };
