interface Options {
  timeoutInSeconds: number;
  tries: number;
}

/**
 * Make api fetch with retries
 * @param url URL to fetch
 * @param init Request init options
 * @param options All options required
 * @param options.timeoutInSeconds Max timeout, in seconds (default: 10)
 * @param {retries} options.tries Max number of retries (default: 3)
 * @returns
 */
export default async function fetchWithRetry(
  url: string,
  init?: RequestInit,
  options: Options = { timeoutInSeconds: 10, tries: 3 }
): Promise<Response> {
  let response: Response;
  let controller: AbortController;

  for (let n = 0; n < options.tries; n++) {
    let timeoutID;

    try {
      controller = new AbortController();

      timeoutID = setTimeout(() => {
        controller.abort(); // break current loop
      }, options.timeoutInSeconds * 1000);

      response = await fetch(url, { ...init, signal: controller.signal });

      clearTimeout(timeoutID);
      return response;
    } catch (error) {
      if (timeoutID) {
        clearTimeout(timeoutID);
      }

      if (!(error instanceof DOMException)) {
        // Only catch abort exceptions here. All the others must be handled outside this function.
        throw error;
      }
    }
  }

  // None of the tries finished in time.
  throw new Error(
    `Request timed out (tried it ${options.tries} times, but none finished within ${options.timeoutInSeconds} second(s)).`
  );
}

export const __greeter = (name: string) => `Hello ${name}`;
