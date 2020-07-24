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
  const mockTasksTime = [
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
  ];
  const [{ value: value1 }] = await runBatches(mockTasksTime, 2);
  const date = Date.now();
  expect(value1 / 10000).toBeCloseTo((date - 1500) / 10000);
});

test("respect batch sizes 2", async () => {
  const mockTasksTime = [
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
  ];
  const [{ value: value1 }] = await runBatches(mockTasksTime, 6);
  const date = Date.now();
  expect(value1 / 10000).toBeCloseTo((date - 500) / 10000);
});
test("expected runtime", async () => {
  const mockTasksTime = [
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
  ];
  const date1 = Date.now();
  await runBatches(mockTasksTime, 2);
  const date2 = Date.now();
  expect(date2 - date1).toBeGreaterThanOrEqual(1500);
  expect(date2 - date1).toBeLessThan(1550);
});

test("expected runtime 2", async () => {
  const mockTasksTime = [
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
    mockTaskFactory(500, true, Date.now()),
  ];
  const date1 = Date.now();
  await runBatches(mockTasksTime, 6);
  const date2 = Date.now();
  expect(date2 - date1).toBeGreaterThanOrEqual(500);
  expect(date2 - date1).toBeLessThan(550);
});
