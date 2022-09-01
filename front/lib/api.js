const host = "http://localhost:3001";
export async function createNewUser() {}

export async function getAuth() {
  const promise = Promise.resolve({ user: "user" });
  return promise;
}

export async function getToken() {
  const promise = Promise.resolve({ token: "token" });
  return promise;
}

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
