const apiKey = "a48cfa75630ececfa09f7d5f9fd5cf6b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=";

const search = document.querySelector('.search input')
const searchButton = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

// function to get the city with its own weather 
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    {
        method: "GET"
        contentType: "application/json"
    }
    var data = await response.json();

    console.log(data);
  // getting the needed elements
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
// displaying weather icons 
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

    function toggleDetails() {
        const currentWeather = document.querySelector('.current-weather');
        currentWeather.classList.toggle('show-details');
      }
      
      // Add a click event listener to the button
      const toggleButton = document.getElementById('toggle-details');
      toggleButton.addEventListener('click', toggleDetails);
      

}
//click eventListener
searchButton.addEventListener('click', ()=> {
    checkWeather(search.value)
})

//checkWeather();
document.addEventListener('DOMContentLoaded', () => {
    checkWeather();
});

