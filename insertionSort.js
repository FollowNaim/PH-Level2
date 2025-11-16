const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentNumber = arr[i];
    let j = i - 1;
    while (currentNumber < arr[j] && currentNumber >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentNumber;
  }
  return arr;
};

console.log(insertionSort([5, 3, 8, 4, 2]));
