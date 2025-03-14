document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector('.weather-form');
const conditions = document.querySelector('.condition');
const temperature = document.querySelector('#temperature');
const conditionImg = document.querySelector('.conditionimg');
const placeCon = document.querySelector('.placecon');
const countryCon = document.querySelector('#country');
const timeContent = document.querySelector('#time');


            form.addEventListener("submit", (event) => {
                event.preventDefault();

                const apiKey = 'd50043b9ac704398b23122901242107';
                const baseUrl = 'https://api.weatherapi.com/v1/current.json';
                const location = document.querySelector('.location').value

                const url = `${baseUrl}?key=${apiKey}&q=${location}`;

                fetch(url)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        const icon = data.current.condition.icon;
                        const condition = data.current.condition.text;
                        const temp = data.current.temp_c;
                        const country = data.location.country;
                        const location = data.location.name;
                        const time = data.location.localtime;


                        conditionImg.src = icon;
                        timeContent.innerHTML = `<b>Time:</b> ${time}`;
                        countryCon.innerHTML = `<b>Country:</b> ${country}`;
                        conditions.textContent = condition;
                        temperature.textContent = `${temp}°C`;
                        placeCon.textContent = location;


                    })
                    .catch(error => {
                        console.error('Fetch error:', error);
                    });
            });
        });
