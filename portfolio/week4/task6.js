let verbs, nouns, adjectives, adverbs, names;
nouns = ["God", "Christ", "Angel", "Prophets", "Disciples", "Heavenly Father", "Patriarch", "Bishops", "President Nelson", "Apostles"];
verbs = ["blessed", "remembered", "called", "answered", "spoke", "cared", "prayed", "loved", "liked", "honored"];
adjectives = ["honest", "humble", "kind", "genuine", "wise", "compassionate", "lovely", "caring", "loving", "forgiving"];
adverbs = ["greatly", "elegantly", "precisely", "humbly", "proudly", "passionately", "wisely", "nicely", "kindly", "exactly"];
names = ["People", "Isrealites", "Christians", "Men", "Children", "Kids", "Servants", "Women", "Givers", "Leaders"];


function sentence() {
  const rand1 = Math.floor(Math.random() * 10);
  const rand2 = Math.floor(Math.random() * 10);
  const rand3 = Math.floor(Math.random() * 10);
  const rand4 = Math.floor(Math.random() * 10);
  const rand5 = Math.floor(Math.random() * 10);
  const rand6 = Math.floor(Math.random() * 10);
 
  const content = "The " + adjectives[rand1] + " " + nouns[rand2] + " " + adverbs[rand3] + " " + verbs[rand4] + " the scriptures because " + nouns[rand1] + " " + adverbs[rand1] + " " + verbs[rand1] + " " + names[rand1] + " a " + adjectives[rand2] + " " + nouns[rand5] + " to some " + adjectives[rand3] + ", " + adjectives[rand4] + " " + nouns[rand6] + ".";

  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};

// ------day and message-------
function dayMessage(){
const today = new Date();
let dayOfWeek;
dayOfWeek = today.getDay();
let message1;
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message1 = 'Cheer up!';
}
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message1 = 'Smile, Life is juicy!';
} else {
    message1 = 'Read Alma 7: 7';
}
let message2;
switch (dayOfWeek) {
    case 0:
        message2 = 'Sunday';
        break;
    case 1:
        message2 = 'Monday';
        break;
    case 2:
        message2 = 'Tuesday';
        break;
    case 3:
        message2 = 'Wednesday';
        break;
    case 4:
        message2 = 'Thursday';
        break;
    case 5:
        message2 = 'Friday';
        break;
    case 6:
        message2 = 'Saturday';
        break;
    default:
        message2 = 'Unknown - ' + dayOfWeek;
        break;
}

document.querySelector('#message1').textContent = message1;
document.querySelector('#message2').textContent = message2;
};
sentence();
dayMessage();


// -----------forecast-----
const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=8ac64954da8de0972eba9f0d65c23ef6&units=imperial'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.list[0].weather[0].main;
    temp = jsObject.list[0].main.temp;
    document.getElementById('temp').textContent = temp;
    document.getElementById('humidity').textContent = jsObject.list[0].main.humidity;
    document.getElementById('windspeed').textContent = jsObject.list[0].wind.speed;
    
    let forecast = jsObject['list'];
    for (let i of [6, 14, 22, 30, 38]) {
        let td = document.createElement('td');
        let img = document.createElement('img');
        let high = document.createElement('span');
        const imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png';  
        const desc = forecast[i].weather[0].description;  
        
        img.setAttribute('src', imagesrc);
        img.setAttribute('alt', desc);
        high.innerHTML = `${forecast[i].main.temp.toFixed(0)}&deg;F`;

        td.appendChild(img);
        td.appendChild(high);

        document.querySelector('tr.forecast-td').appendChild(td);
    }
});

// ------windchill--------
const api = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=8ac64954da8de0972eba9f0d65c23ef6&units=imperial'

fetch(api)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let windspeed = jsObject.list[0].wind.speed;
    let temp = jsObject.list[0].main.temp;

    if (temp <= 50 && windspeed > 3){
    let wc = 35.74 + 0.6215 * temp - 35.75 * (windspeed ** 0.16) + 0.4275 * temp * (windspeed ** 0.16);
    let ws = wc.toFixed(1);
    document.getElementById("windchill").innerHTML = `${ws}&deg;F`;
    }
    else{
        document.querySelector("#windchill").innerHTML = "n/a";
    }
});
