const modal = document.querySelector('.modal');
const modalClick = document.getElementById('editor');
const close = document.getElementById('close');

close.addEventListener('click', function () {
	modal.style = 
	`
		display: none;
	`
});

modalClick.addEventListener('click', function () {
	modal.style = 
	`
		display: flex;
	`
});

