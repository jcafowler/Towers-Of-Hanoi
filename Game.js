const readline = require("readline")
const rl = readline.createInterface({
     input: process.stdin,
    output: process.stdout
})
// rl.question("first tower", (first) =>{
//       rl.question("second tower", (second))
//       console.log(first, second)
// })
class Game {
  constructor () {
    this.towers = [["x","xx","xxx"], [], []]
  }
  
 promptMove() {
    rl.question("What disc do you want to move?",  (start) => {
       let startTowerIdx = start - 1
        rl.question("Where do you want to place your disc?", (end) => {
         let endTowerIdx = end - 1
         let move = [startTowerIdx,endTowerIdx]
         console.log(move)
         rl.close()
        })
      })
  }
  // run () {
  //   // run until a different stack is completed
  //   //get move from player
  //   //check move 
  //   // make move
  //   //do it again until the game is complete
  // }
}

let game = new Game()
game.promptMove()