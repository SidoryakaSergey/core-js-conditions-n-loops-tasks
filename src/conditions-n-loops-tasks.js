/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  const row = queen.y === king.y;
  const col = queen.x === king.x;
  const diagonal = Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y);

  return row || col || diagonal;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  const isValid = a + b > c && a + c > b && b + c > a;
  if (!isValid) {
    return false;
  }
  return a === b || b === c || a === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const romanNumerals = {
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  };

  const keys = [10, 9, 5, 4, 1];
  let result = '';
  let tempNum = num;

  for (let i = 0; i < keys.length; i += 1) {
    const value = keys[i];
    const symbol = romanNumerals[value];

    while (tempNum >= value) {
      result += symbol;
      tempNum -= value;
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const digitToWord = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    '.': 'point',
    ',': 'point',
    '-': 'minus',
  };

  let result = '';
  let i = 0;

  if (numberStr[0] === '-') {
    result = digitToWord['-'];
    i = 1;
  }

  while (i < numberStr.length) {
    const char = numberStr[i];

    switch (char) {
      case '0':
        if (result !== '') result += ' ';
        result += digitToWord['0'];
        break;
      case '1':
        if (result !== '') result += ' ';
        result += digitToWord['1'];
        break;
      case '2':
        if (result !== '') result += ' ';
        result += digitToWord['2'];
        break;
      case '3':
        if (result !== '') result += ' ';
        result += digitToWord['3'];
        break;
      case '4':
        if (result !== '') result += ' ';
        result += digitToWord['4'];
        break;
      case '5':
        if (result !== '') result += ' ';
        result += digitToWord['5'];
        break;
      case '6':
        if (result !== '') result += ' ';
        result += digitToWord['6'];
        break;
      case '7':
        if (result !== '') result += ' ';
        result += digitToWord['7'];
        break;
      case '8':
        if (result !== '') result += ' ';
        result += digitToWord['8'];
        break;
      case '9':
        if (result !== '') result += ' ';
        result += digitToWord['9'];
        break;
      case '.':
      case ',':
        if (result !== '') result += ' ';
        result += digitToWord['.'];
        break;
      default:
        break;
    }

    i += 1;
  }

  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const len = str.length;

  for (let i = 0; i < Math.floor(len / 2); i += 1) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let curNum = num;
  do {
    const curDigit = curNum % 10;
    if (curDigit === digit) {
      return true;
    }
    curNum = Math.trunc(curNum / 10);
  } while (curNum > 0);

  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let allSum = 0;
  let leftSum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    allSum += arr[i];
  }

  for (let i = 0; i < arr.length; i += 1) {
    const rightSum = allSum - leftSum - arr[i];

    if (leftSum === rightSum) {
      return i;
    }

    leftSum += arr[i];
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  if (size <= 0) return [];

  const matrix = [];
  for (let i = 0; i < size; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      matrix[i][j] = 0;
    }
  }

  let currentNumber = 1;
  let top = 0;
  let bottom = size - 1;
  let left = 0;
  let right = size - 1;

  while (currentNumber <= size * size) {
    for (let i = left; i <= right; i += 1) {
      matrix[top][i] = currentNumber;
      currentNumber += 1;
    }
    top += 1;

    for (let i = top; i <= bottom; i += 1) {
      matrix[i][right] = currentNumber;
      currentNumber += 1;
    }
    right -= 1;

    for (let i = right; i >= left; i -= 1) {
      matrix[bottom][i] = currentNumber;
      currentNumber += 1;
    }
    bottom -= 1;

    for (let i = bottom; i >= top; i -= 1) {
      matrix[i][left] = currentNumber;
      currentNumber += 1;
    }
    left += 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const rotated = [...matrix];
  const n = rotated.length;

  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const temp = rotated[i][j];
      rotated[i][j] = rotated[j][i];
      rotated[j][i] = temp;
    }
  }

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < Math.floor(n / 2); j += 1) {
      const temp = rotated[i][j];
      rotated[i][j] = rotated[i][n - 1 - j];
      rotated[i][n - 1 - j] = temp;
    }
  }
  return rotated;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const copy = arr;

  for (let i = 1; i < arr.length; i += 1) {
    const cur = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > cur; j -= 1) {
      copy[j + 1] = arr[j];
    }
    copy[j + 1] = cur;
  }
  return copy;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const len = str.length;
  if (len <= 1 || iterations <= 0) return str;

  const arr = new Array(len);
  for (let i = 0; i < len; i += 1) {
    arr[i] = str[i];
  }

  const originalState = [...arr];
  let cycleLength = 0;
  let isOriginal = false;

  let current = [...arr];
  let next = new Array(len);

  while (!isOriginal && cycleLength <= len) {
    let evenIndex = 0;
    let oddIndex = Math.floor(len / 2);

    for (let i = 0; i < len; i += 1) {
      if (i % 2 === 0) {
        next[evenIndex] = current[i];
        evenIndex += 1;
      } else {
        next[oddIndex] = current[i];
        oddIndex += 1;
      }
    }

    cycleLength += 1;

    isOriginal = true;
    for (let i = 0; i < len; i += 1) {
      if (next[i] !== originalState[i]) {
        isOriginal = false;
        break;
      }
    }

    const temp = current;
    current = next;
    next = temp;
  }

  const effectiveIterations = iterations % cycleLength;

  for (let iter = 0; iter < effectiveIterations; iter += 1) {
    let evenIndex = 0;
    let oddIndex = Math.floor(len / 2);

    for (let i = 0; i < len; i += 1) {
      if (i % 2 === 0) {
        next[evenIndex] = current[i];
        evenIndex += 1;
      } else {
        next[oddIndex] = current[i];
        oddIndex += 1;
      }
    }

    const temp = current;
    current = next;
    next = temp;
  }

  let result = '';
  for (let i = 0; i < len; i += 1) {
    result += current[i];
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const digits = [];
  let temp = number;
  while (temp > 0) {
    digits.unshift(temp % 10);
    temp = Math.floor(temp / 10);
  }
  const n = digits.length;
  let i = n - 2;
  while (i >= 0 && digits[i] >= digits[i + 1]) {
    i -= 1;
  }

  if (i < 0) return number;

  let j = n - 1;
  while (digits[j] <= digits[i]) {
    j -= 1;
  }

  const tempSwap = digits[i];
  digits[i] = digits[j];
  digits[j] = tempSwap;

  const sortedRightPart = [];
  for (let k = i + 1; k < n; k += 1) {
    sortedRightPart.push(digits[k]);
  }

  for (let x = i + 1, sortedIndex = 0; x < n; x += 1) {
    let minIndex = sortedIndex;
    for (let y = sortedIndex + 1; y < sortedRightPart.length; y += 1) {
      if (sortedRightPart[y] < sortedRightPart[minIndex]) {
        minIndex = y;
      }
    }

    const tempValue = sortedRightPart[sortedIndex];
    sortedRightPart[sortedIndex] = sortedRightPart[minIndex];
    sortedRightPart[minIndex] = tempValue;

    digits[x] = sortedRightPart[sortedIndex];
    sortedIndex += 1;
  }

  let result = 0;
  for (let d = 0; d < n; d += 1) {
    result = result * 10 + digits[d];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
