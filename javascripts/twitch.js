$( document ).ready(function() {

	$.ajax({
		type: 'GET',
		url: 'https://api.twitch.tv/helix/streams?user_login=freecodecamp',
		headers: {
			'Client-ID': '7b4bf99huxakhzrve0wunghvaoh5h9'
		},
		success: function(data) {
			console.log(data);
		}
	});

});


