export const client = {
  apiKey: null,
  setApiKey: function (apiKey) {
    this.apiKey = apiKey;
  },
  send: async function (url, method = "GET", body = null) {
    url = `https://api-todo-ebon.vercel.app/api/v1${url}`;
    const headers = {
      "Content-type": "application/json",
    };
    if (this.apiKey) {
      headers["X-Api-Key"] = this.apiKey;
    }
    const options = {
      method,
      headers,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return { data, response };
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
