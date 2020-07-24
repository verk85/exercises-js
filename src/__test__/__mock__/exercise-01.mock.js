export const mockTaskFactory = (delay, resolve, val) => () =>
  new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val));
