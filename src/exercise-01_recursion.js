//Create a pool of N running tasks from an M sized list. Notify when all tasks are done.
export const taskFactorySample = (delay, resolve, val) => () =>
  new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val));
export const tasks = [
  taskFactorySample(1000, true, 1),
  taskFactorySample(2000, true, 2),
  taskFactorySample(3000, false, "error"),
  taskFactorySample(4000, true, 4),
  taskFactorySample(5000, false, "error"),
  taskFactorySample(6000, false, "error"),
  taskFactorySample(7000, true, 5),
];
// only run two promises at a time
export const batch_size = 2;
/**
 *  Expect to get an array equal to tasks.lenght
 *  with the values or reasons for each of the promises.
 *
 *  [{value: 1}, {value:2}, {error: 'error'}, ...]
 */

export function runBatches(tasks, batch_size) {
  let index = 0;
  const tasksResolved = [];
  const tasksExecuting = [];

  const enqueue = function () {
    if (index === tasks.length) {
      return Promise.resolve();
    }

    const p = Promise.resolve(tasks[index++]())
      .then((value) => {
        return { value };
      })
      .catch((error) => {
        return { error };
      });

    tasksResolved.push(p);

    const e = p.then(() => tasksExecuting.splice(tasksExecuting.indexOf(e), 1));
    tasksExecuting.push(e);

    let r = Promise.resolve();

    if (tasksExecuting.length >= batch_size) {
      r = Promise.race(tasksExecuting);
    }
    return r.then(() => enqueue());
  };
  return enqueue().then(() => Promise.all(tasksResolved));
}
//runBatches(tasks, batch_size).then(console.log);
