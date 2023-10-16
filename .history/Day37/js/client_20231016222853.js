import { config } from "./config.js";
const { API_URL } = config;

export const client = {
  send: async function (url, method = "GET", body = null) {
    url = `${API_URL}${url}`;
    const options = {
      header: {
        "Content-Type": "application/json",
      },
      method,
    };
    if (body !== null) {
      options.body = body;
    }
    const { response } = await fetch(url, options);
    const data = await response.json();
    return { response, data };
  },
};
