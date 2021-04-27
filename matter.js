$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		var links = this.el.find('.link');

		links.on('mouseenter', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
		$this = $(this),
		$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion'), false);
});

/*---toggle-------*/

const colors = document.getElementsByClassName('colors');

let i;
for(i = 0; i<colors.length; i++){
	colors[i].addEventListener('click',changecolor)
}

function changecolor(){
	let color = this.getAttribute('data-color');
	document.documentElement.style.setProperty('--color', color);
}

/*-------popup------*/

function togglePopup(){
	document.getElementById("popup-1").classList.toggle("active");
}

/*-----number only-----*/

function numberonly(input)
{
	var num = /[^0-9]/gi;
	input.value = input.value.replace(num,"");
}