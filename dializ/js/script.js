
$('.side img').each(function () {
	$(this).css({height:$(this).parent().outerHeight()+'px', width:'auto'})
});
(function($) {
	$("div.tabs__caption").on("click", "li:not(.active)", function() {
		$(this)
			.addClass("active")
			.siblings()
			.removeClass("active")
			.closest("div.tabs")
			.find("div.tabs__content")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");
	});
})(jQuery);

(function($) {
	$('h2.ills').on("click", function () {
		if (window.innerWidth <= 810) {
			$('.tabs__caption li').each(function () {
				$(this).toggleClass("show");
				$(this).on("click", function () {
					$('.tabs__caption li').each(function () {
						$(this).removeClass("show");
					})
				})
			})
		}
	});
})(jQuery);

(function($) {
	var $nav =$('#navigation');
	var $h = $nav.offset().top;
	var $sc;
	$(window).on("resize",function () {
		var $fixed;
		if ($nav.hasClass('fixed')){
			$fixed = 1;
			$nav.removeClass('fixed');
		}
		$h = $nav.offset().top;
		if ($fixed){$nav.addClass('fixed');}
	});
	$(window).on("scroll",function () {
		$sc = $(window).scrollTop();
		if($sc>=$h){
			$nav.addClass('fixed');
			$('header').css({'padding-bottom': $nav.height() + 'px'});
		} else {
			$nav.removeClass('fixed');
			$('header').css({'padding-bottom': 0});
		}
	});
})(jQuery);

$(document).ready(function(){
	$("#navigation").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top-$('#navigation').height();
		$('body,html').animate({scrollTop: top}, 1000);
	});
});


(function($){
	var $li = $('menu li:not(:first)');
	$li.on("click",function () {
		$('#svg_1, #svg_2, #svg_3').removeClass("svg_1 svg_2 svg_3");
		$li.stop().removeAttr('style');
	});
	$('.burger').on("click",function () {
		$('#svg_1').toggleClass("svg_1");
		$('#svg_2').toggleClass("svg_2");
		$('#svg_3').toggleClass("svg_3");
		$li.stop().slideToggle(1000)
	});
})(jQuery);


$(window).on("resize",function () {
	if (window.innerWidth>770){
		$('menu li:not(:first)').removeAttr('style');
	}
});

















