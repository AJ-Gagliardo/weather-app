import './css/styles.css';
// first i have to get the api of the weather



fetch(`https://api.weatherapi.com/v1/current.json?key=2bb56963b22d402aaab180509242803&q=london`)
.then(response=>response.json())
.then(data=>console.log(data));
