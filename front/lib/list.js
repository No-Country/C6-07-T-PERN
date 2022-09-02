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

export function getLists(mediaId, mediaType) {
  const token = `Bearer ${getJWT()}`;
  return fetch(`${host}/lists?mediaId=${mediaId}&mediaType=${mediaType}`, {
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      return response;
    });
}


export function getLists(mediaType, list){
    // {{Host}}/lists/user_media?list=watched
  }