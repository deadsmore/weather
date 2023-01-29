let city = document.querySelector("#city");
let apiKey = 'b48fe644e89d98b60755d43656654ef4';
let btn=document.querySelector("#btn")
let result = document.querySelector("#result")

// Функція, яка приймає назву міста та ключ API
// і повертає прогноз погоди

function getWeather(city, apiKey) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send(null);
    let response = JSON.parse(req.response);
    let weather = response.weather[0].main;

    return weather;
}

// Викликаємо функцію та записуємо результат у змінну
let weather = getWeather(city, apiKey);
result.innerHTML = weather

// Виводимо результат на екран
console.log(`Weather in ${city}: ${weather}`);




