import { __greeter } from "../fetch_with_retry";
import { HELLO_MESSAGE } from "./__mocks__/constatnts";

test("My Greeter", () => {
  expect(__greeter("Carl")).toBe(HELLO_MESSAGE);
});
