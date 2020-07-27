const urlQuery = (url) => () => fetch(url);

const maxRetry = 3;
const delayIncrement = 1000;
const delay = true;

/**
 * perform query successfully once or try up to a maximum of maxRetry times
 * if unsuccessful, delay the next attempt for an amount of time. If attempts
 * continue to fail then increase the delay between attempts if delayIncrements
 * is set to true.
 */

async function queryRetry(
  fn,
  maxRetry = 3,
  delayIncrement = 1000,
  delay = false
) {
  try {
    const val = await fn();
    return val;
  } catch (error) {
    if (maxRetry) {
      await new Promise((r) => setTimeout(r, delayIncrement));
      return retry(
        fn,
        maxRetry - 1,
        delay ? delayIncrement + delayIncrement : delayIncrement,
        delay
      );
    } else throw new Error("Max retries reached");
  }
}

queryRetry(urlQuery("some/url"), maxRetry, delay, delayIncrement)
  .then(handleSuccess)
  .catch(handleErrorOrMaxRetryExceeded);
