import { input } from "./input.js";

const formattedInput = input.split(/\r?\n/);

const repeatedMap = formattedInput.map((row) => {
  let repeatedRow = "";

  for (let i = 0; i < 100; i++) {
    repeatedRow += row;
  }

  return repeatedRow;
});

let amountOfTrees = 0;
// _____ THIS IS THE ANSWER FOR PART ONE OF THE FIRST DAY: _____
// let rowCounter = 0;
// let columnCounter = 0;

// repeatedMap.forEach((row) => {
//   if (rowCounter !== 0) {
//     columnCounter += 3;

//     if (row.charAt(columnCounter) === "#") {
//       amountOfTrees++;
//     }
//   } else {
//     rowCounter++;
//   }
// });
// _____________________________________________________________

console.log(amountOfTrees);
