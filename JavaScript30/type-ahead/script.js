const endpoint = "https://simplemaps.com/static/data/country-cities/ua/ua.json";

const cities = [];

fetch(endpoint)
  .then(piece => piece.json())
  .then(data => cities.push(...data));

function findMatches(wordMatches, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordMatches, 'ig');
    return place.city.match(regex) || place.admin_name.match(regex); 
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const adminName = place.admin_name.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
    <li>
      <span class="name">${cityName}, ${adminName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `
  }).join('')
  
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);