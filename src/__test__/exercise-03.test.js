import { cancellableFetch, fetchURL } from "../exercise-03";
import { pokeResponse } from "./__mock__/exercise-03.mock";
global.fetch = jest.fn(() => Promise.resolve(pokeResponse));

describe("Test cancellable fetch", () => {
  it("should return and object in specific form", () => {
    const result = cancellableFetch(fetchURL);

    return result.then((data) => {
      expect(data).toEqual(pokeResponse);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(fetchURL);
    });
  });
  it("should throw an error when canceled", () => {
    const result = cancellableFetch(fetchURL);
    result.cancel("Promise cancelled");
    return result.catch((e) => {
      expect(e).toMatch("Promise cancelled");
      expect(fetch).toHaveBeenCalledWith(fetchURL);
    });
  });
  it("should throw an error when url is incorrect", () => {
    const result = cancellableFetch(fetchURL + "1");
    return result.catch((err) => {
      expect(err).toMatch("error");
      expect(fetch).not.toHaveBeenCalledWith(fetchURL);
    });
  });
});
