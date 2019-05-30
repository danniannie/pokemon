function Pokemon(
  name,
  health,
  attackDamage,
  sound,
  type = "normal",
  favouriteMove
) {
  this.name = name;
  this.health = health;
  this.attackDamage = attackDamage;
  this.sound = sound;
  this.type = type;
  this.favouriteMove = favouriteMove;
}

Pokemon.prototype.talk = function() {
  return this.sound;
};

Pokemon.prototype.useYourMoves = function() {
  return this.favouriteMove;
};

function Trainer(name) {
  this.name = name;
  this.storage = {};
}
Trainer.prototype.catch = function(pokemon) {
  this.storage[pokemon.name] = pokemon;
};

function Battle(player1, p1Pokemon, player2, p2Pokemon) {
  this.player1 = player1;
  this.player2 = player2;
  this.p1Pokemon = { ...p1Pokemon };
  this.p2Pokemon = { ...p2Pokemon };
}

module.exports = { Pokemon, Trainer, Battle };
