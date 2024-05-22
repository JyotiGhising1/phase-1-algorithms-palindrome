
function isPalindrome(word) {
  // Write your algorithm here
  for(let leftPointer = 0 ; leftPointer < word.length / 2; leftPointer++){
    let rightPointer = word.length - leftPointer - 1
    if(word[leftPointer] != word[rightPointer]){
      return false
    }
    else {
      return true
    }
  }
}
/* 
  Add your pseudocode here
  Write a function isPalindrome that will receive one argument, a string. Your function should return true if the string is a palindrome (that is, if it reads the same forwards and backwards, like "mom" or "racecar"), and return false if it is not a palindrome.
  function isPalindrome(word)
  for leftpointer FROM 0 to length of inputString / 2
    SET rightPointer TO length of inputString - leftPointer -1
    IF charcter at leftpointer is not equal to character at rightPointer 
      RETURN FALSE
    END FOR 

    IF all charcter match 
    RETURN true
    END FUNCTION
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
