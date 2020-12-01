const entries = [1721, 979, 366, 299, 675, 1456];
const currentYear = 2020;

let solution = null;

const test = entries.forEach((topEntry) => {
  entries.forEach((subEntry) => {
    console.log("__________");
    console.log("topEntry: ", topEntry);
    console.log("subEntry: ", subEntry);
    console.log(topEntry + subEntry);
    console.log("__________");

    if (topEntry + subEntry === currentYear) {
      solution = [topEntry, subEntry];
    }
  });
});

console.log(solution);
