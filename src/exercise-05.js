// A11 - Write a function that will reverse N sized blocks of an array.

export function reverseBlocks(arr, blockSize) {
  const ret = [];
  let slices = 1;
  for (let i = 0; i < arr.length; i += blockSize) {
    ret.push(...arr.slice(i, blockSize * slices).reverse());
    slices++;
  }
  return ret;
}
