import { reverseBlocks } from "../exercise-05";

describe("Tests for reverseBlocks", () => {
  it("should return an array of size 10", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 3;
    const result = reverseBlocks(arr, blockSize);

    expect(result.length).toBe(10);
  });
  it("should return the array in a specific form", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 3;
    const result = reverseBlocks(arr, blockSize);
    const expectedOutput = [2, 1, 0, 5, 4, 3, 8, 7, 6, 9];

    expect(result).toEqual(expectedOutput);
  });
  it("should return the array in a specific form", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const blockSize = 2;
    const result = reverseBlocks(arr, blockSize);
    const expectedOutput = [1, 0, 3, 2, 5, 4, 7, 6, 9, 8, 10];

    expect(result).toEqual(expectedOutput);
  });

  it("should return the array in a specific form", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const blockSize = 10;
    const result = reverseBlocks(arr, blockSize);
    const expectedOutput = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 10];

    expect(result).toEqual(expectedOutput);
  });

  it("should return the array in a specific form", () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 10;
    const result = reverseBlocks(arr, blockSize);
    const expectedOutput = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    expect(result).toEqual(expectedOutput);
  });
});
