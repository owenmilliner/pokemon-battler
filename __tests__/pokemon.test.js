const { Pokemon } = require("../pokemon.js");
describe("Pokemon", () => {
    test("Should create a new instance of Pokemon.", () => {
        const newPokemon = new Pokemon();
        expect(newPokemon).toBeInstanceOf(Pokemon);
    });

    describe("Pokemon Properties", () => {
        test("Created with name property.", () => {
            const newPokemon = new Pokemon("Bulbasaur");
            expect(newPokemon.name).toBe("Bulbasaur");
        });

        test("Created with health property.", () => {
            const newPokemon = new Pokemon("Bulbasaur", 80);
            expect(newPokemon.health).toBe(80);
        });
    });
});
