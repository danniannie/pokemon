const { squirtle, charmander, bulbasaur, jigglypuff } = require("./pokedex");
const { Trainer, Battle } = require("./pokemon");

const inquirer = require("inquirer");
const poke = { squirtle, charmander, bulbasaur, jigglypuff };
const questions1 = [
  {
    type: "input",
    name: "p1 name",
    message: "What's player 1's name?"
  },
  {
    type: "input",
    name: "p2 name",
    message: "What's player 2's name?"
  }
];

inquirer.prompt(questions1).then(answers1 => {
  player1 = new Trainer(answers1["p1 name"]);
  player2 = new Trainer(answers1["p2 name"]);
  console.log("Welcome players!");

  const questions2 = [
    {
      type: "list",
      name: "p1 pokemon choice",
      message: "player 1, choose your pokemon!",
      choices: ["squirtle", "charmander", "bulbasaur", "jigglypuff"]
    }
  ];

  inquirer.prompt(questions2).then(answers2 => {
    player1.catch(poke[answers2["p1 pokemon choice"]]);
    console.log("You have chosen:");
    console.log(poke[answers2["p1 pokemon choice"]]);
    //
    const questions3 = [
      {
        type: "list",
        name: "p2 pokemon choice",
        message: "player 2, choose your pokemon!",
        choices: ["squirtle", "charmander", "bulbasaur", "jigglypuff"]
      }
    ];
    inquirer.prompt(questions3).then(answers3 => {
      player2.catch(poke[answers3["p2 pokemon choice"]]);
      console.log("You have chosen:");
      console.log(poke[answers3["p2 pokemon choice"]]);
      console.log("Time to FIGHT!");
      const battle = new Battle(
        player1,
        answers2["p1 pokemon choice"],
        player2,
        answers3["p2 pokemon choice"]
      );
      //
      const questions4 = [
        {
          type: "confirm",
          name: "ready to fight",
          message: "Are you ready to fight?"
        }
      ];
      function bigFight() {
        inquirer.prompt(questions4).then(answers4 => {
          let playing = answers4;
          if (playing) {
            battle.fight();
            bigFight();
          }
        });
      }
      bigFight();
    });
  });
});

// inquirer.prompt(questions3).then(answers => {
//   player2.catch(poke[answers['p2 pokemon choice']]);
//   console.log(`You have chosen ${poke[answers['p1 pokemon choice']]}`);
//   console.log('A fight has begun...');
// });

const questions4 = [
  {
    type: "list",
    name: "p1 actions",
    message: "player 1, what do you want to do?",
    choices: ["RUN!!", "Fight"]
  }
];

//   battle.fight();
