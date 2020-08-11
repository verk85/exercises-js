// A6 - Merge two sorted arrays where one has enough space at the end for the other

export function mergeArrays(largeArray, smallArray) {
  let [largeArraySize, largeArrayIndex, smallArrayIndex] = [
    largeArray.length,

    0,
    0,
  ];

  for (
    largeArrayIndex;
    largeArrayIndex < largeArraySize - 1;
    largeArrayIndex++
  ) {
    if (largeArray[largeArrayIndex] < smallArray[smallArrayIndex]) {
      continue;
    } else {
      largeArray.copyWithin(largeArrayIndex + 1, largeArrayIndex);
      largeArray[largeArrayIndex] = smallArray[smallArrayIndex++];
    }
  }
}
