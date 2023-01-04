const modal = document.querySelector('.modal');
const modalClick = document.getElementById('editor');
const close = document.getElementById('close');
const moddalText = document.getElementById('moddal-text');
const modal_h1 = document.getElementById('modal-h1');
const dev_main = document.getElementById('dev-main');
const dev_op = document.getElementById('dev-op');
const th = document.getElementById('thank');
close.addEventListener('click', function () {
	modal.style = 
	`
		display: none;
	`
});


function rusModdal(){
		modal_h1.innerText = 'Создатели'

		dev_main.innerText = 'Разработчик: Мирзоев Парвиз';
		dev_op.innerText = 'Dev-ops: Авазбек Эшмуродов';
		th.innerText = 'Благодарности: Хочу поблагодарить мою семью, отдельное благодарность радителям и моим друзьям, они очень помогли мне в обучении нового для меня инструмента.';
}

function tajModdal(){

		modal_h1.innerText = 'Таҳиягарон'
		dev_main.innerText = 'Разработчик: Мирзоев Парвиз';
		dev_op.innerText = 'Dev-ops: Авазбек Эшмуродов';
		th.innerText = 'Ташаккур: Ман мехоҳам ба оилаам ташаккур гӯям, махсусан ба волидонам ва дӯстонам, ки онҳо ба ман дар азхуд кардани асбоби нав барои ман кӯмаки зиёд карданд.';
}

function engModdal(){

		modal_h1.innerText = 'Creators';
		dev_main.innerText = 'Developer: Mirzoev Parviz';
		dev_op.innerText = 'Dev-ops: Avazbek Eshmurodov';
		th.innerText = 'Acknowledgments: I want to thank my family, special thanks to my parents and my friends, they helped me a lot in mastering a new instrument for me.';
}

modalClick.addEventListener('click', function () {

	if(russianLang === true) rusModdal();
	else if(tajikLang === true) tajModdal();
	else if(englishLang === true) engModdal();

	modal.style = 
	`
		display: flex;
	`
});



russian.addEventListener('click', function(){rusModdal()});
tajik.addEventListener('click', function(){tajModdal()});
english.addEventListener('click', function(){engModdal()});

