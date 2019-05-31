const { Pokemon, Trainer, Battle, Fire, Water, Grass } = require("../pokemon");
const { expect } = require("chai");

describe("Pokemon", () => {
  it("creates a pokemon object with keys", () => {
    const testPokemon = new Pokemon();
    expect(testPokemon).to.have.keys(
      "name",
      "health",
      "attackDamage",
      "sound",
      "type",
      "favouriteMove",
      "strength",
      "weakness"
    );
  });
  it("has a type that defaults to normal when not given type", () => {
    const testPokemon = new Pokemon("Jigglypuff", 10, 10, "Jiggly");
    expect(testPokemon.type).to.equal("normal");
  });
  it("assigns a type to a pokemon", () => {
    const testPokemon = new Pokemon("Jigglypuff", 10, 10, "Jiggly", "sleepy");
    expect(testPokemon.type).to.equal("sleepy");
  });
  describe("Pokemon Methods", () => {
    it("returns Pokemon sound when talk method is called", () => {
      const testPokemon = new Pokemon("Jigglypuff", 10, 10, "Jiggly", "sleepy");
      expect(testPokemon.talk()).to.equal("Jiggly");
    });
    it("returns its favourite move when useYourMoves method called", () => {
      const testPokemon = new Pokemon(
        "Jigglypuff",
        10,
        10,
        "Jiggly",
        "sleepy",
        "singing"
      );
      expect(testPokemon.useYourMoves()).to.equal("singing");
    });
  });
});

describe("Trainer", () => {
  it("trainer has keys of name and storage", () => {
    const testTrainer = new Trainer();
    expect(testTrainer).to.have.key("name", "storage");
  });
  it("storage is an object", () => {
    const testTrainer = new Trainer();
    expect(
      typeof testTrainer.storage === "object" &&
        Array.isArray(testTrainer.storage) === false
    ).to.equal(true);
  });
  describe("Trainer methods", () => {
    it("it alows trainer to store pokemon in storage property", () => {
      const testTrainer = new Trainer();
      const testPokemon = new Pokemon("Jigglypuff", 10, 10, "Jiggly", "sleepy");
      testTrainer.catch(testPokemon);
      expect(testTrainer.storage).to.eql({ [testPokemon.name]: testPokemon });
    });
  });
});
describe("Battle", () => {
  describe("parameters of battle", () => {
    it("takes two trainers and the names of pokemon they with to battle", () => {
      const player1 = new Trainer("player1");
      const player2 = new Trainer("player2");
      const testPokemon1 = new Pokemon(
        "Jigglypuff",
        10,
        10,
        "Jiggly",
        "sleepy",
        "sleep"
      );
      const testPokemon2 = new Pokemon(
        "the other one",
        10,
        10,
        "raaaaaa",
        "fire",
        "fight"
      );
      player1.catch(testPokemon1);
      player2.catch(testPokemon2);
      const testBattle = new Battle(
        player1,
        { Jigglypuff: "Jigglypuff", Snorlax: "snorlax" },
        player2,
        { "the other one": "the other one" }
      );
      expect(testBattle.player1.name).to.equal("player1");
      expect(testBattle.player2.name).to.equal("player2");
    });
  });
  describe("battle methods", () => {
    it("deducts attack points from one players hit points", () => {
      const Danni = new Trainer("Danni");
      const Jacob = new Trainer("Jacob");
      const Jigglypuff = new Pokemon(
        "Jigglypuff",
        200,
        50,
        "Jiggly",
        "sleepy",
        "sleep"
      );
      const Eevee = new Pokemon("Eevee", 100, 10, "raaaaaa", "fire", "fight");
      Danni.catch(Jigglypuff);
      Jacob.catch(Eevee);
      const testBattle = new Battle(Danni, "Jigglypuff", Jacob, "Eevee");
      testBattle.fight();

      expect(Jacob.storage.Eevee.health).to.equal(50);
      // console.log(Danni);
      testBattle.fight();
      // console.log(Danni);
      expect(Danni.storage.Jigglypuff.health).to.equal(190);
      testBattle.fight();
      expect(Jacob.storage.Eevee.health).to.equal(0);
    });
    it("testing battle takes into account pokemons strengths and weaknesses", () => {
      const Danni = new Trainer("Danni");
      const Jacob = new Trainer("Jacob");
      const charmander = new Fire(
        "Charmander",
        200,
        20,
        "rawwwwwwwwrrr",
        "fire",
        "breath fire"
      );
      const Squirtle = new Water(
        "Squirtle",
        100,
        30,
        "shshhshs",
        "water",
        "fight"
      );
      Danni.catch(charmander);
      Jacob.catch(Squirtle);
      const testBattle = new Battle(Danni, "Charmander", Jacob, "Squirtle");
      testBattle.fight();
      expect(Jacob.storage.Squirtle.health).to.equal(85);
      testBattle.fight();
      expect(Danni.storage.Charmander.health).to.equal(200 - 37.5);
    });
    it("returns a message after attack depending on the strength/weaknesses", () => {
      const Danni = new Trainer("Danni");
      const Jacob = new Trainer("Jacob");
      const charmander = new Fire(
        "Charmander",
        200,
        20,
        "rawwwwwwwwrrr",
        "fire",
        "breath fire"
      );
      const Squirtle = new Water(
        "Squirtle",
        100,
        30,
        "shshhshs",
        "water",
        "fight"
      );
      Danni.catch(charmander);
      Jacob.catch(Squirtle);
      const testBattle = new Battle(Danni, "Charmander", Jacob, "Squirtle");
      expect(testBattle.fight()).to.equal(
        "Danni's Charmander has attacked Jacob's Squirtle with 15 damage"
      );
      expect(testBattle.fight()).to.equal(
        "Jacob's Squirtle has attacked Danni's Charmander with 37.5 damage"
      );
    });
    it("returns a message after when one pokemon has fainted (health points at 0 or below)", () => {
      const Danni = new Trainer("Danni");
      const Jacob = new Trainer("Jacob");
      const charmander = new Fire(
        "Charmander",
        10,
        20,
        "rawwwwwwwwrrr",
        "fire",
        "breath fire"
      );
      const Squirtle = new Water(
        "Squirtle",
        10,
        30,
        "shshhshs",
        "water",
        "fight"
      );
      Danni.catch(charmander);
      Jacob.catch(Squirtle);
      const testBattle = new Battle(Danni, "Charmander", Jacob, "Squirtle");
      expect(testBattle.fight()).to.equal("Squirtle has fainted");
    });
    it("returns game over message when pokemons health reaches zero", () => {
      const Danni = new Trainer("Danni");
      const Jacob = new Trainer("Jacob");
      const charmander = new Fire(
        "Charmander",
        10,
        20,
        "rawwwwwwwwrrr",
        "fire",
        "breath fire"
      );
      const Squirtle = new Water(
        "Squirtle",
        10,
        30,
        "shshhshs",
        "water",
        "fight"
      );
      Danni.catch(charmander);
      Jacob.catch(Squirtle);
      const testBattle = new Battle(Danni, "Charmander", Jacob, "Squirtle");
      testBattle.fight();
      expect(testBattle.fight()).to.equal("The game has ended");
    });
  });
});
