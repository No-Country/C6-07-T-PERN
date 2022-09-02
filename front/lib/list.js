import { host } from ".";
import { getJWT } from "./authentication";

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