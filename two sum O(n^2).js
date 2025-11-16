// Problem Statement

// Given an array of integers numbers and an integer target,
// return the indices of two numbers such that they add up to target.
// If there is no solution then return undefined

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Time Complexity => O(n)

//? Input
// [2, 11, 7, 15] and 9

//? Output
// [0, 2] (because 2 + 7 = 9)

const twoSum = (arr, int) => {
  let sum = 0;
  const arr2 = [...arr];
  for (let m = 0; m < arr.length - 1; m++) {
    sum = arr[m];
    for (let i = 0; i < arr2.length - 1; i++) {
      sum += arr2[i];
      if (sum == int) {
        console.log(sum, arr[m], arr2[i]);
        return [m, i];
      }
    }
  }
  return undefined;
};

console.log(twoSum([3, 11, 7, 15], 9));
