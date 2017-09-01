let $length = $('#slider').children().length;
let interval = setInterval(change,5000);
let index=0;
circle();
$('.round:first').addClass('point');

$('.right').on('click', function () {
	change();
	clearTimeout(interval);
	interval = setInterval(change,5000);
});
$('.left').on('click', function () {
	change({side:true});
	clearTimeout(interval);
	interval = setInterval(change,5000);
});
$('.round').on('click', function () {
	change({number:$(this).index()+1});
	clearTimeout(interval);
	interval = setInterval(change,5000);
});

function change(options) {
	options=$.extend({
		number:false,
		side:false
	},options);
	if (options.side){
		index--
	} else {
		index++
	}
	if (index>=$length) { index = 0}
	if (index<0) {index = $length - 1}
	if (options.number) {index = options.number-1}
	$('#slider li').removeClass('active').eq(index).addClass('active');
	$('.circle').children().removeClass('point').eq($('#slider').children('.active').index()).addClass('point');
}
$('#button').children().on('click', function () {
	if ($('#day').prop("checked")) {
		$('.day').addClass('active');
		$('.night').removeClass('active');
	}	else {
		$('.day').removeClass('active');
		$('.night').addClass('active');
	}
});
function circle() {
	for (let i=0;i<$length;i++) {
		$('.circle').append('<span class="round"></span>')
	}
}





