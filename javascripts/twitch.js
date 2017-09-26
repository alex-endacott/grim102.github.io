$( document ).ready(function() {

	var twitch = $.ajax('https://api.twitch.tv/helix/streams/metadata');

	twitch.done(function(data, status, twitch) {
		console.log(data);
	});

	twitch.fail(function(twitch, status, error) {

	});

});
