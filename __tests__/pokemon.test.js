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

    test("Created with pokemonOne property.", () => {
        const owen = new Trainer("Owen");
        const milly = new Trainer("Milly");
        const bulbasaur = new Pokemon(
            "Bulbasaur",
            80,
            35,
            "bulba",
            "Vine Whip",
            "grass"
        );
        owen.catch(bulbasaur);

        const newBattle = new Battle(owen, milly, owen.party[0]);
        expect(newBattle.pokemonOne).toBe(owen.party[0]);
    });

    test("Created with pokemonTwo property.", () => {
        const owen = new Trainer("Owen");
        const milly = new Trainer("Milly");
        const bulbasaur = new Pokemon(
            "Bulbasaur",
            80,
            35,
            "bulba",
            "Vine Whip",
            "grass"
        );
        const altaria = new Pokemon(
            "Altaria",
            290,
            85,
            "Altaria!",
            "Sky Attack",
            "flying"
        );
        owen.catch(bulbasaur);
        milly.catch(altaria);

        const newBattle = new Battle(
            owen,
            milly,
            owen.party[0],
            milly.party[0]
        );
        expect(newBattle.pokemonTwo).toBe(milly.party[0]);
    });

    describe("Type Effectiveness", () => {
        test("When the pokemon attacking is weak against the enemy, perform a 'not-very-effective' attack.", () => {
            const owen = new Trainer("Owen");
            const milly = new Trainer("Milly");
            const bulbasaur = new Pokemon(
                "Bulbasaur",
                80,
                35,
                "bulba",
                "Vine Whip",
                "grass"
            );
            const altaria = new Pokemon(
                "Altaria",
                290,
                85,
                "Altaria!",
                "Sky Attack",
                "flying"
            );
            owen.catch(bulbasaur);
            milly.catch(altaria);

            const notVeryEffective = new Battle(
                owen,
                milly,
                owen.party[0],
                milly.party[0]
            );

            notVeryEffective.fight();

            expect(milly.party[0].health).toBe(263);
        });

        test("When the pokemon attacking is strong against the enemy, perform a 'super-effective' attack.", () => {
            const owen = new Trainer("Owen");
            const milly = new Trainer("Milly");
            const bulbasaur = new Pokemon(
                "Bulbasaur",
                80,
                35,
                "bulba",
                "Vine Whip",
                "grass"
            );
            const squirtle = new Pokemon(
                "Squirtle",
                100,
                30,
                "Squirt Squirt",
                "Bubble Beam",
                "water"
            );
            owen.catch(bulbasaur);
            milly.catch(squirtle);

            const superEffective = new Battle(
                owen,
                milly,
                owen.party[0],
                milly.party[0]
            );

            superEffective.fight();

            expect(milly.party[0].health).toBe(56);
        });

        test("When the pokemon attacking is neutral against the enemy, perform a 'normal' attack.", () => {
            const owen = new Trainer("Owen");
            const milly = new Trainer("Milly");
            const bulbasaur = new Pokemon(
                "Bulbasaur",
                80,
                35,
                "bulba",
                "Vine Whip",
                "grass"
            );
            const eevee = new Pokemon(
                "Eevee",
                65,
                45,
                "Eevee!",
                "Tackle",
                "normal"
            );
            owen.catch(bulbasaur);
            milly.catch(eevee);

            const normal = new Battle(
                owen,
                milly,
                owen.party[0],
                milly.party[0]
            );

            normal.fight();

            expect(milly.party[0].health).toBe(30);
        });
    });
});
