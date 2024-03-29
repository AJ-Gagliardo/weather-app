import './css/styles.css';
// first i have to get the api of the weather



// fetch(`https://api.weatherapi.com/v1/current.json?key=2bb56963b22d402aaab180509242803&q=london`)
// .then(response=>response.json())
// .then(data=>console.log(data));


const apiKey= `2bb56963b22d402aaab180509242803`;
const apiUrl=`https://api.weatherapi.com/v1/current.json?key=`;
const apiUrl2 = `&q=`
let location = 'london'

console.log(apiUrl + apiKey + apiUrl2 + location)

// async function checkWeather(){
//     const response = await fetch(apiUrl + apiKey + apiUrl2 + location);
//     var data = await response.json();

//     console.log(data);
// }