import { setupServer } from "msw/node";
import { handlers } from "./handlers";

//This configures a Service Worker with the given request handler
export const server = setupServer(...handlers);
