const btN = document.getElementById("btn").addEventListener("click", function(){
   getLocation();

});

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      btN.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
   const laTitude = position.coords.latitude;
   const lonGitude = position.coords.longitude;

   const targetLat = Math.abs(17.6523289-laTitude);
   const targetLong = Math.abs(75.2780575-lonGitude);

   console.log(targetLat);
   console.log(targetLong);

   const disatnceRange = 50;

   if(targetLat<=disatnceRange && targetLong<=disatnceRange)
   {
    document.querySelector("img").setAttribute("src" , "../public/qr.png");
    document.querySelector("img").setAttribute("id" , "img");
   }
   else{
    document.getElementById("btn").style.display = "none";
    document.querySelector("p").innerHTML = "Your are not in coverrage area!";
    document.querySelector("p").setAttribute("id", "para")
   }

   console.log("latitide: " + laTitude);
   console.log("longitude: " + lonGitude);


//    const tarGetLat = 
//    const tarGetLong = 
  }