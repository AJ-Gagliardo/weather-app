import './css/styles.css';
import humidityImg from './assets/img/humidity.png';
import windImg from './assets/img/wind.png';




const apiKey= `2bb56963b22d402aaab180509242803`;
const apiUrl=`https://api.weatherapi.com/v1/current.json?key=`;
const apiUrl2 = `&q=`
// let location = 'london'

// console.log(apiUrl + apiKey + apiUrl2 + location)

async function checkWeather(city){

let location = city;

    const response = await fetch(apiUrl + apiKey + apiUrl2 + location);
    var data = await response.json();

    console.log(data);
console.log(data.location.name)

    document.querySelector('.city').textContent = data.location.name;
    document.querySelector('.temp').textContent = `${data.current.temp_c}° C`;
    document.querySelector('.weather-icon').src = data.current.condition.icon;
    document.querySelector('.condition').textContent = data.current.condition.text;

    console.log(data.current.humidity);
    document.querySelector('.humidity').textContent =  `${data.current.humidity} %`;
    document.querySelector('.wind').textContent = `${data.current.wind_kph} km/h`;

    document.querySelector('.humidityImg').src = humidityImg;
    document.querySelector('.windImg').src = windImg;


}

checkWeather('vancouver');


const citySearch = document.getElementById('citySearch');
console.log(citySearch);

const searchBtn = document.getElementById('searchButton');
console.log(searchBtn);


searchBtn.addEventListener('click', ()=>{
    let cityToSearch = citySearch.value ;
    console.log(cityToSearch);
    checkWeather(cityToSearch);
})



