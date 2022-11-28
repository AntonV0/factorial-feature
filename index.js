const Calculate = {
  factorial(inputNumber) {
    if (inputNumber !== 0) {
      for (let i = inputNumber -1; i >= 1; i--) {
        inputNumber *= i;
       }
      return inputNumber;
    } else {
      return 1;
    }
  }
};

module.exports = Calculate;