import { input, testInput } from "./input.js";

const delimiters = "\n";
const data = input.split(delimiters);
const exampleData = testInput.split(delimiters);

// _____ THIS IS THE ANSWER FOR PART ONE OF THE FIRST DAY: _____

console.log(exampleData);
let cleanData = [];
exampleData.forEach((entry) => {
  console.log(entry.match(`\b([0-9]|[1-9][0-9]|[1-9][0-9][0-9]|1000)\b`));
});
console.log(cleanData);

// _____________________________________________________________

// _____ THIS IS THE ANSWER FOR PART TWO OF THE FIRST DAY: _____

// _____________________________________________________________
