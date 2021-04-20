const url = "https://api.nasa.gov/planetary/apod?api_key=";
const api_key = config.NASA_API_KEY;

const fetchNasaData1 = async () => {
    try{
    const response = await fetch(`${url}${api_key}`)
    const data = await response.json()
    
    displayData1(data);
    }
    catch(error){
        console.log("sssss" , error);
    }
}
const displayData1 = (data) => {
  document.getElementById("title").textContent = data.title;
  document.getElementById("date").textContent = data.date;
  document.getElementById("picture").src = data.hdurl;
  const text = data.explanation.split(".").join(".<br><br>");
  document.getElementById("explanation").innerHTML = text;
};

fetchNasaData1();

const fetchNasaData2 = async () => {
  try {
    const response = await fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=P38duXGWwGwopehDe9VJl5rLKcvwoQen2TwbdgcH"
    );
    const data = await response.json();
    
    const photos = data.photos;
    const photo1 = photos[0];
    const photo2 = photos[1];
    const photo3 = photos[2];
    const photo4 = photos[3];
  
    displayData2(photos);
  } catch (error) {
    console.log("Error : ", error);
  }
};

const displayData2 = (photos) => {

    document.getElementById("rover-image").src = photos[0].img_src;
    document.getElementById("rover-title").innerText = photos[0].camera.full_name;
    document.getElementById("launch-date").innerText = photos[0].rover.launch_date;
    document.getElementById("land-date").innerText =
      photos[0].rover.landing_date;
    
};

fetchNasaData2();


const fetchNasaData3 = async () => {
  try {
    const response = await fetch(
      "https://images-api.nasa.gov/search?q=apollo%2011&description=moon%20landing&media_type=image"
    );
    const data = await response.json();
  
    for(let i=0;i<6;i++){
        let randomNumber = Math.floor(Math.random() * 100);
        let img = document.createElement("img");
        img.className = "image-gal"
        img.src = data.collection.items[randomNumber].links[0].href;
        document.getElementById("image-gallery").append(img)
    }
    

  } catch (error) {
    console.log("sssssddd", error);
  }
};


fetchNasaData3();



particlesJS.load("particles-js", "particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});
