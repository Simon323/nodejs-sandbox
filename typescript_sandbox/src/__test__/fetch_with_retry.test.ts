import fetchWithRetry, { __greeter } from "../fetch_with_retry";
import { HELLO_MESSAGE } from "./__mocks__/constatnts";
const fetchMock = require("fetch-mock");

interface LoadTest {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

fetchMock.get(
  "https://jsonplaceholder.typicode.com/todos/1",
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  } as LoadTest,
  { delay: 1000 }
);

test("My Greeter", () => {
  expect(__greeter("Carl")).toBe(HELLO_MESSAGE);
});

test("Mock http response", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = await response.json();

  expect(result).toEqual({
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  });
});

test("Test fetch with retry", async () => {
  const response = await fetchWithRetry(
    "https://jsonplaceholder.typicode.com/todos/1",
    {},
    { timeoutInSeconds: 2, tries: 2 }
  );
  const result = await response.json();

  expect(result).toEqual({
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  });
});
