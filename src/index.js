import { queryRetry, urlQuery } from "./exercise-02";

const maxRetry = 4;
const delayIncrement = 500;
const delay = true;

var date = new Date();
// resolve when more than 2sec from start date
async function twoSecondsPassed() {
  const curr = new Date() - date;
  if (curr > 2000) return `yay! ${curr}`;
  else throw `${curr} < 2000`;
}

(async () => {
  // retry 5 times with exponential backoff (100ms, 200ms, 400ms, 800ms, 1.6s, err)
  const data = await queryRetry(
    twoSecondsPassed,
    maxRetry,
    delayIncrement,
    delay
  );
  // retry infinite times with 10 inbetween (10ms, 10ms, 10ms, ...)
  // const data = await retry(twoSecondsPassed, -1, 10);
  // retry infinite times with 10 inbetween with exponential backoff (10ms, 20ms, 40ms, ...)
  // const data = await retry(twoSecondsPassed, -1, 10, true);
  // retry 5 times with a second inbetween (1s, 1s, 1s, 1s, 1s, err)
  // const data = await retry(twoSecondsPassed);
  console.log(data);
})();

// queryRetry(
//   urlQuery("https://pokeapi.co/api/v2/pokemon/ditto"),
//   maxRetry,
//   delay,
//   delayIncrement
// )
//   .then(console.log)
//   .catch(console.log);
