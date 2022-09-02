import { host } from ".";
import { getJWT } from "./authentication";
export async function GetUser(media) {
  const token = await getJWT();
  const data = await fetch(`${host}/auth/user`, {
    method: "get",
    headers: {
      "content-type": "application/json",
      Authorization: "bearer " + token,
    },
    body: JSON.stringify(media),
  });
  return await data.json();
}
