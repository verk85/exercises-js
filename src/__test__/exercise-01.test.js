import { runBatches } from "../exercise-01";
import { mockTaskFactory } from "./__mock__/exercise-01.mock";

const mockTasks = [
  mockTaskFactory(100, true, 1),
  mockTaskFactory(200, false, "error"),
];

test("returns an array", async () => {
  const data = await runBatches(mockTasks, 2);
  expect(Array.isArray(data)).toBeTruthy();
});

test("returns an array of same size that it receives", async () => {
  const data = await runBatches(mockTasks, 2);
  expect(data.length).toBe(2);
});

test("outputs in expected format", () => {
  const output = [{ value: 1 }, { error: "error" }];
  expect(runBatches(mockTasks, 2)).resolves.toEqual(output);
});

test("respect batch sizes", async () => {
  const mockTasks = [
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
  ];
  const [{ value: value1 }, { value: value2 }] = await runBatches(mockTasks, 2);
  const date = Date.now();

  expect(value1 / 1000).toBeCloseTo((date - 500) / 1000);
});
