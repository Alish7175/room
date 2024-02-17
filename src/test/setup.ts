import "@testing-library/jest-dom";

import { server } from "./mocks/server";

// Establish API mocking before all test
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

// Reset any request handlers  that we may add during the tests, so that they don't effect other tests
afterAll(() => server.close());

// clean up after the tests are finished
afterEach(() => server.resetHandlers());
