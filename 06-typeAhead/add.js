const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const input = document.querySelector('input');
const suggestions = document.querySelector('.suggestions');
const cities = [];

fetch(endpoint)
    .then((respons)=>{return respons.json()})
    .then((data)=>cities.push(...data))


function findMach(word, cities){
return cities.filter(place =>{
    const regex = new RegExp(word, 'gi');
    return place.city.match(regex) || place.state.match(regex)
})
}

function findCity(){
    console.log(this.value)
    const matchArray = findMach(this.value, cities);
    const html = matchArray.map(place =>{
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
        return `
        <li>
        <span class="name"> ${cityName}, ${stateName}</span>
        <span class ="population">${place.population}</span>
        </li>
        `;
    }).json('');
    suggestions.innerHTML = html;
}

input.addEventListener('change', findCity);
input.addEventListener('keyup', findCity);


