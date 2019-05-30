const { Pokemon, Trainer } = require('../pokemon');
const { expect } = require('chai');

describe('Pokemon', () => {
  it('creates a pokemon object with keys', () => {
    const testPokemon = new Pokemon();
    expect(testPokemon).to.have.keys(
      'name',
      'health',
      'attackDamage',
      'sound',
      'type',
      'favouriteMove'
    );
  });
  it('has a type that defaults to normal when not given type', () => {
    const testPokemon = new Pokemon('Jigglypuff', 10, 10, 'Jiggly');
    expect(testPokemon.type).to.equal('normal');
  });
  it('assigns a type to a pokemon', () => {
    const testPokemon = new Pokemon('Jigglypuff', 10, 10, 'Jiggly', 'sleepy');
    expect(testPokemon.type).to.equal('sleepy');
  });
  describe('Pokemon Methods', () => {
    it('returns Pokemon sound when talk method is called', () => {
      const testPokemon = new Pokemon('Jigglypuff', 10, 10, 'Jiggly', 'sleepy');
      expect(testPokemon.talk()).to.equal('Jiggly');
    });
    it('returns its favourite move when useYourMoves method called', () => {
      const testPokemon = new Pokemon(
        'Jigglypuff',
        10,
        10,
        'Jiggly',
        'sleepy',
        'singing'
      );
      expect(testPokemon.useYourMoves()).to.equal('singing');
    });
  });
});

describe('Trainer', () => {
  it('trainer has keys of name and storage', () => {
    const testTrainer = new Trainer();
    expect(testTrainer).to.have.key('name', 'storage');
  });
  it('storage is an object', () => {
    const testTrainer = new Trainer();
    expect(
      typeof testTrainer.storage === 'object' &&
        Array.isArray(testTrainer.storage) === false
    ).to.equal(true);
  });
});
