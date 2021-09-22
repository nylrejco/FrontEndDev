console.clear();

function fizzbuzz(range) {
  if (typeof range !== "number") {
    return "Please enter a number for the range.";
  }
  for (let num = 0; num < range + 1; num++) {
    const multiple_3 = num % 3 === 0;
    const multiple_5 = num % 5 === 0;

    if (multiple_3 && multiple_5) {
      console.log("FizzBuzz");
    } else if (multiple_3) {
      console.log("Fizz");
    } else if (multiple_5) {
      console.log("Buzz");
    } else {
      console.log(num);
    }
  }
  return "End of given range.";
}

fizzbuzz(100);
