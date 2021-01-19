function fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    return fetch(url)
    .then(res => res.json())
    // .then(arr => arr.map(({ name }) => console.log(name)));
    // .catch(error => error.name);
};

export default fetchCountries;
