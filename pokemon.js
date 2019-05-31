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
    this.strength = '';
    this.weakness = '';
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
class Grass extends Pokemon {
  constructor(name, health, attackDamage, sound, type, favouriteMove) {
    super(name, health, attackDamage, sound, type, favouriteMove);
    this.strength = 'water';
    this.weakness = 'fire';
  }
}
class Water extends Pokemon {
  constructor(name, health, attackDamage, sound, type, favouriteMove) {
    super(name, health, attackDamage, sound, type, favouriteMove);
    this.strength = 'fire';
    this.weakness = 'grass';
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
  fight() {
    const player2Pokemon = this.player2.storage[this.p2Pokemon];
    const player1Pokemon = this.player1.storage[this.p1Pokemon];
    let message = '';
    if (this.turn === 1) {
      if (player2Pokemon.strength === player1Pokemon.type) {
        player2Pokemon.health -= player1Pokemon.attackDamage * 0.75;
        message = `${this.player1.name}'s ${player1Pokemon.name} has attacked ${
          this.player2.name
        }'s ${player2Pokemon.name} with ${player1Pokemon.attackDamage *
          0.75} damage`;
      } else if (player2Pokemon.weakness === player1Pokemon.type) {
        player2Pokemon.health -= player1Pokemon.attackDamage * 1.25;
        message = `${this.player1.name}'s ${player1Pokemon.name} has attacked ${
          this.player2.name
        }'s ${player2Pokemon.name} with ${player1Pokemon.attackDamage *
          1.25} damage`;
      } else {
        player2Pokemon.health -= player1Pokemon.attackDamage;
        message = `${this.player1.name}'s ${player1Pokemon.name} has attacked ${
          this.player2.name
        }'s ${player2Pokemon.name} with ${player1Pokemon.attackDamage} damage`;
      }
      if (player2Pokemon.health <= 0) {
        message = `${player2Pokemon.name} has fainted`;
      }
      this.turn += 1;
      console.log(message);
      return message;
    }
    //////////////
    else {
      if (player1Pokemon.strength === player2Pokemon.type) {
        player1Pokemon.health -= player2Pokemon.attackDamage * 0.75;
        message = `${this.player2.name}'s ${player2Pokemon.name} has attacked ${
          this.player1.name
        }'s ${player1Pokemon.name} with ${player2Pokemon.attackDamage *
          0.75} damage`;
      } else if (player1Pokemon.weakness === player2Pokemon.type) {
        player1Pokemon.health -= player2Pokemon.attackDamage * 1.25;
        message = `${this.player2.name}'s ${player2Pokemon.name} has attacked ${
          this.player1.name
        }'s ${player1Pokemon.name} with ${player2Pokemon.attackDamage *
          1.25} damage`;
      } else {
        player1Pokemon.health -= player2Pokemon.attackDamage;
        message = `${this.player2.name}'s ${player2Pokemon.name} has attacked ${
          this.player1.name
        }'s ${player1Pokemon.name} with ${player2Pokemon.attackDamage} damage`;
      }
      if (player1Pokemon.health <= 0) {
        message = `${player1Pokemon.name} has fainted`;
      }
      this.turn -= 1;
      console.log(message);
      return message;
    }
  }
}

module.exports = { Pokemon, Trainer, Battle, Fire, Water, Grass };
