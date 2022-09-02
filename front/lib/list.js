import { host } from ".";
import { getJWT } from "./authentication";
export async function SaveMovie(media) {
  const token = await getJWT();
  const data = await fetch(`${host}/lists`, {
    method: "put",
    headers: {
      "content-type": "application/json",
      Authorization: "bearer " + token,
    },
    body: JSON.stringify(media),
  });
  return await data.json();
}
