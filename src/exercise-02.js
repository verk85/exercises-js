export const urlQuery = (url) => () => fetch(url);

// const maxRetry = 3;
// const delayIncrement = 1000;
// const delay = true;

/**
 * perform query successfully once or try up to a maximum of maxRetry times
 * if unsuccessful, delay the next attempt for an amount of time. If attempts
 * continue to fail then increase the delay between attempts if delayIncrements
 * is set to true.
 */

export async function queryRetry(
  fn,
  maxRetry = 3,
  delayIncrement = 1000,
  delay = false
) {
  try {
    const val = await fn();
    return val;
  } catch (error) {
    console.log("Attemps left: ", maxRetry);
    if (maxRetry) {
      await new Promise((r) => setTimeout(r, delayIncrement));
      return queryRetry(
        fn,
        maxRetry - 1,
        delay ? delayIncrement + delayIncrement : delayIncrement,
        delay
      );
    } else throw new Error("Max retries reached");
  }
}

// queryRetry(
//   urlQuery("https://pokeapi.co/api/v2/pokemon/ditto"),
//   maxRetry,
//   delay,
//   delayIncrement
// )
//   .then(handleSuccess)
//   .catch(handleErrorOrMaxRetryExceeded);
