import '@pnotify/core/dist/BrightTheme.css';
import './styles.css';
import '@pnotify/core/dist/PNotify.css';
import fetchCountries from './functions/fetchCountries';
import updateCountiresMarkup from './functions/updateCountriesMarkup';
import refs from './functions/refs.js';
import _ from 'lodash';
import { alert, error } from '@pnotify/core';

function resetCountrListMarkup() {
  refs.countrList.innerHTML = '';
}
const debouncedFetchedCountries = _.debounce(event => {
  if (event.target.value === '') {
    return;
  }
  fetchCountries(event.target.value)
    .then(articles => {
      if (articles.length > 10) {
        resetCountrListMarkup();
        alert('Too many matches found. Please specify request!');
        return;
      }
      updateCountiresMarkup(articles, refs.countrList);
    })
    .catch(() => {
      error('Country not found! Please try again!');
      resetCountrListMarkup();
    });
}, 500);

refs.input.addEventListener('input', event => debouncedFetchedCountries(event));
