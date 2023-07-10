function convertToNumber(string) {
  try {
    return Number(string);
  } catch (error) {
    return "Invalid number";
  }
}

console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // Invalid number
