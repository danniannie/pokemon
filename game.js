const { squirtle, charmander, bulbasaur, jigglypuff } = require("./pokedex");
const { Trainer, Battle } = require("./pokemon");

var inquirer = require("inquirer");

// var game = require("./game.source");

// play(node: Node) -> Promise<Node>
function play(node) {
  if (!node.connections.length) {
    console.log(node.text);
    return Promise.resolve({ node }); // Note: `{node}` is ES6 object shorthand syntax. ES5 would be Promise.resolve({node: node})
  }
  return inquirer
    .prompt({
      name: "node",
      message: node.text,
      type: "list",
      choices: node.connections
    })
    .then(answer => play(answer.node)); // Note: This is an ES6 Arrow function.
  // ES5 would be `.then(function(answer) { return play(answer.node); })`
}

play(game.startingPoint).then(last => console.log("Game over."));
