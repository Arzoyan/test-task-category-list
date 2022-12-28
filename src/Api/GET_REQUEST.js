export const GET_DATA = (url) => {
  let result = fetch(url)
    .then((response) => response.json())
    .then((data) => data);

  return result;
};
