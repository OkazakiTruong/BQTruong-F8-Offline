import { config } from "./config";
const { API_URl } = config;
console.log(API_URl);

export const client = {
  apiKey: null,
  setApiKey: function (key) {
    this.apiKey = key;
  },
  send: async function (url, method = "GET", body = null) {
    url = `${API_URl}${url}`;
    const header = {
      "Content-type": "application/json",
    };
    if (this.apiKey) {
      header["X-Api-Key"] = this.apiKey;
    }
    const options = {
      header,
      method,
    };
    if (body) {
      options.body = body;
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return { response, data };
  },
  get: function (url) {
    return this.send(url);
  },
  put: function (url, body) {
    return this.send(url, "PUT", body);
  },
  post: function (url, body) {
    return this.send(url, "POST", body);
  },
  patch: function (url, body) {
    return this.send(url, "PATCH", body);
  },
  delete: function (url) {
    return this.send(url, "DELETE");
  },
};
