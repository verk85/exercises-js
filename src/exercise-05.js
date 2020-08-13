// A11 - Write a function that will reverse N sized blocks of an array.

export function reverseBlocks(arr, blockSize) {
  let slices = 1;
  let swapPosition;
  let shouldSwap = false;

  for (let i = 0; i < arr.length; i++) {
    if (i + blockSize === blockSize * slices) {
      swapPosition = blockSize * slices - 1;
      slices++;
    }
    // prettier-ignore
    if (i < (Math.floor((blockSize* (slices-1))-(blockSize / 2) ))) {
      shouldSwap = true;
    } else {
      shouldSwap = false;
    }

    if (shouldSwap && swapPosition <= arr.length - 1) {
      [arr[i], arr[swapPosition]] = [arr[swapPosition], arr[i]];
    }
    swapPosition--;
  }

  return arr;
}
