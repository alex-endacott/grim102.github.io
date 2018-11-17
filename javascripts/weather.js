$( document ).ready(function() {

	var mapOptions = {
            
        zoom: 3,
           
        center: {
            lat:  40.7553014,
            lng: -99.6514271
        },

        mapTypeId: 'roadmap'
    };

	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

	var marker = new google.maps.Marker({
			position: {lat:  40.7553014, lng: -99.6514271},
			map: map,
			draggable: true,
	    	animation: google.maps.Animation.DROP
		});

	var longitude;
	var lattitude;

	var week = ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI'];

	var d = new Date();

	google.maps.event.addListener(map, 'click', function(event) {
   		marker.setPosition(event.latLng);
   		longitude = marker.getPosition().lng();
		lattitude = marker.getPosition().lat();
		setWeather(lattitude, longitude);
    	map.panTo(marker.position);
	});

	google.maps.event.addListener(marker, 'dragend', function(){
		longitude = marker.getPosition().lng();
		lattitude = marker.getPosition().lat();
		setWeather(lattitude, longitude);
		map.panTo(marker.position);
	});

	$('#map-canvas').click(function(e){
		$('#weatherGroup').show();
	});

	function setWeather(lattitude, longitude) {
		$.get('https://api.openweathermap.org/data/2.5/forecast' + '?lat=' + lattitude +
			'&lon=' + longitude, {
      APPID: "9f5ba449d9d14d24a9059d116da48f7e",
			units: "imperial"
		}).done(function(data) {
			console.log(data);
			$('#city').html(data.city.name);

			$('#weatherData1').html( '<p class="day" >' + week[(d.getDay()+1)  % 7] + '</p>' +
				'<h3 class="info" >' + parseInt(data.list[0].main.temp_min) + '&deg/' + 
				parseInt(data.list[0].main.temp_max) + '&deg' + '</h3>' +
				'<img class="icon" src=\'http://openweathermap.org/img/w/' + 
				data.list[0].weather[0].icon + '.png\'>' + 
				'<p class="info" ><strong>Clouds: </strong>' + data.list[0].weather[0].description + '</p>' +
				'<p class="info" ><strong>Humidity: </strong>' + data.list[0].main.humidity + '</p>' +
				'<p class="info" ><strong>Wind: </strong>' + data.list[0].wind.speed + '</p>' +
				'<p class="info" ><strong>Pressure: </strong>' + data.list[0].main.pressure + '</p>');

			$('#weatherData2').html( '<p class="day" >' + week[(d.getDay()+2) % 7] + '</p>' +
				'<h3 class="info" >' + parseInt(data.list[1].main.temp_min) + '&deg/' + 
				parseInt(data.list[1].main.temp_max) + '&deg' + '</h3>' +
				'<img class="icon" src=\'http://openweathermap.org/img/w/' + 
				data.list[1].weather[0].icon + '.png\'>' + 
				'<p class="info" ><strong>Clouds: </strong>' + data.list[1].weather[0].description + '</p>' +
				'<p class="info" ><strong>Humidity: </strong>' + data.list[1].main.humidity + '</p>' +
				'<p class="info" ><strong>Wind: </strong>' + data.list[1].wind.speed + '</p>' +
				'<p class="info" ><strong>Pressure: </strong>' + data.list[1].main.pressure + '</p>');

			$('#weatherData3').html( '<p class="day" >' + week[(d.getDay() + 3) % 7] + '</p>' +
				'<h3 class="info" >' + parseInt(data.list[2].main.temp_min) + '&deg/' + 
				parseInt(data.list[2].main.temp_max) + '&deg' + '</h3>' +
				'<img class="icon" src=\'http://openweathermap.org/img/w/' + 
				data.list[2].weather[0].icon + '.png\'>' + 
				'<p class="info" ><strong>Clouds: </strong>' + data.list[2].weather[0].description + '</p>' +
				'<p class="info" ><strong>Humidity: </strong>' + data.list[2].main.humidity + '</p>' +
				'<p class="info" ><strong>Wind: </strong>' + data.list[2].wind.speed + '</p>' +
				'<p class="info" ><strong>Pressure: </strong>' + data.list[2].main.pressure + '</p>');

		});
		
	}

});