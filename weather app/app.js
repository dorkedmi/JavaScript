function weather()
 {
    var url = 'https://api.darksky.net/forecast/';
    var apiKey = 'e30234c4c55faf813591248310305c1d';
    
     navigator.geolocation.getCurrentPosition(success,error);
    
    function success(position){
       latitude = position.coords.latitude;
       longitude = position.coords.longitude;
        
       $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?units=si&callback=?", function(data) {
      $('#title').html(data.currently.icon);
        var x = data.currently.icon;
           switch (x)
                   {
               case "clear-day":
                   document.getElementById("body").style.backgroundImage = "url('pics/clearday.jpg')";
                   break;
               case "clear-night":
                   document.getElementById("body").style.backgroundImage = "url('pics/clearnight.jpg')";
                   break;
               case "rain":
                   document.getElementById("body").style.backgroundImage = "url('pics/rain.jpg')";
                   break;
               case "snow":
                   document.getElementById("body").style.backgroundImage = "url('pics/snow.jpg')";
                   break;
               case "sleet":
                   document.getElementById("body").style.backgroundImage = "url('pics/sleet.jpg')";
                   break;
               case "wind":
                   document.getElementById("body").style.backgroundImage = "url('pics/wind.jpg')";
                   break;
               case "fog":
                   document.getElementById("body").style.backgroundImage = "url('pics/fog.jpg')";
                   break;
               case "cloudy":
                   document.getElementById("body").style.backgroundImage = "url('pics/cloudy.jpg')";
                   break;
           }
    });
    };
     
function error() {
    location.innerHTML = "Unable to retrieve your location";
  };
       
};


weather();
 