import { config } from "./config.js";
const { SERVER_API } = config;

export const client = {
  send: async (url, method = "GET", body = null) => {},
};
