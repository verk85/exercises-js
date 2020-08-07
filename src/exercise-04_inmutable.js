// A6 - Merge two sorted arrays where one has enough space at the end for the other

export function mergeArrays(arrOne, arrTwo) {
  let sizeArrOne = arrOne.length;
  let sizeArrTwo = arrTwo.length;
  const newArr = new Array(sizeArrOne + sizeArrTwo);
  let [indexOne, indexTwo, indexNew] = [0, 0, 0];

  while (indexOne < sizeArrOne && indexTwo < sizeArrTwo) {
    if (arrOne[indexOne] < arrTwo[indexTwo]) {
      newArr[indexNew++] = arrOne[indexOne++];
    } else {
      newArr[indexNew++] = arrTwo[indexTwo++];
    }
  }

  while (indexOne < sizeArrOne) newArr[indexNew++] = arrOne[indexOne++];

  while (indexTwo < sizeArrTwo) newArr[indexNew++] = arrTwo[indexNew++];

  return newArr;
}

// mergeArrays(largeArray, smallArray);
// console.log(largeArray); // Expecting: [0,1,2,3,4,5,6,7,8,9]
// console.log(largeArraySize === largeArray.length)
