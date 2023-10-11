// const apiKey = "a48cfa75630ececfa09f7d5f9fd5cf6b";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=";

const search = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Rain"){
        weatherIcon.src = "rain.jpeg";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "drizzle.png"
    }
    else if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "cloudy.png"
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "sunny.jpeg"
    }

    document.querySelector(".current-weather").style.display = 'block'

     

}
searchButton.addEventListener('click', ()=> {
    checkWeather(search.value)
})
checkWeather();
