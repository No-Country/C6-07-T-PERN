import { host } from ".";
const api_key = process.env.APIKEY;

export async function getComments(type, mediaId) {
  const data = await fetch(
    `${host}/comments?mediaType=${type}&mediaId=${mediaId}`
  );
  return await data.json();
}

export async function postComment(comment) {
  await fetch(`${host}/comments`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(comment),
  });
}
