import './styles.css';
import fetchCountries from './js/fetchCountries';
// import countriesTpl from './templates/countries.hbs';
import countriesListTpl from './templates/countries-list.hbs';
import refs from './js/refs';
import updateCountriesMarkup from './js/update-countries-markup';
// import debounce from 'lodash.debounce';

refs.input.addEventListener('input', event => {
    event.preventDefault();
  
    const form = event.currentTarget;
    // const inputValue = form.elements.query.value;
  
    refs.countriesContainer.innerHTML = '';
    // form.reset();
    function updateCountriesListMarkup(countries) {
        const markup = countriesListTpl(countries);
        refs.countriesList.insertAdjacentHTML('beforeend', markup);
      }
      fetchCountries(refs.input.value).then(item =>
        updateCountriesListMarkup(item),
      );
  
    // fetchCountries(input.value).then(data => chekList(data));
});