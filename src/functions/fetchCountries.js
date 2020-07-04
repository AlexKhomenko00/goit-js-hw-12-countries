export default function fetchCountries(searchQuery) {
  return fetch(
    `https://restcountries.eu/rest/v2/name/${searchQuery}`,
  ).then(res => (res.ok ? res.json() : Promise.reject(res)));
}
