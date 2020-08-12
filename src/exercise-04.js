// A6 - Merge two sorted arrays where one has enough space at the end for the other

export function mergeArrays(largeArray, smallArray) {
  let [largeArrayLastPosition, smallArrayLastPosition, largeArrayIndex] = [
    smallArray.length - 1,
    smallArray.length - 1,
    largeArray.length - 1,
  ];

  while (smallArrayLastPosition >= 0) {
    if (
      largeArray[largeArrayLastPosition] < smallArray[smallArrayLastPosition] ||
      largeArrayLastPosition < 0
    ) {
      largeArray[largeArrayIndex--] = smallArray[smallArrayLastPosition--];
    } else {
      [largeArray[largeArrayIndex], largeArray[largeArrayLastPosition]] = [
        largeArray[largeArrayLastPosition],
        largeArray[largeArrayIndex],
      ];
      largeArrayIndex--;
      largeArrayLastPosition--;
    }
  }
}
