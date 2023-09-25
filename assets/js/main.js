const apiKey = "c32c9a6b7f5e1f3349b7f860744175d6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(input){

    const response = await fetch(apiUrl + input + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    } 
    else {

        var data =  await response.json();

        document.querySelector(".weather .temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".weather .city").innerHTML = `${data.name}`;
        document.querySelector(".weather .humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".weather .wind").innerHTML = `${data.wind.speed} km/h`;

        var weather = data.weather[0].main;
        var weatherIcon = document.querySelector('.weather-icon')

        switch (weather) {
            case "Haze":
                weatherIcon.src = './assets/image/mist.png';
                break;
            case "Mist":
                weatherIcon.src = './assets/image/mist.png';
                break;
            case "Clear":
                weatherIcon.src = './assets/image/clear.png';
                break;
            case "Clouds":
                weatherIcon.src = './assets/image/clouds.png';
                break;
            case "Drizzle":
                weatherIcon.src = './assets/image/drizzle.png';
                break;
            case "Rain":
                weatherIcon.src = './assets/image/rain.png';
                break;
            case 'Snow':
                weatherIcon.src = './assets/image/snow.png';
                break;
            default:
                weatherIcon.src ='';
                weatherIcon.alt = data.weather[0].description;
                break;
        }
        document.querySelector('.error').style.display = "none";
        document.querySelector('.weather').style.display = "block";

    }
    
}

const searchBtn = document.querySelector('.search button');
const input = document.querySelector(".search input");

searchBtn.addEventListener('click', () => {checkWeather(input.value)});

input.addEventListener("keyup", (event) =>{
    if(event.code == "Enter"){
        checkWeather(input.value);
    }
})
