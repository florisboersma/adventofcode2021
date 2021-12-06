import { input, testInput } from "./input.js";

const delimiters = "\n";
const data = input.split(delimiters);
const exampleData = testInput.split(delimiters);

// _____ THIS IS THE ANSWER FOR PART ONE OF THE FIRST DAY: _____

const firstLine = exampleData.splice(0, 1);
const drawnNumbers = firstLine[0].split(","); // array with drawn numbers in order

let bingoBoards = [];
let filteredData = exampleData.filter((entry) => entry); // filter out empty strings

filteredData.forEach((string) => {
  console.log(string);
  string.split(" "); // Why is this not working??
});

while (filteredData.length) {
  bingoBoards.push(filteredData.splice(0, 5)); // make bingo boards of 5 rows each
}
console.log(bingoBoards);

// _____________________________________________________________

// _____ THIS IS THE ANSWER FOR PART TWO OF THE FIRST DAY: _____

// _____________________________________________________________
