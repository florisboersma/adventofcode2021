import { input } from "./input.js";

const formattedInput = input.split("\n");

const allTakenSeats = formattedInput.map((singleLine) => {
  const rowInstructions = singleLine.substring(0, 7).split("");
  const columnInstructions = singleLine.slice(-3).split("");

  console.log(singleLine);

  let finalRow = 0;
  let finalColumn = 0;
  let rowRange = [1, 128];
  let columnRange = [0, 7];

  rowInstructions.forEach((instruction, index) => {
    if (index !== 6) {
      const middleNumber = Math.floor((rowRange[0] + rowRange[1]) / 2);
      if (instruction === "F") {
        rowRange = [rowRange[0], middleNumber];
      } else {
        rowRange = [middleNumber, rowRange[1]];
      }
    } else {
      if (instruction === "F") {
        finalRow = rowRange[0];
      } else {
        finalRow = rowRange[1];
      }
    }
  });

  columnInstructions.forEach((instruction, index) => {
    if (index !== 2) {
      const middleNumber = Math.ceil((columnRange[0] + columnRange[1]) / 2);
      if (instruction === "L") {
        columnRange = [columnRange[0], middleNumber];
      } else {
        columnRange = [middleNumber, columnRange[1]];
      }
    } else {
      if (instruction === "L") {
        finalColumn = columnRange[0];
      } else {
        finalColumn = columnRange[1];
      }
    }
  });

  console.log("final row: ", finalRow);
  console.log("final column: ", finalColumn);
  console.log("seat ID: ", finalRow * 8 + finalColumn);

  return {
    row: finalRow,
    column: finalColumn,
    seatID: finalRow * 8 + finalColumn,
  };
});

console.log("all taken seats:");
console.log(allTakenSeats);

const compare = (a, b) => {
  if (a.seatID < b.seatID) {
    return -1;
  }
  if (a.seatID > b.seatID) {
    return 1;
  }
  return 0;
};

const allSortedSeats = allTakenSeats.sort(compare);

console.log("all taken seats, sorted by seat ID");
console.log(allSortedSeats.slice(Math.max(allSortedSeats.length - 5, 0)));
