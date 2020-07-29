let clientID = "client_id=GnRBwzhLECNq_jxud6r91zxtIQJC1Psajy56bFAqbW4";

export function imageAPI(query: string) {
  let URL = `https://api.unsplash.com/search/photos?query=${query}&${clientID}`;
  return fetch(URL).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    console.log(
      "x-ratelimit-limit: " + response.headers.get("x-ratelimit-limit")
    );
    console.log(
      "x-ratelimit-remaining: " + response.headers.get("x-ratelimit-remaining")
    );
    return response.json();
  });
}
