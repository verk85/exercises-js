export const fetchURL = "https://pokeapi.co/api/v2/pokemon/ditto/";

export const cancellableFetch = (fetchURL) => {
  let cancel;
  const result = new Promise((resolve, reject) => {
    cancel = reject;
    fetch(fetchURL).then(resolve).catch(reject);
  });
  result.cancel = cancel;
  return result;
};
