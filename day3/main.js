import { input } from "./input.js";

const formattedInput = input.split(/\r?\n/);

const repeatedMap = formattedInput.map((row) => {
  let repeatedRow = "";

  for (let i = 0; i < 100; i++) {
    repeatedRow += row;
  }

  return repeatedRow;
});

// _____ THIS IS THE ANSWER FOR PART ONE OF THE FIRST DAY: _____
// let amountOfTrees = 0;
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

// console.log(amountOfTrees);
// _____________________________________________________________

let amountOfTrees = [0, 0, 0, 0, 0];
let columnIncrement = [1, 3, 5, 7, 1];
let rowIncrement = [1, 1, 1, 1, 2];

for (let i = 0; i < 5; i++) {
  let currentAmount = 0;
  let rowCounter = 0;
  let columnCounter = 0;

  repeatedMap.forEach((row) => {
    if (rowIncrement[i] === 1) {
      if (rowCounter !== 0) {
        columnCounter += columnIncrement[i];

        if (row.charAt(columnCounter) === "#") {
          currentAmount++;
        }
      } else {
        rowCounter += rowIncrement[i];
      }
    } else {
      columnCounter += columnIncrement[i];

      if (rowCounter % 2 === 0) {
        if (row.charAt(columnCounter) === "#") {
          currentAmount++;
        }
      }
      rowCounter++;
    }
  });

  amountOfTrees[i] = currentAmount;
}

console.log(amountOfTrees);

const totalTrees =
  amountOfTrees[0] *
  amountOfTrees[1] *
  amountOfTrees[2] *
  amountOfTrees[3] *
  amountOfTrees[4];

console.log(totalTrees);
