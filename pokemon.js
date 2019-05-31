//create a pokemon will various different attributes

class Pokemon {
  constructor(
    name,
    health,
    attackDamage,
    sound,
    type = 'normal',
    favouriteMove
  ) {
    this.name = name;
    this.health = health;
    this.attackDamage = attackDamage;
    this.sound = sound;
    this.type = type;
    this.favouriteMove = favouriteMove;
  }
  talk() {
    // a method to allow the pokemon to 'talk' returning it's sound (stored in the prototype of the pokemon function)
    return this.sound; //accessing the sound from the pokemon it's bound to.
  }
  // a method to returns it's favourite move(stored in the prototype of the pokemon function)
  useYourMoves() {
    return this.favouriteMove; //Accessing the pokemon it's bound to.
  }
}

class Fire extends Pokemon {
  constructor(name, health, attackDamage, sound, type, favouriteMove) {
    super(name, health, attackDamage, sound, type, favouriteMove);
    this.strength = 'grass';
    this.weakness = 'water';
  }
}

class Trainer {
  //creating a new trainer with a parameter of name with the ability to store a number of Pokemon in an object
  constructor(name) {
    this.name = name;
    this.storage = {};
  }
  catch(pokemon) {
    this.storage[pokemon.name] = pokemon; //a method to catch pokemon and store into the trainer's storage - again bound to the trainer it is called against
  }
}

class Battle {
  constructor(player1, p1Pokemon, player2, p2Pokemon) {
    this.player1 = player1;
    this.player2 = player2;
    this.p1Pokemon = p1Pokemon;
    this.p2Pokemon = p2Pokemon;
    this.turn = 1;
  }
}

Battle.prototype.fight = function() {
  if (this.turn === 1) {
    this.player2.storage[this.p2Pokemon].health -= this.player1.storage[
      this.p1Pokemon
    ].attackDamage;
    this.turn += 1;
  }
  if (this.turn === 2) {
    this.player1.storage[this.p1Pokemon].health -= this.player2.storage[
      this.p2Pokemon
    ].attackDamage;
    this.turn -= 1;
  }
};

module.exports = { Pokemon, Trainer, Battle };
