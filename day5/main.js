import { input } from "./testInput.js";

const formattedInput = input.split("\n");

const allTakenSeats = formattedInput.map((singleLine) => {
  const rowInstructions = singleLine.substring(0, 7).split("");
  const columnInstructions = singleLine.slice(-3).split("");

  console.log(singleLine);

  let finalRow = 0;
  let finalColumn = 0;
  let rowRange = [0, 127];
  let columnRange = [0, 7];

  rowInstructions.forEach((instruction, index) => {
    console.log("_______________________________________________");
    let startValue = rowRange[0];
    if (rowRange[0] === 0) {
      startValue = 1;
    }
    if (index !== 6) {
      const middleNumber = Math.ceil((startValue + rowRange[1]) / 2);
      if (instruction === "F") {
        console.log("Using the lower half");
        rowRange = [rowRange[0], middleNumber];
      } else {
        console.log("Using the upper half");
        rowRange = [middleNumber, rowRange[1]];
      }
    } else {
      if (instruction === "F") {
        finalRow = rowRange[0];
      } else {
        finalRow = rowRange[1];
      }
    }
    console.log(rowRange);
    console.log("_______________________________________________");
  });

  console.log("final row: ", finalColumn);
});

// console.log("These are all the taken places of the plane:");
// console.log(allTakenSeats);
