import { input } from "./input.js";

const formattedInput = input.split(/\r?\n/);
let validPasswords = 0;

formattedInput.forEach((passwordLine) => {
  const singleLineArray = passwordLine.split(" ");

  const amountArray = singleLineArray[0].split("-");
  const validationLetter = singleLineArray[1].charAt(0);
  const password = singleLineArray[2];

  const minimumAmount = amountArray[0];
  const maximumAmount = amountArray[1];

  const characterRegex = new RegExp(`${validationLetter}`, "g");

  const characterAmount = (password.match(characterRegex) || []).length;
  console.log(characterAmount);

  if (characterAmount >= minimumAmount && characterAmount <= maximumAmount) {
    validPasswords++;
  }
});

console.log("Amount of valid passwords: ", validPasswords);
