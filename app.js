// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
 
  for (var i = digits.length - 1; i >= 0; i-- ){
      var focusedElement = digits[i]; // actual element
      if (focusedElement !== 9){
          focusedElement += 1;
          let updateElement = digits.splice(i,1,focusedElement)
          return digits;

          
      } else if (focusedElement === 9){
          let updateElementWithZero = digits.splice(i,1,0) 
          // take the current index, remove it and add zero
          //update next element by one 
          if (digits[0] === 0){
              let insertOne = digits.unshift(1);
              return digits;
          }
      } 
      
  } 
};