import { input } from "./input.js";

const formattedInput = input.split("\n\n");
let allFormattedPassports = [];

formattedInput.forEach((inputLine) => {
  const formattedPassport = inputLine.replace(/\n/g, " ").split(" ");
  allFormattedPassports.push(formattedPassport);
});

console.log(allFormattedPassports);

// _____ THIS IS THE ANSWER FOR PART ONE OF THE FIRST DAY: _____
// let validPassports = 0;
// allFormattedPassports.forEach((passport) => {
//   // if all fields are present, passport is always valid
//   if (passport.length === 8) {
//     validPassports++;
//   } else {
//     // if the only missing field is CID, the passport is still valid.
//     if (passport.length === 7) {
//       let hasCID = false;

//       // check if CID is in the passport
//       passport.forEach((passportLine) => {
//         if (passportLine.substring(0, 3) === "cid") {
//           hasCID = true;
//         }
//       });

//       // if CID is in the passport, this means some other field is missing, making the passport unvalid
//       if (!hasCID) {
//         validPassports++;
//       }
//     }
//   }
// });
// _____________________________________________________________

let validPassports = 0;
allFormattedPassports.forEach((passport) => {
  let passportIsValid = true;
  let allRequiredFields = false;

  if (passport.length === 8) {
    allRequiredFields = true;
  } else {
    // if the only missing field is CID, the passport has all required fields.
    if (passport.length === 7) {
      let hasCID = false;

      // check if CID is in the passport
      passport.forEach((passportLine) => {
        if (passportLine.substring(0, 3) === "cid") {
          hasCID = true;
        }
      });

      if (!hasCID) {
        allRequiredFields = true;
      }
    }
  }

  // only execute validation if all required fields are present
  if (allRequiredFields) {
    passport.forEach((passportLine) => {
      // Check for birth year
      if (passportLine.substring(0, 3) === "byr") {
        const data = passportLine.substring(4);

        if (parseInt(data) < 1920 || parseInt(data) > 2002) {
          passportIsValid = false;
        }
      }

      // Check for issue year
      if (passportLine.substring(0, 3) === "iyr") {
        const data = passportLine.substring(4);

        if (parseInt(data) < 2010 || parseInt(data) > 2020) {
          passportIsValid = false;
        }
      }

      // Check for expiration year
      if (passportLine.substring(0, 3) === "eyr") {
        const data = passportLine.substring(4);

        if (parseInt(data) < 2020 || parseInt(data) > 2030) {
          passportIsValid = false;
        }
      }

      // Check for height
      if (passportLine.substring(0, 3) === "hgt") {
        const data = passportLine.substring(4);

        if (data.slice(-2) === "cm") {
          if (
            parseInt(data.slice(0, -2)) < 150 ||
            parseInt(data.slice(0, -2)) > 193
          ) {
            passportIsValid = false;
          }
        } else if (data.slice(-2) === "in") {
          if (
            parseInt(data.slice(0, -2)) < 59 ||
            parseInt(data.slice(0, -2)) > 76
          ) {
            passportIsValid = false;
          }
        }
      }

      // check for hair color
      if (passportLine.substring(0, 3) === "hcl") {
        const data = passportLine.substring(4);
        const regex = new RegExp(`^#([0-9a-f]{6})$`);

        if (!regex.test(data)) {
          passportIsValid = false;
        }
      }

      // check for eye color
      if (passportLine.substring(0, 3) === "ecl") {
        const data = passportLine.substring(4);
        const allEyeColours = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];

        if (allEyeColours[data] === "undefined") {
          passportIsValid = false;
        }
      }

      // check for passport ID
      if (passportLine.substring(0, 3) === "pid") {
        const data = passportLine.substring(4);
        const regex = new RegExp(`/^\d{9}$/`);

        if (!regex.test(data)) {
          passportIsValid = false;
        }
      }
    });
  }

  if (passportIsValid) {
    validPassports++;
  }
});

console.log("amount of valid passports: ", validPassports);
