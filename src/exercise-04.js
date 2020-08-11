// A6 - Merge two sorted arrays where one has enough space at the end for the other

export function mergeArrays(largeArray, smallArray) {
  let [largeArrSize, smallArrSize, indexLargeArr, indexSmallArr] = [
    largeArray.length,
    smallArray.length,
    0,
    0,
  ];

  while (indexLargeArr < largeArrSize && indexSmallArr < smallArrSize) {
    if (largeArray[indexLargeArr] < smallArray[indexSmallArr]) {
      indexLargeArr++;
    } else {
      for (let i = largeArrSize - 1; i > indexLargeArr; i--) {
        largeArray[i] = largeArray[i - 1];
      }
      largeArray[indexLargeArr++] = smallArray[indexSmallArr++];
    }
  }
  return largeArray;
}
