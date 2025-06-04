// Take the api from open weather map website.

const api="67a74a0acdc00e172ae8d389b09013ff";      //in this use your api id from the website
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(place) {
    const response=await fetch(apiUrl +place + `&appid=${api}`);
    //if the typed city is invalid.
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var dat=await response.json();
    console.log(dat);
    document.querySelector(".place").innerHTML=dat.name;
    document.querySelector(".temp").innerHTML=Math.round(dat.main.temp) +"°C" ;
    document.querySelector(".hum").innerHTML=dat.main.humidity + "%";
    document.querySelector(".wind").innerHTML=dat.wind.speed + "km/h";


    //Add all the weathers you want.

    if(dat.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(dat.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(dat.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(dat.weather[0].main=="Clear"){
        weatherIcon.src="images/sun.png"
    }
    else if(dat.weather[0].main=="Snow"){
        weatherIcon.src="images/snow.png"
    }
    else if(dat.weather[0].main=="Thunderstorm"){
        weatherIcon.src="images/thunder.png"
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    
    }
}
btn.addEventListener("click",()=>{
    checkWeather(search.value);
})

