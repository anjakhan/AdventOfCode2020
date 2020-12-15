const array = [2,1,10,11,0,6];

const runGame = (array, noSpoken) => {
  let game = [];
  array.forEach(no => game.push(no));
  let i = game.length-1;
  
  while (i < noSpoken) {
    let age = 0;
    let spoken = game[i];
    let spokenTimes = game.filter(no => no === spoken);
    
    if (spokenTimes.length <= 1) {
      game.push(0)
    } else if (game.includes(spoken)) {
      let index = game.lastIndexOf(spoken);
      age = index - game.lastIndexOf(spoken, index-1);
      
      game.push(age);
    };
    
    i++;
  };
  
  return game[noSpoken-1];

};

// Part 1
const part1 = 2020;
runGame(array, part1)

// Part 2
const part2 = 30000000;
runGame(array, part2)
