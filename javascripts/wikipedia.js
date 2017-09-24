$( document ).ready(function() {

	var wiki = $.ajax("https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&origin=*&format=json");

	wiki.done(function(data, status, wiki) {
		$('#posts').append('<section class="col-sm-12"><h1>' +
							+ data.title + '</h1></section>')
	});

	wiki.fail(function(wiki, status, error) {
		$('#posts').text("No results found");
	});

});