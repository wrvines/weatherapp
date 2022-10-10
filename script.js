//alert("connected");
//https://api.openweathermap.org/data/2.5/weather?zip=84121,us&appid=12ea3c9f921a4ca10f046151c2b64c99&units=imperial
//set up event listener
document.querySelector("#btn-forecast").addEventListener('click', getForecast);
document.querySelector("#btn-forecast").addEventListener('click', onSubmit);
const results = document.querySelector("#results")

//const testUrl = "https://api.openweathermap.org/data/2.5/weather?appid=12ea3c9f921a4ca10f046151c2b64c99&units=imperial&zip=84121";



function getForecast() {
    //console.log("clicked");
    const endpoint = "https://api.openweathermap.org/data/2.5/weather?appid=12ea3c9f921a4ca10f046151c2b64c99&units=imperial&zip=";
    //get the zipcode entered by the user
    let zipcode = document.querySelector("#zipcode").value;
    console.log("zipcode is " + zipcode);
    //create URL with zipcode in it
    let url = `${endpoint}${zipcode}`;
    console.log(url);
    //fetch data
    fetch(url)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.weather[0].description);
    //put the data in the div
    results.innerHTML = `<h3>City: ${data.name}</h3>`;
    results.innerHTML += `<p>Temperature: ${data.main.temp}&deg; F</p>`;
    results.innerHTML += `<p>Description: ${data.weather[0].description}`;
    zipcode.value = "";
})
} 

function onSubmit() {
    event.preventDefault();
    const zipcode = document.querySelector("#zipcode");
    zipcode.value = '';
}