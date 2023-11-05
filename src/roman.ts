export const NumberAsArray = (numToArr: number): Array<string> => {
  if (numToArr === undefined || isNaN(numToArr)) throw new Error("number is required");
  if (numToArr < 1 || numToArr > 10000) {
    throw new Error("Number out of range for Roman numerals (1-9999).");
  }
  const numArray = numToArr.toString().split("");
  return numArray;
}

export const RomanNumberTemplate = (numToConvert: string, ones: string, fives: string, tens: string): string => {
  let romanNum = "";
  switch (numToConvert) {
   case '1': romanNum = ones; break;
   case '2': romanNum = ones + ones; break;
   case '3': romanNum = ones + ones + ones; break;
   case '4': romanNum = ones + fives; break;
   case '5': romanNum = fives; break;
   case '6': romanNum = fives + ones; break;
   case '7': romanNum = fives + ones + ones; break;
   case '8': romanNum = fives + ones + ones + ones; break;
   case '9': romanNum = ones + tens; break;
   }
   return romanNum;
}

export const toRoman = (num: number): string => {
  const numbers = NumberAsArray(num).reverse(); // reverse arabic number to start with the last digit
  const arrRoman = [];

  let onesDigit = RomanNumberTemplate(numbers[0], "I", "V", "X"); // 1,5,10
  let tensDigit = RomanNumberTemplate(numbers[1], "X", "L", "C"); // 10, 50, 100
  let hundredsDigit = RomanNumberTemplate(numbers[2], "C", "D", "M"); // 100, 500, 1000
  let thousandsDigit = RomanNumberTemplate(numbers[3], "M", "V̅", "X̅" ); // 1000, 5000, 10000
  arrRoman.push(thousandsDigit, hundredsDigit, tensDigit, onesDigit);
  return  arrRoman.join("");
 }
  