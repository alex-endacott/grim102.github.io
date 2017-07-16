$(document).ready(function(){
    "use strict";

    var availPos = ['s1', 's2', 's3', 's4','s5', 's6', 's7', 's8', 's9'];

    var playerPos = [];

    var systemPos = [];

    var player = "";

    var system = "";

    var winner = false;

    var win1 = ['s1', 's2', 's3'];
	var win2 = ['s4', 's5', 's6'];
	var win3 = ['s7', 's8', 's9'];
	var win4 = ['s1', 's4', 's7'];
	var win5 = ['s2', 's5', 's8'];
	var win6 = ['s3', 's6', 's9'];
	var win7 = ['s1', 's5', 's9'];
	var win8 = ['s3', 's5', 's7'];

	function gameOver(str, arr) {
		if (str == "t") {
			$('#end').text('It\'s a tie!');
		}
		else if (str == player) {
			$('#end').text('You win!');
		}
		else {
			$('#end').text('You lose!');
		}

		if (arr != undefined) {

			arr.forEach(function(element) {
				$('#' + element).css('color', 'red');
			});

		}

		if (availPos.length > 0) {

			availPos.forEach(function(element) {
				$('#' + element).removeClass('ready');
			});

		}

		$('footer').show();
	}

    function checkForWinner(arr, str) {

    	if (availPos.length == 0) {
    		gameOver('t');
    	}

    	var group;
    	
    	if (win1.every(function(val) { return arr.indexOf(val) >= 0; })) {
    		winner = true;
    		group = win1;
    	}
    	if (win2.every(function(val) { return arr.indexOf(val) >= 0; })) {
    		winner = true;
    		group = win2;
    	}
    	if (win3.every(function(val) { return arr.indexOf(val) >= 0; })) {
    		winner = true;
    		group = win3;
    	}
    	if (win4.every(function(val) { return arr.indexOf(val) >= 0; })) {
    		winner = true;
    		group = win4;
    	}
    	if (win5.every(function(val) { return arr.indexOf(val) >= 0; })) {
    		winner = true;
    		group = win5;
    	}
    	if (win6.every(function(val) { return arr.indexOf(val) >= 0; })) {
    		winner = true;
    		group = win6;
    	}
    	if (win7.every(function(val) { return arr.indexOf(val) >= 0; })) {
    		winner = true;
    		group = win7;
    	}
    	if (win8.every(function(val) { return arr.indexOf(val) >= 0; })) {
    		winner = true;
    		group = win8;
    	}

    	if (winner) {
    		gameOver(str, group);
    		return true;
    	}
    	else {
    		return false;
    	}
    }

    function systemPlayer() {

    	if ($(systemPos).filter(win1).length == 2 && $(availPos).filter(win1).length == 1) {
    		execute($(availPos).filter(win1)[0]);
    	}
    	else if ($(systemPos).filter(win2).length == 2 && $(availPos).filter(win2).length == 1) {
    		execute($(availPos).filter(win2)[0]);
    	}
    	else if ($(systemPos).filter(win3).length == 2 && $(availPos).filter(win3).length == 1) {
    		execute($(availPos).filter(win3)[0]);
    	}
    	else if ($(systemPos).filter(win4).length == 2 && $(availPos).filter(win4).length == 1) {
    		execute($(availPos).filter(win4)[0]);
    	}
    	else if ($(systemPos).filter(win5).length == 2 && $(availPos).filter(win5).length == 1) {
    		execute($(availPos).filter(win5)[0]);
    	}
    	else if ($(systemPos).filter(win6).length == 2 && $(availPos).filter(win6).length == 1) {
    		execute($(availPos).filter(win6)[0]);
    	}
    	else if ($(systemPos).filter(win7).length == 2 && $(availPos).filter(win7).length == 1) {
    		execute($(availPos).filter(win7)[0]);
    	}
    	else if ($(systemPos).filter(win8).length == 2 && $(availPos).filter(win8).length == 1) {
    		execute($(availPos).filter(win8)[0]);
    	}
    	else if ($(playerPos).filter(win1).length == 2 && $(availPos).filter(win1).length == 1) {
    		execute($(availPos).filter(win1)[0]);
    	}
    	else if ($(playerPos).filter(win2).length == 2 && $(availPos).filter(win2).length == 1) {
    		execute($(availPos).filter(win2)[0]);
    	}
    	else if ($(playerPos).filter(win3).length == 2 && $(availPos).filter(win3).length == 1) {
    		execute($(availPos).filter(win3)[0]);
    	}
    	else if ($(playerPos).filter(win4).length == 2 && $(availPos).filter(win4).length == 1) {
    		execute($(availPos).filter(win4)[0]);
    	}
    	else if ($(playerPos).filter(win5).length == 2 && $(availPos).filter(win5).length == 1) {
    		execute($(availPos).filter(win5)[0]);
    	}
    	else if ($(playerPos).filter(win6).length == 2 && $(availPos).filter(win6).length == 1) {
    		execute($(availPos).filter(win6)[0]);
    	}
    	else if ($(playerPos).filter(win7).length == 2 && $(availPos).filter(win7).length == 1) {
    		execute($(availPos).filter(win7)[0]);
    	}
    	else if ($(playerPos).filter(win8).length == 2 && $(availPos).filter(win8).length == 1) {
    		execute($(availPos).filter(win8)[0]);
    	}
    	else {
    		var random = Math.floor((Math.random() * (availPos.length-1)) + 0);
    		execute(availPos[random]);
    	}

    	function execute(str) {
    		$('#' + str).children('span').css('opacity', '1');
    		setTimeout(function() { $('#' + str).children('span').html(system); }, 300);
    		$('#' + str).removeClass('ready');
    		availPos.splice(availPos.indexOf(str), 1);
    		systemPos.push(str);
    		checkForWinner(systemPos, system);
    	}

    }

    $('.player').click(function(){
    	player = $(this).html();
    	if (player == 'X') {
    		system = 'O'
    	}
    	else {
    		system = 'X'
    	}
    	$('header').fadeOut(300);
    	$('.square').addClass('ready');
    });

    $('#playAgain').click(function(){
    	$('footer').fadeOut(300);
    	availPos = ['s1', 's2', 's3', 's4','s5', 's6', 's7', 's8', 's9'];
    	availPos.forEach(function(element){
    		$('#' + element).children('span').html('');
    		$('#' + element).css('color', '#180fa9');
    	});
    	$('.square').addClass('ready');
    	playerPos = [];
    	systemPos = [];
    	winner = false;
    });

	$('body').on('mouseenter','.ready', function(){
		$(this).children('span').css('opacity', '.1');
		$(this).children('span').html(player);
	});

	$('body').on('mouseleave', '.ready', function(){
		$(this).children('span').html('');
	});

    $('body').on("click", ".ready", function(){
    	$(this).children('span').css('opacity', '1');
    	$(this).children('span').html(player);
    	$(this).removeClass('ready');
    	availPos.splice(availPos.indexOf($(this)[0].id), 1);
    	playerPos.push($(this)[0].id);
    	if (!checkForWinner(playerPos, player)) {
    		systemPlayer();
    	}
    });


 });