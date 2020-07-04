import countiresTemplate from '../templates/countires.hbs';
import countiresTemplateMin from '../templates/countries_min.hbs';

function updateCountiresMarkup(articles, element) {
  element.innerHTML = '';
  let markup;
  if (articles.length > 1 && articles.length <= 10) {
    markup = countiresTemplateMin(articles);
    removeCountrListClass(element);
  } else {
    markup = countiresTemplate(articles);
    addCountrListClass(element);
  }
  element.insertAdjacentHTML('beforeend', markup);
}
function addCountrListClass(element) {
  element.classList.add('countries-list--big');
}
function removeCountrListClass(element) {
  element.classList.remove('countries-list--big');
}

export default updateCountiresMarkup;
