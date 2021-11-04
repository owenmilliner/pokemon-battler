const { Pokemon } = require("../pokemon.js");
describe("Pokemon", () => {
    test("Should create a new instance of Pokemon.", () => {
        const newPokemon = new Pokemon();
        expect(newPokemon).toBeInstanceOf(Pokemon);
    });

    describe("Pokemon Properties", () => {
        test("Created with name property.", () => {
            const bulbasaur = new Pokemon("Bulbasaur");
            expect(bulbasaur.name).toBe("Bulbasaur");
        });

        test("Created with health property.", () => {
            const bulbasaur = new Pokemon("Bulbasaur", 80);
            expect(bulbasaur.health).toBe(80);
        });

        test("Created with damage property.", () => {
            const bulbasaur = new Pokemon("Bulbasaur", 80, 35);
            expect(bulbasaur.damage).toBe(35);
        });

        test("Created with sound property.", () => {
            const bulbasaur = new Pokemon("Bulbasaur", 80, 35, "bulba");
            expect(bulbasaur.sound).toBe("bulba");
        });

        test("Created with move property.", () => {
            const bulbasaur = new Pokemon(
                "Bulbasaur",
                80,
                35,
                "bulba",
                "Vine Whip"
            );
            expect(bulbasaur.move).toBe("Vine Whip");
        });

        test("Created with type property.", () => {
            const bulbasaur = new Pokemon(
                "Bulbasaur",
                80,
                35,
                "bulba",
                "Vine Whip",
                "grass"
            );
            expect(bulbasaur.type).toBe("grass");
        });

        test("Created with default type property set.", () => {
            const eevee = new Pokemon("Eevee", 65, 45, "Eevee!", "Tackle");
            expect(eevee.type).toBe("normal");
        });
    });
});
