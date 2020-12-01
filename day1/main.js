const entries = [1721, 979, 366, 299, 675, 1456];
const currentYear = 2020;

const test = entries.forEach((entry, index) => {
  if (entry + entries[index - 1] === 2020) {
    return [entry, entries[index - 1]];
  }
});

console.log(test);
