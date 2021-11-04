const { Pokemon, Trainer, Battle } = require("../pokemon.js");
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

    test("talk() returns the pokemon sound.", () => {
        const bulbasaur = new Pokemon(
            "Bulbasaur",
            80,
            35,
            "bulba",
            "Vine Whip",
            "grass"
        );
        expect(bulbasaur.talk()).toBe("bulba");
    });

    test("talk() returns the pokemon sound.", () => {
        const bulbasaur = new Pokemon(
            "Bulbasaur",
            80,
            35,
            "bulba",
            "Vine Whip",
            "grass"
        );
        expect(bulbasaur.moves()).toBe("Vine Whip");
    });
});

describe("Trainer", () => {
    test("Should create a new instance of Trainer.", () => {
        const owen = new Trainer();
        expect(owen).toBeInstanceOf(Trainer);
    });

    test("Created with name property.", () => {
        const owen = new Trainer("Owen");
        expect(owen.name).toBe("Owen");
    });

    test("Created with pokemon storage/party property.", () => {
        const owen = new Trainer("Owen");
        expect(owen.party).toEqual([]);
    });

    test("Created with pokemonCount property.", () => {
        const owen = new Trainer("Owen");
        expect(owen.pokemonCount).toEqual(0);
    });

    test("Created with maxPartySize property.", () => {
        const owen = new Trainer("Owen");
        expect(owen.maxPartySize).toEqual(6);
    });

    test("catch() adds the caught pokemon to the trainer's party.", () => {
        const owen = new Trainer("Owen");
        const bulbasaur = new Pokemon(
            "Bulbasaur",
            80,
            35,
            "bulba",
            "Vine Whip",
            "grass"
        );

        owen.catch(bulbasaur);

        expect(owen.party[0]).toEqual(bulbasaur);
    });
});

describe("Battle", () => {
    test("Should create a new instance of Battle.", () => {
        const newBattle = new Battle();
        expect(newBattle).toBeInstanceOf(Battle);
    });

    test("Created with trainerOne property.", () => {
        const owen = new Trainer("Owen");

        const newBattle = new Battle(owen);
        expect(newBattle.trainerOne).toBe(owen);
    });

    test("Created with trainerTwo property.", () => {
        const owen = new Trainer("Owen");
        const milly = new Trainer("Milly");

        const newBattle = new Battle(owen, milly);
        expect(newBattle.trainerTwo).toBe(milly);
    });
});
