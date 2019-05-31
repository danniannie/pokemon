const { squirtle, charmander, bulbasaur, jigglypuff } = require("./pokedex");
const { Trainer, Battle } = require("./pokemon");

var inquirer = require("inquirer");
const poke = { squirtle, charmander, bulbasaur, jigglypuff };
var questions1 = [
  {
    type: "input",
    name: "p1 name",
    message: "What's player 1's name?"
  },
  {
    type: "input",
    name: "p2 name",
    message: "What's player 2's name?"
  }]
  
  const questions2 = [{
    type: "list",
    name: "p1 pokemon choice",
    message: `player 1, choose your pokemon!`,
    choices: ["squirtle", "charmander", "bulbasaur", "jigglypuff"]
  },
  {
    type: "list",
    name: "p2 pokemon choice",
    message: `player 2, choose your pokemon!`,
    choices: ["squirtle", "charmander", "bulbasaur", "jigglypuff"]
  },
  {
    type: "list",
    name: "p1 actions",
    message: `player 1, what do you want to do?`,
    choices: ["RUN!!", "Fight"]
  }
];
inquirer.prompt(questions1).then(answers => {
  player1 = new Trainer(answers["p1 name"]);
  player2 = new Trainer(answers["p2 name"]);})
  player1.catch(poke[answers["p1 pokemon choice"]]);
  console.log(poke[answers["p1 pokemon choice"]].health);
  player2.catch(poke[answers["p2 pokemon choice"]]);
  console.log("a fight has begun!");
  const battle = new Battle(
    player1,
    answers["p1 pokemon choice"],
    player2,
    answers["p2 pokemon choice"]
  );
  battle.fight();
});
