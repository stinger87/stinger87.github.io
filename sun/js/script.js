$(document).ready(function() {
	let $slider = $('#slider');
	$slider.find('div').each(function () {
		$(this).data('number', $(this).parent().attr('class'));
		if ($(this).attr('class') === 'day') {
			$(this).css({'background': 'url(images/background_' + $(this).data('number') + '.jpg) no-repeat center'})
		}
		else {
			$(this).css({'background': 'url(images/background_' + $(this).data('number') + '_night.jpg) no-repeat center'})
		}
	});

	$slider.children(':first').addClass('active');
	$slider.children().not(':first').hide();
	setInterval("change()", 10000);

	$('#button').children().on('click', function () {
		if ($('#day').prop("checked")) {
			$('.active').children('.day').stop().fadeIn(2000, function () {
				$('.active').children('.night').hide()
			})
		}
		else {
			$('.active').children('.night').show();
			$('.active').children('.day').stop().fadeOut(2000)
		}
	});

	function change() {
		if ($('.active').next().length) {
			if ($('#day').prop("checked")) {
				$('.active').next().find('.night').hide();
				$('.active').next().find('.day').show()
			}
			else {
				$('.active').next().find('.day').hide();
				$('.active').next().find('.night').show()
			}
			$('.active').removeClass('active').next().addClass('active');
			$('.active').stop().fadeIn(2000, function () {
				$('#slider').children().not('.active').hide();
			});
		} else {
			if ($('#day').prop("checked")) {
				$('.active').parent().children(':first').find('.night').hide();
				$('.active').parent().children(':first').find('.day').show()
			}
			else {
				$('.active').parent().children(':first').find('.day').hide();
				$('.active').parent().children(':first').find('.night').show()
			}
			$('.active').removeClass('active').parent().children(':first').addClass('active');
			$('.active').stop().fadeIn(2000, function () {
				$('#slider').children().next(':last').hide();
			});
		}

	}
});

