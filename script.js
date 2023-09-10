// 1.Given an array of integers, rearrange the elements in a way that all the even numbers
// come before the odd numbers.
// Test case:
// console.log(rearrangeEvenOdd([5, 3, 9, 2, 7])); // Output: [2, 5, 3, 9, 7]
// console.log(rearrangeEvenOdd([10, -5, 0, 15, 20])); // Output: [10, 0, -5, 15, 20]

console.log("Prblm No. : 1");
function rearrangeEvenOdd(arr) {
  arr.sort((a, b) =>
    a % 2 === 0 && b % 2 !== 0 ? -1 : a % 2 !== 0 && b % 2 === 0 ? 1 : 0
  );
  return arr;
}
console.log(rearrangeEvenOdd([5, 3, 9, 2, 7]));
console.log(rearrangeEvenOdd([10, -5, 0, 15, 20]));
console.log("<--------------------------->");


// 2. Write a function to find the missing number in an array of integers from 1 to N.
// Test case:
// console.log(findMissingNumber([1, 2, 4, 5])); // Output: 3
// console.log(findMissingNumber([10, 7, 3, 5, 8, 1, 4, 6, 2])); // Output: 9

console.log("Prblm No. : 2");
function missingNum(arr) {

  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  const arraySum = arr.reduce((acc, num) => acc + num, 0);
  return totalSum - arraySum;
}

console.log(missingNum([1, 2, 4, 5]));
console.log(missingNum([10, 7, 3, 5, 8, 1, 4, 6, 2]));
console.log("<--------------------------->");

// 3. Given a string with parentheses, check if it is balanced (each opening parenthesis
// has a corresponding closing parenthesis).
// Test case:
// console.log(isBalancedParentheses(&quot;(()(()))&quot;)); // Output: true
// console.log(isBalancedParentheses(&quot;(()(())))&quot;)); // Output: false

console.log("Prblm No. : 3");
function isBalancedParentheses(inputString) {
  const stack = [];
  
  for (const char of inputString) 
  {
    if (char === '(') 
    {
        stack.push(char);
    } 
    else if (char === ')') 
    {
    if (stack.length === 0) 
    {
        return false;
    }
    stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(isBalancedParentheses("(()(()))")); 
console.log(isBalancedParentheses("(()(())))"));
console.log("<--------------------------->");


// 4. Implement a function to convert a decimal number to its binary representation.
// Test case:
// console.log(decimalToBinary(10)); // Output: &quot;1010&quot;
// console.log(decimalToBinary(25)); // Output: &quot;11001&quot;

console.log("Prblm No. : 4");
function decimalToBinary(decimal) 
{
    if (!Number.isInteger(decimal) || decimal < 0) {
    return "Invalid input. Please provide a non-negative integer.";
  }
  if (decimal === 0) 
  {
    return "0";
  }

  let binary = "";
  
  while (decimal > 0) 
  {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  
  return binary;
}

console.log(decimalToBinary(10));
console.log(decimalToBinary(25));
console.log("<--------------------------->");

// 5. Implement a function that returns the longest word in a sentence.
// Test case:
// console.log(longestWord(&quot;I love programming&quot;)); // Output: &quot;programming&quot;
// console.log(longestWord(&quot;JavaScript is awesome&quot;)); // Output: &quot;JavaScript&quot;

console.log("Prblm No. : 5");
function longestWord(sentence) 
{
    const words = sentence.split(" ");
    let longest = "";
    for (const word of words) 
    {
        if (word.length > longest.length) {
        longest = word;
    }
}
return longest;
}
console.log(longestWord("I love programming"));
console.log(longestWord("JavaScript is awesome"));
console.log("<--------------------------->");

// 6. Given a matrix (2D array), rotate it 90 degrees clockwise
// Test case:
// console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
// console.log(rotateMatrix([[10, 11], [12, 13]])); // Output: [[12, 10], [13, 11]]

console.log("Prblm No. : 6");
function rotateMatrix(matrix) 
{
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const rotatedMatrix = [];
    for (let col = 0; col < numCols; col++) {
    const newRow = [];
    for (let row = numRows - 1; row >= 0; row--) {
    newRow.push(matrix[row][col]);
    }
    rotatedMatrix.push(newRow);
}
return rotatedMatrix;
}
console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(rotateMatrix([[10, 11], [12, 13]]));
console.log("<--------------------------->");


// 7. Write a function to check if a given string contains only unique characters (no
// repeating characters).
// Test case:
// console.log(areCharactersUnique(&quot;hello&quot;)); // Output: false
// console.log(areCharactersUnique(&quot;world&quot;)); // Output: true

console.log("Prblm No. : 7");
function areCharactersUnique(str) 
{
    const charSet = new Set();
    for (const char of str) 
    {
        if (charSet.has(char)) 
        {
            return false;
        }
        charSet.add(char);
    }
return true;
}
console.log(areCharactersUnique("hello"));
console.log(areCharactersUnique("world")); 
console.log("<--------------------------->");

// 8. Given an array of integers and a target sum, find the index of two numbers that add
// up to the target sum.
// Test case:
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]

console.log("Prblm No. : 8");
function twoSum(nums, target) 
{
    const numIndices = {};
    for (let i = 0; i < nums.length; i++) 
    {
        const complement = target - nums[i];
        if (numIndices.hasOwnProperty(complement))  
        {
            return [numIndices[complement], i];
        }
        numIndices[nums[i]] = i;
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log("<--------------------------->");


// 9.Write a function that generates all possible combinations of a given string.
// Test case:
// console.log(allCombinations(&quot;abc&quot;)); // Output: [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;ab&#39;, &#39;ac&#39;, &#39;bc&#39;, &#39;abc&#39;]
// console.log(allCombinations(&quot;dog&quot;)); // Output: [&#39;d&#39;, &#39;o&#39;, &#39;g&#39;, &#39;do&#39;, &#39;dg&#39;, &#39;og&#39;, &#39;dog&#39;]

console.log("Prblm No. : 9");
console.log("<--------------------------->");

// 10. Given a string, find the most frequent character(s) and their count(s).
// Test case:
// console.log(mostFrequentCharacter(&quot;hello&quot;)); // Output: { h: 1, e: 1, l: 2, o: 1 }
// console.log(mostFrequentCharacter(&quot;abracadabra&quot;)); // Output: { a: 4, b: 2, r: 2 }
console.log("Prblm No. : 10");
console.log("<--------------------------->");