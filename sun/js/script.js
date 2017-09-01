
$('#slider li:first').addClass('active');
$('.day').addClass('active');
setInterval("change()",10000);
let index=0;
let a;
$('.right').on('click',change);
$('.left').on('click', function () {change(1)});


function change(a) {
	if(a){index--}else {index++}
	if(index>=$('#slider').children().length){index=0}
	if (index<0){index=$('#slider').children().length-1}
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



