const apiKey = "5a3b042317e9be08406e0bc0d2da5cf1";


async function weather(){
  const city=document.getElementById("cityInput").value;
  const result=document.getElementById("weatherResult");
  if (!city){
    alert("Enter City Name");
    return
  }
  try{
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data= await response.json();
    if(data.cod!=200){
      result.innerHTML = "❌ City not found";
      return;

    }
    else{
    const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
      result.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temp: ${data.main.temp} °C</p>
      <p>🌤 Weather: ${data.weather[0].main}</p>
      <p>🔻 Min Temp: ${data.main.temp_min} °C</p>
      <p>🔺 Max Temp: ${data.main.temp_max} °C</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
      <p>🌅 Sunrise: ${sunrise}</p>
      <p>🌇 Sunset: ${sunset}</p>
    `;
    }
  }
  catch (error){
      result.innerHTML = "⚠️ Error fetching weather";

  }


}