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
   

   console.log(laTitude);
   console.log(lonGitude);

   var targetLat = 17.6523289;
   var targetLong = 75.2780575;

    const R = 6371;
    const dLat = toRadians(laTitude - targetLat);
    const dLon = toRadians(lonGitude - targetLong);

    
    var targetLat = toRadians(targetLat);
    var targetLong  = toRadians(targetLong);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRadians(targetLat)) * Math.cos(toRadians(laTitude)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c ;

    console.log(distance);

   const disatnceRange = 5; // km

   if(distance <= disatnceRange)
   {
    document.querySelector("img").setAttribute("src" , "qr.png");
    document.querySelector("img").setAttribute("id" , "img");
   }
   else{
    document.getElementById("btn").style.display = "none";
    document.querySelector("p").innerHTML = "Your are not in coverrage area!";
    document.querySelector("p").setAttribute("id", "para")
   }

   console.log("latitide: " + laTitude);
   console.log("longitude: " + lonGitude);


  }

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}