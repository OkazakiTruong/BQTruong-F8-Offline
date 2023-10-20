import { client } from "./client.js";

export const requestRefresh = async (refreshToken) => {
  const { data: dataReturn, requestRefresh } = await client.post(
    "/auth/refresh-token",
    {
      refreshToken: refreshToken,
    }
  );
  console.log(dataReturn);
  const tokens = dataReturn.data.token;

  return tokens;
};
