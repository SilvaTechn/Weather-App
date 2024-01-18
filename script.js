  const apiKey="2acbb064d1d79391fd40ecd4ee692ae0"
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchBox=document.querySelector(".search input");
  const searchBtn=document.querySelector(".search button");
  const weatherContent=document.querySelector(".image-icon");
  async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temperature").innerHTML=data.main.temp +"°C" 
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%"
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
     
    if(data.weather[0].main== "Clouds"){
      weatherContent.src="images/wind.png"
    }
    else if(data.weather[0].main == "Mist"){
      weatherContent.src="images/mist.png"
  }
  else if(data.weather[0].main == "Clear"){
    weatherContent.src="images/clear.png"
}
else if(data.weather[0].main  == "Drizzle"){
  weatherContent.src="images/drizzle.png"
}
else if(data.weather[0].main == "Rain"){
  weatherContent.src="images/rain.png"
}
else if(data.weather[0].main == "snow"){
  weatherContent.src="images/snow.png"
}
}
 
  searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    searchBox.value="";
  })
  
   