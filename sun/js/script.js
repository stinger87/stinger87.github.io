$( document ).ready(function() {
	let $length = $('#slider').children().length;
	let interval;
	let index = 0;
	inter();
	circle();
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
		number($(this).index());
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
		$('#slider li').removeClass('active').eq(index).addClass('active');
		$('.circle').children().removeClass('point').eq(index).addClass('point');
	}
	function side() {
		if (index>0) {
			index--
		} else {
			index=$length-1
		}
		$('#slider li').removeClass('active').eq(index).addClass('active');
		$('.circle').children().removeClass('point').eq(index).addClass('point');
	}

	function number(i) {
		$('#slider li').removeClass('active').eq(i).addClass('active');
		$('.circle').children().removeClass('point').eq(i).addClass('point');
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
});





