export default function fetchCountries(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Place is not found');
    })
    .catch(error => {
      throw error;
    });
}
