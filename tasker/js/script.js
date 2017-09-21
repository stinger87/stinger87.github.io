let storage = JSON.parse(localStorage.getItem('arr'));
if (storage+''!=='null'){
	storage.forEach(function(e){
		create(e.name,e.status)
	});
}

$('#new-todo').keyup(function(){
	let $inp =$('#new-todo').val();
	if (event.keyCode === 13 && $inp.length>0) {
		create($inp);
		$('#new-todo').val('');
	}
});

$('#todo-list').on("click", ".destroy", function() {
	$(this).parent().parent().remove();
	if(!$('#todo-list').children().length){$('#main,#footer').css({'display':''});}
	check();
	number();
	local();
});

$('#toggle-all').on('click',function () {
	if ($('#toggle-all').is(':checked')){
		$('#todo-list li').addClass('completed');
		$('.toggle').prop('checked', true);
	} else {
		$('#todo-list li').removeClass('completed');
		$('.toggle').prop('checked', false);
	}
	number();
	local();
});

$('#todo-list').on('click',".toggle",function () {
	check();
	if ($(this).prop('checked')){$(this).parent().parent().addClass('completed');
	} else {
		$(this).parent().parent().removeClass('completed');
	}
	number();
	seleckt();
	local();
});

function create(e,c) {
	let checked;
	if (c!=='completed'){c='';} else {checked = 'checked'}
	$('#todo-list').prepend('<li class="'+c+'"><div class="view"><input class="toggle" type="checkbox"'+checked+'><label>'+e+'</label><button class="destroy"></button></div><input class="edit" value="'+e+'"></li>')
	$('#main,#footer').css({'display':'block'});
	check();
	number();
	local();
}

function check() {
	if ($('.toggle:checked').length===$('.toggle').length){
		$('#toggle-all').prop('checked', true)
	}else {
		$('#toggle-all').prop('checked', false )
	}
}

function number() {
	$('#todo-count strong').text($('.toggle').not(':checked').length);
}
$('#clear-completed').on('click',function () {
	$('#todo-list').children('.completed').remove();
});
$('#filters li').on('click',function () {
	$('#filters li').children().removeClass('selected');
	$(this).children().addClass('selected');
	seleckt()
});

function seleckt() {
	let $atr =$('#filters').find('.selected').attr('href');
	if ($atr === '#/all'){
		$('#todo-list li').removeClass('hide')
	}
	if ($atr === '#/active'){
		$('#todo-list li').removeClass('hide');
		$('#todo-list').children('.completed').addClass('hide')
	}
	if ($atr === '#/completed'){
		$('#todo-list li').removeClass('hide');
		$('#todo-list').children().not('.completed').addClass('hide')
	}
}

function local() {
	localStorage.clear('arr');
	let arr = [];
	$('#todo-list').children().each(function () {
		arr.unshift({ 'name': $(this).find('label').text(), 'status': $(this).attr('class')+'' });
	});
	localStorage.setItem('arr', JSON.stringify(arr));
}



