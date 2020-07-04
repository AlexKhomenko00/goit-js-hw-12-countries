import '@pnotify/core/dist/BrightTheme.css';
import './styles.css';
import fetchCountries from './functions/fetchCountries';
import updateCountiresMarkup from './functions/updateCountriesMarkup';
import refs from './functions/refs.js';
import _ from 'lodash';
import { alert } from '@pnotify/core';

/* У меня сломалась дефолтная верска этих всплывашек
(либо я сам нечаянно сломал 💩).
Поэтому в своих стилях немного правил😄
*/

function resetCountrListMarkup() {
  refs.countrList.innerHTML = '';
}
const debouncedFetchedCountries = _.debounce(event => {
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
      resetCountrListMarkup();
    });
}, 500);

refs.input.addEventListener('input', event => debouncedFetchedCountries(event));
