$( document ).ready(function() {

    var min = $("#session-min").text();
    var sec = $("#session-sec").text();

    setClock();

    function setClock() {
    	$("#clock-min").html(min);
    	$("#clock-sec").html(sec);
    }

    function setSession() {
    	$("#session-min").html(min);
    }

    $("#session-plus").click(function(){
    	if(min < 59) {
			min++;
			setSession();
			setClock();
		}
	});

	$("#session-minus").click(function(){
		if(min > 0) {
			min--;
			setSession();
			setClock();
		}
	});
	
});