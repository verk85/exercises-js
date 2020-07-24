import { taskFactorySample, tasks, runBatches } from "../exercise-01";

const mockTasks = [
  taskFactorySample(0, true, 1),
  taskFactorySample(0, true, 2),
];

test("returns a function that returns a promise", () => {
  expect(taskFactorySample(0, true, 1)() instanceof Promise).toBeTruthy();
});

test("is an array", () => {
  expect(Array.isArray(tasks)).toBeTruthy();
});

test("returns an array", async () => {
  const data = await runBatches(mockTasks, 2);
  expect(Array.isArray(data)).toBeTruthy();
});

test("returns an Array of same size that it receives", async () => {
  const data = await runBatches(mockTasks, 2);
  expect(mockTasks.length).toBe(data.length);
});
