import { mergeArrays } from "./exercise-04";

const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
const smallArray = [0, 2, 4, 6, 8];
const largeArraySize = largeArray.length;

mergeArrays(largeArray, smallArray);

console.log(largeArray); // Expecting: [0,1,2,3,4,5,6,7,8,9]
console.log(largeArraySize === largeArray.length);
