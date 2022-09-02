import { host } from ".";
import { getJWT } from "./authentication";
const api_key = process.env.APIKEY;

export async function getComments(type, mediaId) {
  const data = await fetch(
    `${host}/comments?mediaType=${type}&mediaId=${mediaId}`
  );
  return await data.json();
}

export async function postComment(comment) {
  const token = await getJWT();

  await fetch(`${host}/comments`, {
    method: "post",
    headers: {
      "content-type": "application/json",
      Authorization: "bearer " + token,
    },
    body: JSON.stringify(comment),
  });
}
