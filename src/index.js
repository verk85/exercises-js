import { queryRetry } from "./exercise-02";

const maxRetry = 4;
const delayIncrement = 250;
const delay = true;

var date = new Date();
// resolve when more than 2sec from start date
async function twoSecondsPassed() {
  const curr = new Date() - date;
  if (curr > 1000) return `yay! ${curr}`;
  else throw `${curr} < 1000`;
}

// retry 5 times with exponential backoff (100ms, 200ms, 400ms, 800ms, 1.6s, err)
queryRetry(twoSecondsPassed, maxRetry, delayIncrement, delay)
  .then(console.log)
  .catch(console.log);

// queryRetry(
//   urlQuery("https://pokeapi.co/api/v2/pokemon/ditto"),
//   maxRetry,
//   delay,
//   delayIncrement
// )
//   .then(console.log)
//   .catch(console.log);
