import { cancellableFetch, fetchURL } from "./exercise-03";
// Create a function that resolve in 1 seconds. (We will cancel it in 0.5 secs)
const result = cancellableFetch(fetchURL);

result
  .then((data) => {
    console.log("Done: ", data);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

result.cancel(new Error("Promise cancelled"));
