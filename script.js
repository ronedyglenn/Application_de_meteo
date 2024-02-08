/**
 * My api key :5298ef0a916800e13ce0b9eaee1f0ec1
 * url: https://api.openweathermap.org/data/2.5/weather?q=${pays}&appid=${key}&units=metric&lang=fr
 */


//Plassons la clé-API
let key= "34a9f5a20cca31d1d91ea6c2c7638970";
//Récupération de l'élément input
let pays = document.querySelector("input");
//Bouton pour afficher le temps
let boutton = document.querySelector("button");
//Affichage du temps
let span = document.querySelector('span')
//Récupération de la classe temperature
let degree = document.querySelector('.temperature')
//Récupération de la description
let gabon = document.querySelector('.country')
//Récupération de la vitesse du vent
let km = document.querySelector('#vitesse')
//Récupération de la balise image
let img = document.querySelector('#image')
//la classe humidité
let hum = document.querySelector('.humidité')

//Ajout d'un evenement click
boutton.addEventListener("click", (e)=>{
//Prevenons le comportement par defaut
  e.preventDefault();
  //Récupération des données de l'API de météo avec la méthode fetch
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${pays.value}&appid=${key}&units=metric&lang=fr`)
  .then(reponse => reponse.json()).then(data => {
    //loggons les données
    console.log(data);
    //récupération de la donnée humidité
    let humidity = Math.round(data.main.humidity)
    //récupération de la donnée : vitesse du vent
    let speed = data.wind.speed
    //récupération de la donnée températion
    let temperature = Math.round(data.main.temp);
    //récupération de la donnée : pays
    let country = data.name
  
    /**
     * loggons les données pour un meilleur suivi
     */
    console.log(humidity)
    console.log(speed)
    console.log(temperature)
    console.log(country);
    
    /**
     * Affichage des données récupérées dans le DOM
     */
    span.innerHTML = humidity
    degree.innerHTML = temperature + ' °C ';
    gabon.innerHTML = country
    km.innerHTML = speed + 'km/h';
   
    //ajout des conditions pour le changement d'image.
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

    //gestion d'erreur.
    if(!pays.value){
      alert("Le nom de ce pays ou de cette ville est introuvable !")
    }
      });
})
