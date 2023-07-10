function numberChecker(numbers) {
    const isPresent = (number) => {
      return number in numbers;
    };
  
    return isPresent;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  const isEven = numberChecker(numbers);
  console.log(isEven(2)); // true
  console.log(isEven(3)); // false
  