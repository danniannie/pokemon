function Pokemon(
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

module.exports = { Pokemon, Trainer };
