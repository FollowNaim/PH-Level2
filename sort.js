// selectionSort([5, 3, 8, 4, 2]);

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = minIndex + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
        console.log("new min index", arr[minIndex]);
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      console.log("swap", temp);
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([5, 3, 8, 4, 2]));
