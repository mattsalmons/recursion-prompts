/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120

// input:
//  -number
// output:
//  -factorial of original input (n!)
// constraints / rules:
//  - should work for positive integers
//  - result is the product of all positive intigers less than or equal to n
// edge cases:
//  - n is less than 0
//  - n is 0 or 1
// approach:
//  - if n is < 0
//    - return null
//  - if n is less than or equal to 1 (base case)
//    - return 1
//  - return n times result of calling factorial on n - 1 (recursive case)

var factorial = function(n) {
  if (n < 0) {
    return null;
  }

  if (n < 2) {
    return 1;
  }

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21

// input:
//  - array of numbers
// output:
//  - integer representing the sum of all numbers in input array
// constraints / rules :
//  - should word for positive and nevative numbers
//  - should work if array had a mix of pos and neg numbers
// edge cases:
//  - if input array is empty return 0
//  - if input array contains only one element return element
// approach:
//  - if input is empty
//    - return 0
//  - if input array has length of 1
//    - return only value
//  - create total var
//  - create inner function
//    - iterate over input
//    - add result of calling inner function on current val to total
//  - return total

// if (!array) {
//   return 0;
// }

// var total = 0;
// for (var i = 0; i < array.length; i++) {
//   total += array[i] + sum(array[i + 1])
// }

// return total;

var sum = function(array) {
    if (!array.length) {
      return 0;
    }

    return array[0] + sum( array.slice(1) )
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var total = 0;

  if (!Array.isArray(array)) {
    return total += array;
  }

  array.forEach(function(value) {
    return total += arraySum(value)
  })

  return total;
};

// 4. Check if a number is even.
// input:
//  - integer
// output:
//  - boolean
//    - true if even, false if odd
// constraints / rules:
//  - no modulo
//  - should work with negative numbers
// edge cases:
//  - if n is negative
// approach:
//  - convert to positive
//  - if n equals 0
//    -return true
//  - return result of calling isEven on n - 2
//   - return false

var isEven = function(n) {
  n = Math.abs(n);

  if (n === 0) {
    return true
  }

  if (n < 2) {
    return false
  }

  return isEven(n - 2)
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

// input:
//  - integer
// output:
//  - integer representing sum of all numbers below (or above) input, until reaching 0
// constraints / rules:
//  - should work for positive or negative numbers
//  - only one argument
//  - function must call itself
//  - must return a number
// approach:
//  - create isNegative flag
//  - convert n to positive
//  - if n is 1
//    - return 0
//  if isNegative flag evaluates to true
//    return negave of n + sumBelow(n - 1)
//  return n + sumBelow(n - 1)

var sumBelow = function(n) {
  var isNegative = n < 0;
  n = Math.abs(n);
  if (n <= 1) {
    return 0;
  }

  if (isNegative) {
    return -( (n - 1) + sumBelow(n - 1));
  }

  return (n - 1) + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]

// input:
//  - two integers representing min and max
// output:
//  - an array of all the numbers between min an max (NOT inclusive)
// constraints / rules:
//  - should accept negative numbers
//  - should return empty array if no numbers are in range
// edge cases :
//  - if no numbers are in range
//  - if y is larger than x
// approach:
//  - create a needsReversed flag
//  - declare min and max variables
//  - if max - min is less than 2
//    - return empty array
//      - otherwise
//    - return result of invoking range on min, max - 1
//

var range = function(x, y) {
  var needsReversed = x > y;

  var min = Math.min(x, y);
  var max = Math.max(x, y);

  if (max - min < 2) {
    return [];
  }

  var inRangeIntegers = range(min, max - 1)
  inRangeIntegers.push(max - 1)
  if (needsReversed) {
    return inRangeIntegers.reverse()
  }

  return inRangeIntegers
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

// input:
//  - two integers
//    - 'base' and 'exponent'
// output:
//  - an intiger representing the result of base to the exp power (base^exp)
// constraints / rules:
//  - no complex math
//  - should accept negative exp
//  - must call itself
// edge cases:
//  - exp is 0
//  - exp is 1
// approach:
//  - create expIsNegative flag
//  - if exp is 0
//    - return 1
//  - if expIsNegative evaluates to false
//    - return base times result of calling exponent on base, exp - 1

var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp < 0) {
    return exponent(base, exp + 1) / base;
  }
  return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

// input:
//  - integer
// output:
//  - boolean
//    - true is n is a factor of 2
//    - false if not
// constraints / rules:
//  - n is positive
// edge cases:
//  - n is 1
// approach:
//
var powerOfTwo = function(n) {
  if (n === 1) {
    return true
  }

  if (n === 0 || n % 2 !== 0) {
    return false;
  }

  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.

var reverse = function(string) {

  var lastIndex = string.length - 1;

  if (string.length === 1) {
    return string
  }

  return string[lastIndex] + reverse(string.slice(0, lastIndex))
};

// 10. Write a function that determines if a string is a palindrome.
// input:
//  - string that may be a palidrome
// output:
//  - boolean
//    - false if input is not a palidrome
//    - true otherwise
// constraints / rules:
//  - can not use rev
//  - ignore spaces and case
//  - must use recursion
//  - must be invoked with only one argument
// edge cases / tests:
//  - string is one character
//  - string is palidrome
//  - string is not a palidrome
//  - string contains spaces
//  - string is mixed case
// approach:
//  - convert input to lowercase
//  - if string is only a single character
//    - return true
//  - if comparing first and last char evals to false
//    - return false
//  - call palidrome on remaining sub string
var palindrome = function(string) {
  string = string.toLowerCase();

  if (string.length < 1) {
    return true;
  } else if (string[0] !== string[string.length - 1]) {
    return false;
  }

  return palindrome(string.slice(1, string.length - 1))
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

// input:
//  - object
//  - target value
// output:
//  - integer representing the number of occurences of target in object
// constraints / rules:
//  - none
// edge cases / test:
//  - input is an empty obj
//  - target value is not found
// approach:
//  - create storage obj
//  - iterate through obj
//    - if obj[key] is not an object
//      - increment storage[target]
//        - otherwise
//      recurse on obj[key], target
//  - return storage[value]
var countValuesInObj = function(obj, target) {
  var total = 0;
  for (var key in obj) {
   var value = obj[key];
   if (typeof value === 'object') {
     total += countValuesInObj(value, target);
   }
   if (value === target) {
     total++
   }
  }
  return total;
}

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.

// obj[oldKey] = value; delete object[oldKey]; object[newKey] = value
// input:
//  - object
//  - old key to be replaced
//  - new key
// output:
//  - mutated input object
// constrains / rules:
//  - should mutate input object
//  - returned object should have same number of keys as input
//  - should use recursion
// edge cases / tests:
//  - na
// approach:
//  - iterate through input obj
//  - create currentValue alias
//  - if currentKey is same as oldKey
//    - delete obj[currentKey]
//    - obj[newKey] = value;
//  - if currentValue is another object
//    - call replaceKeysInObj on value, oldKey, newKey
// return obj
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var currentKey in obj) {
    var currentValue = obj[currentKey];
    if (currentKey === oldKey) {
      delete obj[currentKey];
      obj[newKey] = currentValue;
    }
    if (typeof currentValue === 'object') {
      replaceKeysInObj(currentValue, oldKey, newKey);
    }
  }
  return obj
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
