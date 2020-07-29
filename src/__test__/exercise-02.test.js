import { queryRetry } from "../exercise-02";
import { oneSecondsPassed } from "./__mock__/exercise-02.mock";

/**
 * perform query successfully once or try up to a maximum of maxRetry times
 * if unsuccessful, delay the next attempt for an amount of time. If attempts
 * continue to fail then increase the delay between attempts if delayIncrements
 * is set to true.
 */
test("respects delay increments", async () => {
  const maxRetry = 4;
  const delayIncrement = 250;
  const delay = true;

  const firstTime = Date.now();
  await queryRetry(oneSecondsPassed(), maxRetry, delayIncrement, delay);
  const secondTime = Date.now();
  expect(secondTime - firstTime).toBeGreaterThan(1500);
  expect(secondTime - firstTime).toBeLessThan(1600);
});

test("throws error when retries exceeded", async () => {
  const maxRetry = 4;
  const delayIncrement = 50;
  const delay = true;
  expect.assertions(1);
  try {
    await queryRetry(oneSecondsPassed(), maxRetry, delayIncrement, delay);
  } catch (e) {
    expect(e.message).toEqual("Max retries reached.");
  }
});

test("respects delay without increment", async () => {
  const maxRetry = 4;
  const delayIncrement = 500;
  const delay = false;

  const firstTime = Date.now();
  await queryRetry(oneSecondsPassed(), maxRetry, delayIncrement, delay);
  const secondTime = Date.now();
  expect(secondTime - firstTime).toBeGreaterThan(1000);
  expect(secondTime - firstTime).toBeLessThan(1100);
});

test("respects delay without increment", async () => {
  const maxRetry = 4;
  const delayIncrement = 500;
  const delay = false;

  const firstTime = Date.now();
  await queryRetry(oneSecondsPassed(), maxRetry, delayIncrement, delay);
  const secondTime = Date.now();
  expect(secondTime - firstTime).toBeGreaterThan(1000);
  expect(secondTime - firstTime).toBeLessThan(1100);
});
test("reeturns expected output", async () => {
  const maxRetry = 4;
  const delayIncrement = 500;
  const delay = false;
  const data = await queryRetry(
    oneSecondsPassed(),
    maxRetry,
    delayIncrement,
    delay
  );

  expect(data).toBe(`Successful Try`);
});
