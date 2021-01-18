import countriesTpl from '../templates/countries.hbs';
import countriesListTpl from '../templates/countries-list.hbs';
import refs from './refs';

function updateCountriesMarkup(countries) {
    const markup = countriesTpl(countries);
    refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
  }
function updateCountriesListMarkup(countries) {
    const markup = countriesListTpl(countries);
    refs.countriesList.insertAdjacentHTML('beforeend', markup);
  }
  
  export default {updateCountriesMarkup, updateCountriesListMarkup };