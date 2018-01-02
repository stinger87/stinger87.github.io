
let $length = $('#slider').children().length;
let interval;
let index = 0;
inter();
circle();
bottom_menu();
LeftMenu();
sideMenu();


$('.round:first').addClass('point');

$('.right').on('click', function () {
	change();
	inter();
});
$('.left').on('click', function () {
	side();
	inter();
});
$('.round').on('click', function () {
	slide($(this).index());
	inter();
});

$('#button').children().on('click', function () {
	if ($('#day').prop("checked")) {
		$('.day').addClass('active');
		$('.night').removeClass('active');
	} else {
		$('.day').removeClass('active');
		$('.night').addClass('active');
	}
});

function change() {
	if (index+1 < $length) {
		index++
	} else {
		index=0
	}
	slide(index)
}
function side() {
	if (index>0) {
		index--
	} else {
		index=$length-1
	}
	slide(index)
}

function slide(i) {
	$('#slider li').removeClass('active').eq(i).addClass('active');
	$('.circle').children().removeClass('point').eq(i).addClass('point');
	index=i;
}

function inter() {
	clearTimeout(interval);
	interval = setInterval(change, 5000);
}

function circle() {
	for (let i = 0; i < $length; i++) {
		$('.circle').append('<span class="round"></span>')
	}
}

function sideMenu() {
	setTimeout(function () {
		$('.leftSide').addClass('leftPosition');
		$('.rightSide').css({right:'0'});
		$('.bottom_menu').css({bottom:'-25px'});
	},2000);

	setTimeout(function () {
		$('.leftSide li a').toArray().reduce(
			function(acc, cur) {
				return acc.then(function() {
					return $(cur).delay(400).promise().then(function() {
						$(this).addClass('show')
					});
				})
			}, Promise.resolve());

	},3000);
}

function bottom_menu() {
	let $center = $(window).width()/2 -$('.bottom_menu').width()/2;
	$('.bottom_menu').css({left:$center+'px'});
}
function map() {
	if(!$('.map').hasClass('hide')){
		let x =	$(window).width()-$('.leftSide').width()-$('.rightSide').width();
		let y =	$(window).height()-$('footer').height();
		let l = $('.leftSide').width();
		$('.map').css({width:x+'px', height:y+'px', left:l+'px'});
	}
}

$('.place').on('click',function () {
	$('.map').toggleClass('hide','visible');
	map();
	/*if(!$('.map').hasClass('hide')){
		$('.map').addClass('hide').removeClass('visible');
	} else {$('.map').addClass('visible').removeClass('hide');}*/
	return false;
});
$('.architecture').on('click',function () {
	$('.map').addClass('hide').removeClass('visible');
	return false;
});
$('.infrastructure').on('click',function () {
	$('.map').addClass('hide').removeClass('visible');
	return false;
});

$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		$('.map').addClass('hide').removeClass('visible');
		$('.leftSide').addClass('leftPosition').removeClass('leftShow');
	}
});

$(window).resize(function() {
	map();
	bottom_menu();
	LeftMenu();
});

function LeftMenu() {
	if($('.leftSide ul').height()<615){
		$('.leftSide li a').addClass('none');
	}else {
		$('.leftSide li a').removeClass('none');
	}
}

$('a').on('click',function () {

	return false;
});



$('.arrow').on('click',leftShow);
$('.leftSide a').on('click',leftShow);

function leftShow() {
	if ($('.leftSide').hasClass('leftPosition')){
		$('.leftSide').addClass('leftShow').removeClass('leftPosition');
	} else {
		$('.leftSide').addClass('leftPosition').removeClass('leftShow');
	}
}






