rusButtonClick();
russian.style = 
	`
	  border: 1.5px solid;
	  border-color: rgb(64, 182, 253);

	`


let div = document.createElement('div');
div.id = 'div-text-about';


let textAbout = document.createElement('p');
textAbout.innerText = SolarSystem_ru;
textAbout.id = 'text-about';



textAbout.appendChild(moreInformation)




tajik.addEventListener('click', function(){
	tajNet();
	tajButtonClick();
	tajikLang = true;
	russianLang = false;
	englishLang = false;
	tajButtons();
	russian.style = `border: none;`;
	english.style = `border: none;`;

 	if(rising === true){
 	title.innerText = 'Системаи офтобӣ';
 	 textAbout.innerText = SolarSystem_taj;
}
 	tajik.style = 
	`
	  border: 1.5px solid;
	  border-color: rgb(64, 182, 253);

	`
	//anylang = false

	
	short = true;
	moreInformation.innerText = 'Маълумоти мухтасар';
	textAbout.appendChild(moreInformation);

})


russian.addEventListener('click', function(){
	ruNet();
	rusButtonClick();
	tajikLang = false;
	russianLang = true;
	englishLang = false;

	russianButtons();
	tajik.style = `border: none;`;
	english.style = `border: none;`
	// if(rising === true){
	// 	title.innerText = 'Солнечная система';
	// 	textAbout.innerText = SolarSystem_ru;
	// }

	rusInfoPlanet();

	languages.style = `border: none`;

	russian.style = 
	`
	  border: 1.5px solid;
	  border-color: rgb(64, 182, 253);

	`

	
	short = true;
	moreInformation.innerText = 'Больше информации';
	textAbout.appendChild(moreInformation);
})



english.addEventListener('click', function(){
	datNet();
	engButtonClick();
	tajikLang = false;
	russianLang = false;
	englishLang = true;

	englishButtons();
	tajik.style = `border: none;`
	russian.style = `border: none;`

	if(rising === true){
	title.innerText = 'Solar System';
		textAbout.innerText = SolarSystem_eng;
	}

	english.style = 
	`
	  border: 1.5px solid;
	  border-color: rgb(64, 182, 253);

	`

	
	short = true;
	moreInformation.innerText = 'More information';
	textAbout.appendChild(moreInformation);
})

bar.appendChild(textAbout);
//bar.appendChild(moreInformation)
//bar.appendChild(div)



//<More information>

	
moreInformation.addEventListener('click', function(){
if(short === false){

//<Tajik>

if(tajikLang === true){
	if(rising === true)  textAbout.innerText = SolarSystem_taj;

	if(risingSun === true) textAbout.innerText = tajSun;

	if(risingMerc === true) textAbout.innerText = tajMerc;

	if(risingVen === true) textAbout.innerText = tajVen;
	
	if(risingEarth === true) textAbout.innerText = tajEarth;
	
	if(risingMars === true) textAbout.innerText = tajMars;
	
	if(risingJup === true) textAbout.innerText = tajJup;

	if(risingSat === true) textAbout.innerText = tajSat;
	
	if(risingUr === true) textAbout.innerText = tajUr;
	
	if(risingNep === true) textAbout.innerText = tajNep;

	moreInformation.innerText = 'Маълумоти мухтасар';
	}
//</Tajik>

//<Russian>	
	if(russianLang === true){
	if(rising === true) textAbout.innerText = SolarSystem_ru;

	if(risingSun === true) textAbout.innerText = ruSun;

	if(risingMerc === true) textAbout.innerText = ruMerc;

	if(risingVen === true) textAbout.innerText = ruVen;
	
	if(risingEarth === true) textAbout.innerText = ruEarth;
	
	if(risingMars === true) textAbout.innerText = ruMars;
	
	if(risingJup === true) textAbout.innerText = ruJup;

	if(risingSat === true) textAbout.innerText = ruSat;
	
	if(risingUr === true) textAbout.innerText = ruUr;
	
	if(risingNep === true) textAbout.innerText = ruNep;

	moreInformation.innerText = 'Больше информации';
	}
//</Russian>




//<English>
	if(englishLang === true){
	 if(rising === true) textAbout.innerText = SolarSystem_eng;

	 if(risingSun === true) textAbout.innerText = engSun;

	if(risingMerc === true) textAbout.innerText = engMerc;

	if(risingVen === true) textAbout.innerText = engVen;
	
	if(risingEarth === true) textAbout.innerText = engEarth;
	
	if(risingMars === true) textAbout.innerText = engMars;
	
	if(risingJup === true) textAbout.innerText = engJup;

	if(risingSat === true) textAbout.innerText = engSat;
	
	if(risingUr === true) textAbout.innerText  = engUr;
	
	if(risingNep === true) textAbout.innerText = engNep;

	moreInformation.innerText = 'More information';
	}
//</English>
	textAbout.appendChild(moreInformation)
	short = true
}


else if(short === true){

//<Tajik>

if(tajikLang === true){
	if(rising === true)  textAbout.innerText = solarSystemFool_taj;

	 if(risingSun === true) textAbout.innerText = sunFool_taj;

	 if(risingMerc === true) textAbout.innerText = mercFool_taj;

	 if(risingVen === true) textAbout.innerText = venFool_taj;
	
	if(risingEarth === true) textAbout.innerText = earthFool_taj;
	
	if(risingMars === true) textAbout.innerText = marsFool_taj;
	
	if(risingJup === true) textAbout.innerText = jupFool_taj;

	if(risingSat === true) textAbout.innerText = satFool_taj;
	
	if(risingUr === true) textAbout.innerText = urFool_taj;
	
	if(risingNep === true) textAbout.innerText = nepFool_taj;

	moreInformation.innerText = 'Маълумоти кӯтоҳ';
	}
//</Tajik>	

//<Russian>
	if(russianLang === true){
	
	if(rising === true) textAbout.innerText = solarSystemFool_rus
	
	if(risingSun === true) textAbout.innerText = sunFool_rus;
	
	if(risingMerc === true) textAbout.innerText = mercFool_rus;
	
	if(risingVen === true) textAbout.innerText = venFool_rus;
	
	if(risingEarth === true) textAbout.innerText = earthFool_rus;
	
	if(risingMars === true) textAbout.innerText = marsFool_rus;
	
	if(risingJup === true) textAbout.innerText = jupFool_rus;

	if(risingSat === true) textAbout.innerText = satFool_rus;
	
	if(risingUr === true) textAbout.innerText = urFool_rus;
	
	if(risingNep === true) textAbout.innerText = nepFool_rus;
	



	moreInformation.innerText = 'Меньше информации'
	}
//</Russian>


//<English>
	if(englishLang === true){
	 if(rising === true) textAbout.innerText = solarSystemFool_eng;

	 if(risingSun === true) textAbout.innerText = sunFool_eng;

	 if(risingMerc === true) textAbout.innerText = mercFool_eng;

	 if(risingVen === true) textAbout.innerText = venFool_eng;
	
	 if(risingEarth === true) textAbout.innerText = earthFool_eng;
	
	 if(risingMars === true) textAbout.innerText = marsFool_eng;
	
	 if(risingJup === true) textAbout.innerText = jupFool_eng;

	 if(risingSat === true) textAbout.innerText = satFool_eng;
	
	 if(risingUr === true) textAbout.innerText = urFool_eng;
	
	 if(risingNep === true) textAbout.innerText = nepFool_eng;

	moreInformation.innerText = 'More information';
	}
//</English>

	short = false;
}



	textAbout.appendChild(moreInformation)
})
//</More information>