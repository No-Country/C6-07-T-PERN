export const SET_MEDIA = "media/set";
const api_key = process.env.APIKEY;

export function getMedia() {
  return (dispatch) => {
    return fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
    )
      .then((r) => r.json())
      .then((response) => {
        console.log(response);
        const { results } = response;
        dispatch({ type: SET_MEDIA, payload: results });
      });
  };
}
