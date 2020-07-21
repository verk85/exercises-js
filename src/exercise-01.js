//Create a pool of N running tasks from an M sized list. Notify when all tasks are done.
export const taskFactorySample = (delay, resolve, val) => () =>
  new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val));
const tasks = [
  taskFactorySample(500, true, 1),
  taskFactorySample(1000, true, 2),
  taskFactorySample(5000, false, "error"),
  taskFactorySample(2000, true, 4),
  taskFactorySample(1000, false, "error"),
  taskFactorySample(1000, false, "error"),
];
// only run two primises at a time
const batch_size = 2;
/**
 *  Expect to get an array equal to tasks.lenght
 *  with the values or reasons for each of the promises.
 *
 *  [{value: 1}, {value:2}, {error: 'error'}, ...]
 */

//runBatches(tasks, batch_size).then(console.log);
