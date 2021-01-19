function fetchCountries(searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    return fetch(url)
    .then(res => res.json())
    // .then(arr => arr.map(({ name }) => console.log(name)));

};

export default fetchCountries;
