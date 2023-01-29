let input = document.querySelector('.input_text');
let button = document.querySelector('.submit');

let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let feellike = document.querySelector('.feels_like')
let country = document.querySelector(`.country`)



button.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let tempValue = Math.round(data.main.temp)
            let nameValue = data['name'];
            let descValue = data['weather'][0]['description'];
            let feellikeValue = data[`main`][`feels_like`]
            let countryValue = data[`sys`][`country`]









            main.innerHTML = nameValue;
            desc.innerHTML = "Описание - " + descValue;
            temp.innerHTML = tempValue + "°C ";
            feellike.innerHTML = "Ощущается " + " " + feellikeValue + " " + "°C "
            country.innerHTML = `Страна ` + countryValue
            input.value = "";

        })

        .catch(err => alert("Укажи правильно город!"));
})


