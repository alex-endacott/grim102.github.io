$( document ).ready(function() {

	var wiki = $.ajax("https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json");

	wiki.done(function(data, status, wiki) {
		console.log(wiki);
	});

});