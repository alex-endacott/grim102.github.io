$( document ).ready(function() {

	$('#button').on('click', function() {

		$('#posts').html('');

		var input = $(":input");

		var title = input[0].value;

		var wiki = $.ajax("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + title + "&limit=10&origin=*&format=json");

		wiki.done(function(data, status, wiki) {
			//console.log(data);
			for(var i = 0; i < data[1].length; i++) {
				$('#posts').append('<section class="col-sm-12"><h1>'
							+ data[1][i] + '</h1>' 
							+ '<p>' + data[2][i] + '</p>'
							+ '<a href="' + data[3][i] + '" target="blank">Read more</a></section>')
				console.log(data[3][i]);

			}
		});

		wiki.fail(function(wiki, status, error) {
			$('#posts').text("No results found");
		});

		return false;

	});
});