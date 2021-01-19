import './styles.css';
import fetchCountries from './js/fetchCountries';
import countriesTpl from './templates/countries.hbs';
import countriesListTpl from './templates/countries-list.hbs';
import refs from './js/refs';
import updateCountriesMarkup from './js/update-countries-markup';
import debounce from 'lodash.debounce';
import toastr from 'toastr';
import options from './js/toastr.options';

toastr.options = options;

refs.input.addEventListener('input', debounce(inputCountry, 1000));

refs.input.addEventListener('input', event => {
    event.preventDefault();

//    const form = event.currentTarget;
//      const inputValue = form.elements.query.value;
  
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

function inputCountry() {
    fetchCountries(input.value)
    .then(markupCountry)
    .catch(error => toastr.error(error.message));
}

function markupCountry(data) {
    refs.loader.classList.add('js-countries');
  
    if (data.length > 10) {
      toastr.error('Too many matches found! Please enter a more specific query!');
      return;
    }
    if (data.length > 1 && data.length <= 10) {
      markup.updateCountriesMarkup(data);
      toastr.clear();
      return;
    }
    if (data.length === 1) {
      markup.updateCountriesMarkup(data);
      toastr.clear();
      return;
      };
}
