import { input, testInput } from "./input.js";

const delimiters = "\n";
const data = input.split(delimiters);
const exampleData = testInput.split(delimiters);

// _____ THIS IS THE ANSWER FOR PART ONE OF THE FIRST DAY: _____
let powerConsumption = null;
let binGammaRate = "";
let binEpsilonRate = "";
let gammaRate = ""; // most common bit
let epsilonRate = ""; // least common bit

let result = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
};
let exampleResult = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 };

// data.forEach((entry) => {
//   for (var i = 0; i < entry.length; i++) {
//     if (entry.charAt(i) === "1") {
//       result[i] = result[i] + 1;
//     }
//   }
// });

// const halfOfLength = data.length / 2;
// for (const [key, value] of Object.entries(result)) {
//   if (value > halfOfLength) {
//     binGammaRate = binGammaRate + "1";
//     binEpsilonRate = binEpsilonRate + "0";
//   } else {
//     binGammaRate = binGammaRate + "0";
//     binEpsilonRate = binEpsilonRate + "1";
//   }
// }

// gammaRate = parseInt(binGammaRate, 2);
// epsilonRate = parseInt(binEpsilonRate, 2);
// powerConsumption = gammaRate * epsilonRate;
// console.log(powerConsumption);
// _____________________________________________________________

// _____ THIS IS THE ANSWER FOR PART TWO OF THE FIRST DAY: _____
let numbersArrayOxy = data;
let numbersArrayCO2 = data;

for (const [key] of Object.entries(result)) {
  const halfOfLengthOxy = numbersArrayOxy.length / 2;
  numbersArrayOxy.forEach((entry) => {
    if (entry.charAt(key) === "1") {
      result[key] = result[key] + 1;
    }
  });

  // if most common digit is a 1 for position [key]
  if (result[key] >= halfOfLengthOxy) {
    numbersArrayOxy = numbersArrayOxy.filter(function (number) {
      return number.charAt(key) === "1";
    });
  } else {
    numbersArrayOxy = numbersArrayOxy.filter(function (number) {
      return number.charAt(key) === "0";
    });
  }

  console.log(`This is the numbersArrayOxy after running with key ${key}`);
  console.log(numbersArrayOxy);

  result = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
  };
  const halfOfLengthCO2 = numbersArrayCO2.length / 2;
  numbersArrayCO2.forEach((entry) => {
    if (entry.charAt(key) === "1") {
      result[key] = result[key] + 1;
    }
  });

  // if least common digit is a 1 for position [key]
  if (numbersArrayCO2.length > 1) {
    if (result[key] < halfOfLengthCO2) {
      numbersArrayCO2 = numbersArrayCO2.filter(function (number) {
        return number.charAt(key) === "1";
      });
    } else {
      numbersArrayCO2 = numbersArrayCO2.filter(function (number) {
        return number.charAt(key) === "0";
      });
    }
  }

  console.log(`This is the numbersArrayCO2 after running with key ${key}`);
  console.log(numbersArrayCO2);
}

let oxyGenRating = numbersArrayOxy[0];
let CO2ScrubRating = numbersArrayCO2[0];
const lifeSupportRating =
  parseInt(oxyGenRating, 2) * parseInt(CO2ScrubRating, 2);

console.log(lifeSupportRating);

// _____________________________________________________________
