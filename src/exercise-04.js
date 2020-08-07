// A6 - Merge two sorted arrays where one has enough space at the end for the other

export function mergeArrays(largeArray, smallArray) {
  let [largeArrSize, smallArrSize, indexLargeArr, indexSmallArr] = [
    largeArray.length,
    smallArray.length,
    0,
    0,
  ];
  let substitute;
  while (indexLargeArr < largeArrSize && indexSmallArr < smallArrSize) {
    if (largeArray[indexLargeArr] < smallArray[indexSmallArr]) {
      indexLargeArr++;
    } else {
      largeArray.pop();
      substitute = largeArray.splice(indexLargeArr++);
      largeArray.push(smallArray[indexSmallArr++]);
      largeArray.push(...substitute);
    }
  }
  return largeArray;
}
