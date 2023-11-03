/**
 * My api key :5298ef0a916800e13ce0b9eaee1f0ec1
 * url: https://api.openweathermap.org/data/2.5/weather?q=${pays}&appid=${key}&units=metric&lang=fr
 */

let key= "34a9f5a20cca31d1d91ea6c2c7638970";
let pays = document.querySelector("input");
let boutton = document.querySelector("button");
let span = document.querySelector('span')
let degree = document.querySelector('.temperature')
let gabon = document.querySelector('.country')
let km = document.querySelector('#vitesse')
let img = document.querySelector('#image')
let hum = document.querySelector('.humidité')

boutton.addEventListener("click", (e)=>{
  e.preventDefault();
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${pays.value}&appid=${key}&units=metric&lang=fr`)
  .then(reponse => reponse.json()).then(data => {
    console.log(data);
    let humidity = Math.round(data.main.humidity)
    let speed = data.wind.speed
    let temperature = Math.round(data.main.temp);
    let country = data.name
  
    console.log(humidity)
    console.log(speed)
    console.log(temperature)
    console.log(country);
    

    span.innerHTML = humidity
    degree.innerHTML = temperature + ' °C ';
    gabon.innerHTML = country
    km.innerHTML = speed + 'km/h';
   
if(data.weather[0].main == "Rain"){
  img.src="images/rain.png";
}else if(data.weather[0].main == "Mist"){
  img.src="images/mist.png";
}else if(data.weather[0].main == "Clouds"){
  img.src="images/clouds.png";
}else if(data.weather[0].main == "Clear"){
  img.src="images/clear.png";
}else if(data.weather[0].main == "Drizzle"){
  img.src="images/drizzle.png";
}else{
  img.src="images/snow.png"
}

if(pays.value !== data.name){
  alert("Le nom de ce pays ou de cette ville est introuvable !")
}

  });
})