import { example } from "./example.js";

describe("example func test: ", () => {
  it("example: ", () => {
    expect(example(1, 2)).toBe(3);
  });
});
