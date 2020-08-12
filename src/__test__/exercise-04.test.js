import { mergeArrays } from "../exercise-04";

describe("Tests for mergeArrays", () => {
  it("should return an array of size 10", () => {
    const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 8];
    const largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);
    expect(largeArraySize).toBe(10);
  });

  it("should return a sorted array", () => {
    const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 8];

    const output = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual(output);
  });

  it("should return a sorted array", () => {
    const largeArray = [0, 1, 2].concat(new Array(5));
    const smallArray = [5, 6, 7, 8, 9];

    const output = [0, 1, 2, 5, 6, 7, 8, 9];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual(output);
  });

  it("should return a sorted array", () => {
    const largeArray = [5, 6, 7, 8, 9].concat(new Array(4));
    const smallArray = [0, 1, 2, 3];

    const output = [0, 1, 2, 3, 5, 6, 7, 8, 9];
    mergeArrays(largeArray, smallArray);
    expect(largeArray).toEqual(output);
  });
});
