setInterval(change,10000);
let index=0;

$('.right').on('click',change);
$('.left').on('click', function () {change(1)});


function change(a) {
	let $length = $('#slider').children().length;
	if(a){index--}else {index++}
	if(index>=$length) {index = 0}
	if(index<0) {index = $length - 1}
	$('#slider li').removeClass('active').eq(index).addClass('active');

}
$('#button').children().on('click', function () {
	if ($('#day').prop("checked")) {
		$('.day').addClass('active');
		$('.night').removeClass('active');
	}
	else {
		$('.day').removeClass('active');
		$('.night').addClass('active');
	}
});



