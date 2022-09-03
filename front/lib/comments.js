import { is } from "@react-spring/shared";
import { host } from ".";
import { getJWT } from "./authentication";
const api_key = process.env.APIKEY;

async function getCommentsFromMDB(type, mediaId) {
  let url = "";
  if (type === "movie") {
    url = `https://api.themoviedb.org/3/movie/${mediaId}/reviews?api_key=${api_key}&language=en-US&page=1`;
  }
  if (type === "serie") {
    url = `https://api.themoviedb.org/3/tv/${mediaId}/reviews?api_key=${api_key}&language=en-US&page=1`;
  }

  return fetch(url)
    .then((response) => response.json())
    .then((response) => {
      return response.results.map((element) => ({
        id: element.id + "_MDB",
        message: element.content,
        updateAt: element.updateAt,
        user: {
          id: null,
          username: element.author,
        },
        media: {
          id: undefined,
          createdAt: undefined,
          mediaId,
          mediaType: type,
          updateAt: undefined,
        },
      }));
    });
}

export async function getComments(type, mediaId) {
  const data = await fetch(
    `${host}/comments?mediaType=${type}&mediaId=${mediaId}`
  );
  return await data.json();
}

export async function getAllComments(type, mediaId) {
  let apiComments = await getComments(type, mediaId);
  if (!Array.isArray(apiComments)) apiComments = [];
  const mdbComments = await getCommentsFromMDB(type, mediaId);
  const allComments = [...mdbComments, ...apiComments];
  return allComments;
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
