console.clear();

function isPalindrome(word) {
  if (typeof word !== "string") {
    return "Please put in a string";
  }
  reversed_word = word.split("").reverse().join("");
  if (word === reversed_word) {
    return "True";
  } else {
    return "False";
  }
}

const word = "ana";
const reversedWord = isPalindrome(word);
console.log(reversedWord); // 'True'