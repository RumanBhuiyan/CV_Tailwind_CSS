
const hideORShow = ({ id }) => {
  const element = document.getElementById(id);

  element.className = element.classList.contains("hidden") ? "block" : "hidden";
};

async function getData() {
  try {
    let url =
      "https://api.openweathermap.org/data/2.5/weather?q=sylhet&appid=893c6d429b1d8945049c51fb7122ddb9";

    let response = await axios.get(url);

    const { temp, feels_like, pressure, humidity, sea_level } =response.data.main;
    const wind = response.data.wind.speed;
      
      document.getElementById("temp").innerHTML = `Temp: ${temp}`;
      document.getElementById("feels").innerHTML = `Feels-like: ${feels_like}`;
      document.getElementById("pressure").innerHTML = `Pressure: ${ pressure }`;
      document.getElementById("humidity").innerHTML = `Humidity: ${humidity}`;
      document.getElementById("sea-level").innerHTML = `Sea-level: ${sea_level}`;
      document.getElementById("wind").innerHTML = `Wind: ${wind}`;
    
  } catch (error) {
    console.log(error);
  }
}

const showAndHide = () => {
     getData();
    

    const element = document.getElementById("weather");
    element.classList.remove("hidden");

    setTimeout(() => {
       element.classList.add("hidden") 
    },5000)
    
};
