function checkEl() {
	let scrollW = window.outerHeight,
		toTop = window.pageYOffset,
		toBottom = toTop + (scrollW - 200),
		el = document.querySelectorAll('.animate');

	el.forEach(function(e) {
		if(e.offsetTop <= toBottom) {
			e.classList.add('active');
		} else {
			e.classList.remove('active');
		}
	})
};

setTimeout(function() {
	checkEl();
}, 1);


window.addEventListener('scroll', function(){
	checkEl();
});