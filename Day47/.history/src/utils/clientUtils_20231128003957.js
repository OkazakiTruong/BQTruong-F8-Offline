export const client = {
  apiUrl: import.meta.env.VITE_API_URL,
  apiKey: null,
  app: (method = "GET", body = null) => {},
};
