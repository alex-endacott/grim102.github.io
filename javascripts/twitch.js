$( document ).ready(function() {

	var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];


	$.each(streamers, function(index, value){ 
		$.ajax({
			type: 'GET',
			url: 'https://api.twitch.tv/helix/streams?user_login=' + value,
			//url: 'https://api.twitch.tv/kraken/streams?users_login=' + value,
			headers: {
				'Client-ID': '7b4bf99huxakhzrve0wunghvaoh5h9'
			},
			success: function(data) {
				console.log(data);
				if(jQuery.isEmptyObject(data.data)) {
					var status = "<h2>Status: Offline</h2>";
				}
				else {
					var status = "<h2>Status: <a href=\"https://go.twitch.tv/" + value +"\" target=\"blank\">Online</a></h2>" + 
					"<h3>" + data.data[0]["title"] + "</h3>";
				}
				$("#streams").append(
						"<section class=\"col-sm-12 well\"> " +
						"<h1>" + value + "</h1>" + status
					);
			}
		});
	});
});


