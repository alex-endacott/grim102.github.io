$( document ).ready(function() {

    var sessionMin = $("#session-min").text();
    var sessionSec = $("#session-sec").text();

    var breakMin = $("#break-min").text();
    var breakSec = $("#break-sec").text();

    var abort = false;

    setClock(sessionMin, sessionSec);

    $('#clock-stop').prop('disabled', true);

    function pad(num, size) {
    	var s= num+"";
    	while(s.length < size) s = "0" + s;
    	return s;
    }

    function setClock(min, sec) {
    	$("#clock-min").html(min);
    	$("#clock-sec").html(pad(sec, 2));
    }

    function setSession() {
    	$("#session-min").html(sessionMin);
    }

    function setBreak() {
    	$("#break-min").html(breakMin);
    }

    function runSession(min1 = sessionMin, sec1 = sessionSec, min2 = breakMin, sec2 = breakSec) {
    	var session = setInterval(function(){
    		if(abort) {
    			return;
    		}
			if(sec1 == 00 && min1 > 0) {
				min1--;
				sec1 = 59;
				setClock(min1, sec1);
			}
			else if(min1 > 0 || sec1 > 0){
				sec1--;
				setClock(min1, sec1);
			}
			else {
				setClock(min2, sec2);
				runBreak();
				//clearInterval(session);
			}
		}, 1000);
    }

    function runBreak(min3 = breakMin, sec3 = breakSec, min4 = sessionMin, sec4 = sessionSec) {
    	clearInterval(sessionBreak);
    	var sessionBreak = setInterval(function(){
    		if(abort) {
    			return;
    		}
			if(sec3 == 00 && min3 > 0) {
				min3--;
				sec3 = 59;
				setClock(min3, sec3);
			}
			else if(min3 > 0 || sec3 > 0){
				sec3--;
				setClock(min3, sec3);
			}
			else {
				setClock(min4, sec4);
				runSession();
				// clearInterval(sessionBreak);
			}
		}, 1000);
    }

    $("#session-plus").click(function(){
    	if(sessionMin < 59) {
			sessionMin++;
			setSession();
			setClock(sessionMin, sessionSec);
		}
	});

	$("#session-minus").click(function(){
		if(sessionMin > 0) {
			sessionMin--;
			setSession();
			setClock(sessionMin, sessionSec);
		}
	});

	$("#break-plus").click(function(){
    	if(breakMin < 59) {
			breakMin++;
			setBreak();
		}
	});

	$("#break-minus").click(function(){
		if(breakMin > 0) {
			breakMin--;
			setBreak();
		}
	});

	 $("#clock-start").click(function(){
	 	$('#clock-stop').removeAttr('disabled');
		$('#session-plus').prop('disabled', true);
		$('#session-minus').prop('disabled', true);
		$('#break-plus').prop('disabled', true);
		$('#break-minus').prop('disabled', true);
		$('#clock-start').prop('disabled', true);

		abort = false;

		if(vals) {
			runSession(vals[0], vals[1], vals[2], vals[3]);
		}
		else {
			var vals = runSession();
		}

		$('#clock-stop').click(function(){
			location.reload();
			// abort = true;
			// $('#clock-stop').prop('disabled', true);
			// $('#session-plus').removeAttr('disabled');
			// $('#session-minus').removeAttr('disabled');
			// $('#break-plus').removeAttr('disabled');
			// $('#break-minus').removeAttr('disabled');
			// $('#clock-start').removeAttr('disabled');
		});

	 });
	
});