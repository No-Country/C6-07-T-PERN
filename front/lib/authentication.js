import { host } from ".";

//Nano: Funcion para guardar la JWT en el almacenamiento local
function storeJWT(jwt) {
  window.localStorage.setItem("JWT", jwt);
}

//Nano: Funcion obtener la JWT del almacenamiento local
export function getJWT() {
  return window.localStorage.getItem("JWT");
}

//Nano: Funcion para hacer logout
export function logout() {
  storeJWT("");
}

//Nano: Funcion para saber si hay un usuario loggeado
export function isLogged() {
  const token = `Bearer ${getJWT()}`;
  return fetch(`${host}/auth`, {
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

//Nano: Funcion para registrarse
export async function getAuth(username, email, password) {
  const user = {
    username,
    email,
    password,
  };
  try {
    return fetch(`${host}/auth/register`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => response);
  } catch (error) {
    return;
  }
}

//Nano: Funcion para obtener llave de autenticación
export async function getToken(identification, password) {
  const user = {
    identification,
    password,
  };
  try {
    return fetch(`${host}/auth/login`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return { token: response.json(), status: response.status };
      })
      .then(async (response) => {
        let token = await response.token;
        storeJWT(token.accessToken);
        return response;
      })
      .then();
  } catch (error) {
    return;
  }
}
