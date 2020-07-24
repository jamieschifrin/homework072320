// sum of all numbers

function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i = min; i <= max; i++) {
      temp += i;
    }
    return temp;
  }
  
  sumAll([1, 4]);

//   sum all fib numbers

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
  
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  
  // test here
  sumFibs(4);

//   sorted union


function uniteUnique(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    var finalArray = [];
  
    // Loop through the arguments object to truly make the program work with two or more arrays
    // instead of 3.
    for (var i = 0; i < arguments.length; i++) {
      var arrayArguments = arguments[i];
  
      // Loops through the array at hand
      for (var j = 0; j < arrayArguments.length; j++) {
        var indexValue = arrayArguments[j];
  
        // Checks if the value is already on the final array.
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
  
    return finalArray;
  }
  
  // test here
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);