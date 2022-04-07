const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=6.13&lon=1.22&exclude=hourly,daily&appid=8ac64954da8de0972eba9f0d65c23ef6'
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('currently').textContent = jsObject.current.weather[0].description;
    document.getElementById('temp').textContent = jsObject.current.temp;
    document.getElementById('humidity').textContent = jsObject.current.humidity;

});
export function weather() {
    let forecast = jsObject['current'];
    for (let i of [6, 14, 22, 30, 38]) {
        let td = document.createElement('td');
        let img = document.createElement('img');
        let high = document.createElement('span');
        const imagesrc = 'https://openweathermap.org/img/w/' + onecall[i].weather[0].icon + '.png';  
        const desc = forecast[i].weather[0].description;  
        
        img.setAttribute('src', imagesrc);
        img.setAttribute('alt', desc);
        high.innerHTML = `${forecast[i].main.temp.toFixed(0)}&deg;F`;

        td.appendChild(img);
        td.appendChild(high);

        document.querySelector('tr.forecast-td').appendChild(td);
    }
}

