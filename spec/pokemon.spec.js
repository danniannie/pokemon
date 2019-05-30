const { Pokemon, Trainer, Battle } = require("../pokemon");
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
      "favouriteMove"
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
});
