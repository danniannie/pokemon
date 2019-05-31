const { Pokemon, Fire, Water, Grass } = require("./pokemon");
//
//
//
//

const squirtle = new Water("squirtle", 50, 30, "shshhshs", "water", "fight");
const charmander = new Fire(
  "charmander",
  60,
  20,
  "rawwwwwwwwrrr",
  "fire",
  "breath fire"
);
const bulbasaur = new Grass(
  "bulbasaur",
  50,
  10,
  "bulba bulba bulba",
  "grass",
  "overgrow"
);
const jigglypuff = new Pokemon(
  "jigglypuff",
  100,
  20,
  "jiggly jiggly",
  "normal",
  "sing"
);
module.exports = { squirtle, charmander, bulbasaur, jigglypuff };
