
//Rings for Saturn
let ring_mat = new THREE.ParticleBasicMaterial({
 	color: 0x3A3A3A,
	opacity: 0.3,
	size:1,
	sizeAttenuation: false
});

let ring_geom = new THREE.BufferGeometry();

let veritices = [];

for(let i = 0; i<20000; i++){
	let vertex = new THREE.Vector3();
	vertex.x = Math.sin(Math.PI/180*i)*(550-i/80);
	vertex.y = Math.random()*20;
	vertex.z = Math.cos(Math.PI/180*i)*(550-i/80);
	veritices.push(vertex.x, vertex.y, vertex.z)
}

	ring_geom.setAttribute('position', new THREE.Float32BufferAttribute(veritices, 3))





//Another buttons



let rising = false, risingSun = false,
	risingMerc = false, risingVen = false,
	risingEarth = false, risingMars = false,
	  risingJup = false, risingSat = false,
	risingUr = false, risingNep = false;

const bar = document.querySelector('.bar');
//let w = window.innerWidth, h = window.innerWidth;	
let w = 400, h = 200;
	const thisScene = new THREE.Scene();
	const thisCamera = new THREE.PerspectiveCamera(45, w/h, 1, 1000000);
	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(w, h)

	

	let texturing;

//Solar
sol.addEventListener('click', function(){
	risingSun = false;
	rising = true;
	risingMerc = false;
	risingVen = false;
	risingEarth = false;
	risingMars = false;
	risingJup = false; 
	risingSat = false;
	risingUr = false;
	risingNep = false;

	 movingMercury = true;
	 movingVenera = true;
	 movingEarth = true;
	 movingMars = true;
	 movingJupiter = true;
	 movingSaturn = true;
	 movingUran = true;
	 movingNeptun = true;	
	
})

//sun
let cube_g = new THREE.SphereGeometry(200, 100, 100);

sunButton.addEventListener('click', function(){
let moving = true;
	 movingMercury = true;
	 movingVenera = true;
	 movingEarth = true;
	 movingMars = true;
	 movingJupiter = true;
	 movingSaturn = true;
	 movingUran = true;
	 movingNeptun = true;	
	

	risingSun = true;
	rising = false;
	risingMerc = false;
	risingVen = false;
	risingEarth = false;
	risingMars = false;
	risingJup = false; 
	risingSat = false;
	risingUr = false;
	risingNep = false;

  texturing	= new THREE.TextureLoader().load(
  	'http://xnameetingpoint.weebly.com/uploads/7/4/1/2/7412327/2399293_orig.png'
  	)
	let cube_m = new THREE.MeshBasicMaterial({
		map: texturing
	});
	let cube = new THREE.Mesh(cube_g, cube_m);
	thisScene.add(cube)
})

//</sun>


//mercury
mercButton.addEventListener('click', function(){	
	 movingMercury = false;
	 movingVenera = true;
	 movingEarth = true;
	 movingMars = true;
	 movingJupiter = true;
	 movingSaturn = true;
	 movingUran = true;
	 movingNeptun = true;	
			



	risingSun = false;
	rising = false;
	risingMerc = true;
	risingVen = false;
	risingEarth = false;
	risingMars = false;
	risingJup = false; 
	risingSat = false;
	risingUr = false;
	risingNep = false;

	 texturing	= new THREE.TextureLoader().load(
	 	'https://phonoteka.org/uploads/posts/2022-09/thumbs/1663099480_2-phonoteka-org-p-tekstura-merkuriya-pinterest-2.jpg'
	 	)
	let cube_m = new THREE.MeshBasicMaterial({
		map: texturing
	});
	let cube = new THREE.Mesh(cube_g, cube_m);
	thisScene.add(cube)
	//alert('123')
})

//</mercury>
	
//<Venera>

venButton.addEventListener('click', function(){
	 movingMercury = true;
	 movingVenera =  false;
	 movingEarth = true;
	 movingMars = true;
	 movingJupiter = true;
	 movingSaturn = true;
	 movingUran = true;
	 movingNeptun = true;	
	


	risingSun = false;
	rising = false;
	risingMerc = false;
	risingVen = true;
	risingEarth = false;
	risingMars = false;
	risingJup = false; 
	risingSat = false;
	risingUr = false;
	risingNep = false;


	 texturing	= new THREE.TextureLoader().load(
	 	'https://kartinkin.net/uploads/posts/2021-07/1627422862_21-kartinkin-com-p-tekstura-poverkhnosti-planet-krasivo-24.jpg'
	 	)
	let cube_m = new THREE.MeshBasicMaterial({
		map: texturing
	});
	let cube = new THREE.Mesh(cube_g, cube_m);
	thisScene.add(cube)
})
//</Venera>


//Earth
	 earthButton.addEventListener('click', function(){
	 	movingMercury = true;
	 movingVenera =  true;
	 movingEarth = true;
	 movingMars = true;
	 movingJupiter = true;
	 movingSaturn = true;
	 movingUran = true;
	 movingNeptun = true;	
	

	 risingSun = false;
	rising = false;
	risingMerc = false;
	risingVen = false;
	risingEarth = true;
	risingMars = false;
	risingJup = false; 
	risingSat = false;
	risingUr = false;
	risingNep = false;


	 texturing	= new THREE.TextureLoader().load(
	 	//'https://kartinkin.net/uploads/posts/2021-07/1627422862_21-kartinkin-com-p-tekstura-poverkhnosti-planet-krasivo-24.jpg'
	 	'https://gamerwall.pro/uploads/posts/2021-11/1637037519_5-gamerwall-pro-p-tekstura-planeti-oboi-na-zastavku-5.jpg'
	 	)
	let cube_m = new THREE.MeshBasicMaterial({
		map: texturing
	});
	let cube = new THREE.Mesh(cube_g, cube_m);
	thisScene.add(cube)
	 })

//</Earth>




//Mars
	 marsButton.addEventListener('click', function(){
	 	movingMercury = true;
	 movingVenera =  true;
	 movingEarth = true;
	 movingMars = true;
	 movingJupiter = true;
	 movingSaturn = true;
	 movingUran = true;
	 movingNeptun = true;	
	

	 risingSun = false;
	rising = false;
	risingMerc = false;
	risingVen = false;
	risingEarth = false;
	risingMars = true;
	risingJup = false; 
	risingSat = false;
	risingUr = false;
	risingNep = false;


	 texturing	= new THREE.TextureLoader().load(
	 	'https://phonoteka.org/uploads/posts/2022-09/1663036482_2-phonoteka-org-p-tekstura-marsa-pinterest-2.jpg'
	 	)
	let cube_m = new THREE.MeshBasicMaterial({
		map: texturing
	});
	let cube = new THREE.Mesh(cube_g, cube_m);
	thisScene.add(cube)
	 })

//</Mars>

//Jupiter
 jupButton.addEventListener('click', function(){
	 	movingMercury = true;
	 movingVenera =  true;
	 movingEarth = true;
	 movingMars = true;
	 movingJupiter = true;
	 movingSaturn = true;
	 movingUran = true;
	 movingNeptun = true;	
	

	 risingSun = false;
	rising = false;
	risingMerc = false;
	risingVen = false;
	risingEarth = false;
	risingMars = false;
	risingJup = true; 
	risingSat = false;
	risingUr = false;
	risingNep = false;


	 texturing	= new THREE.TextureLoader().load(
	 	//'https://phonoteka.org/uploads/posts/2022-09/1663036482_2-phonoteka-org-p-tekstura-marsa-pinterest-2.jpg'
	 	'https://textures.forrest.cz/textures/library/maps/Jupiter.jpg'
	 	)
	let cube_m = new THREE.MeshBasicMaterial({
		map: texturing
	});
	let cube = new THREE.Mesh(cube_g, cube_m);
	thisScene.add(cube)
	 })

//</Jupiter>


//Saturn

//scene.add(ring)
	satButton.addEventListener('click', function(){
	 	movingMercury = true;
	 movingVenera =  true;
	 movingEarth = true;
	 movingMars = true;
	 movingJupiter = true;
	 movingSaturn = true;
	 movingUran = true;
	 movingNeptun = true;	
	

	 risingSun = false;
	rising = false;
	risingMerc = false;
	risingVen = false;
	risingEarth = false;
	risingMars = false;
	risingJup = false; 
	risingSat = true;
	risingUr = false;
	risingNep = false;


	 texturing	= new THREE.TextureLoader().load(
	 	//'https://textures.forrest.cz/textures/library/maps/Jupiter.jpg'
	 	'https://static.wikia.nocookie.net/planet-texture-maps/images/6/61/Saturn.jpg/revision/latest?cb=20190416043829'
	 	)
	 //cube_g = new THREE.SphereGeometry(200, 30, 30)
	let cube_m = new THREE.MeshBasicMaterial({
		map: texturing
	});
	let cube = new THREE.Mesh(cube_g, cube_m);
	thisScene.add(cube)
	let sat_ring = new THREE.Points(ring_geom, ring_mat);
	//thisScene.add(sat_ring)
	sat_ring.castShadow = true;

	sat_ring.position.z = cube.position.z;
		sat_ring.position.x = cube.position.x;
		camera.position.z -= Math.PI/20
	 })

//</Saturn>


//Uran
	urButton.addEventListener('click', function(){
	 movingMercury = true;
	 movingVenera =  true;
	 movingEarth = true;
	 movingMars = true;
	 movingJupiter = true;
	 movingSaturn = true;
	 movingUran = true;
	 movingNeptun = true;	
	

	risingSun = false;
	rising = false;
	risingMerc = false;
	risingVen = false;
	risingEarth = false;
	risingMars = false;
	risingJup = false; 
	risingSat = false;
	risingUr = true;
	risingNep = false;


	 texturing	= new THREE.TextureLoader().load(
	 	'https://kartinkin.net/uploads/posts/2021-07/1627112608_1-kartinkin-com-p-tekstura-planeti-uran-krasivo-1.jpg'
	 	)
	 //cube_g = new THREE.SphereGeometry(200, 30, 30)
	let cube_m = new THREE.MeshBasicMaterial({
		map: texturing
	});
	let cube = new THREE.Mesh(cube_g, cube_m);
	thisScene.add(cube)
	let sat_ring = new THREE.Points(ring_geom, ring_mat);
	//thisScene.add(sat_ring)
	sat_ring.castShadow = true;

	sat_ring.position.z = cube.position.z;
		sat_ring.position.x = cube.position.x;
		camera.position.z -= Math.PI/20
	 })

//</Uran>
	
	nepButton.addEventListener('click', function(){
	 movingMercury = true;
	 movingVenera =  true;
	 movingEarth = true;
	 movingMars = true;
	 movingJupiter = true;
	 movingSaturn = true;
	 movingUran = true;
	 movingNeptun = true;	
	

	risingSun = false;
	rising = false;
	risingMerc = false;
	risingVen = false;
	risingEarth = false;
	risingMars = false;
	risingJup = false; 
	risingSat = false;
	risingUr = false;
	risingNep = true;


	 texturing	= new THREE.TextureLoader().load(
	 	'https://upload.wikimedia.org/wikipedia/commons/1/1e/Solarsystemscope_texture_2k_neptune.jpg'
	 	)
	 //cube_g = new THREE.SphereGeometry(200, 30, 30)
	let cube_m = new THREE.MeshBasicMaterial({
		map: texturing
	});
	let cube = new THREE.Mesh(cube_g, cube_m);
	thisScene.add(cube)
	let sat_ring = new THREE.Points(ring_geom, ring_mat);
	//thisScene.add(sat_ring)
	sat_ring.castShadow = true;

	sat_ring.position.z = cube.position.z;
		sat_ring.position.x = cube.position.x;
		camera.position.z -= Math.PI/20
	 })

//Neptun

//</Neptun>


		thisCamera.position.z = 1000;

let controls = new THREE.OrbitControls(thisCamera, renderer.domElement );

	
		thisAnimate();
	function thisAnimate(){
		//sun
		if(risingSun === true){ 
		if(camera.position.z > sun.position.z+8000){
			camera.position.z -= 30;
		}

		if(camera.position.z < sun.position.z+8000){
			camera.position.z += 30;
			camera.lookAt(sun.position)	
		}
	}
		
	//sol	
		if(rising === true) if(camera.position.z < 20300){
			camera.position.z += 1000; 
			camera.lookAt(sun.position)	
		}

	//merc 

		if(risingMerc === true){
		movingMercury = false;	
		if(camera.position.z > mercury.position.z-100){
		//camera.position.z = mercury.position.z+100;
		camera.position.z -= 80;

		} 

		if(camera.position.z < mercury.position.z-100){
			camera.position.z += 80;

		}

		if(camera.position.x < mercury.position.x-200){
			camera.position.x += 30;
		}
		camera.lookAt(mercury.position)	
}

	//ven
	if(risingVen === true){
		movingVenera = false;

		if(camera.position.z > venera.position.z-100){
		//camera.position.z = mercury.position.z+100;
		camera.position.z -= 80;

		} 

		if(camera.position.z < venera.position.z-400){
			camera.position.z += 80;

		}

		if(camera.position.x < venera.position.x-200){
			camera.position.x += 30;
		}
		camera.lookAt(venera.position)	
	}



	//earth
	if(risingEarth === true){
		movingEarth = false;

		if(camera.position.z > earth.position.z-600){
		//camera.position.z = mercury.position.z+100;
		camera.position.z -= 80;

		} 

		if(camera.position.z < earth.position.z-1000){
			camera.position.z += 80;

		}

		if(camera.position.x < earth.position.x-700){
			camera.position.x += 30;
		}
		camera.lookAt(earth.position)	
	}
	//</earth>/


	//mars
	if(risingMars === true){
		movingMars = false;

		if(camera.position.z > mars.position.z-300){
		//camera.position.z = mercury.position.z+100;
		camera.position.z -= 80;

		} 

		if(camera.position.z < mars.position.z-500){
			camera.position.z += 80;

		}

		if(camera.position.x < mars.position.x-700){
			camera.position.x += 30;
		}
		camera.lookAt(mars.position)	
	}

	//</mars>


	//jupiter
	if(risingJup === true){
		movingJupiter = false;

		if(camera.position.z > jupiter.position.z-900){
		//camera.position.z = mercury.position.z+100;
		camera.position.z -= 80;

		} 

		if(camera.position.z < jupiter.position.z-1000){
			camera.position.z += 80;

		}

		if(camera.position.x < jupiter.position.x-700){
			camera.position.x += 30;
		}
		camera.lookAt(jupiter.position)	
	}

	//</jupiter>

//Saturn

if(risingSat === true){
		movingSaturn = false;

		if(camera.position.z > saturn.position.z-900){
		//camera.position.z = mercury.position.z+100;
		camera.position.z -= 30;

		} 

		if(camera.position.z < saturn.position.z-1000){
			camera.position.z += 30;

		}

		if(camera.position.x < saturn.position.x-700){
			camera.position.x += 30;
		}
		camera.lookAt(saturn.position)	
		
	}

//</Saturn>	


//Uran
	

if(risingUr === true){
		movingUran = false;

		if(camera.position.z > uran.position.z-900){
		//camera.position.z = mercury.position.z+100;
		camera.position.z -= 30;

		} 

		if(camera.position.z < uran.position.z-1000){
			camera.position.z += 30;

		}

		if(camera.position.x < uran.position.x-700){
			camera.position.x += 30;
		}
		camera.lookAt(uran.position)	
		
	}

	
//</Uran>


	//Neptun
		if(risingNep === true){
		movingNeptun = false;

		if(camera.position.z > neptun.position.z-900){
		//camera.position.z = mercury.position.z+100;
		camera.position.z -= 30;

		} 

		if(camera.position.z < neptun.position.z-1000){
			camera.position.z += 30;

		}

		if(camera.position.x < neptun.position.x-700){
			camera.position.x += 30;
		}
		camera.lookAt(neptun.position)	
		
	}

	//</Neptun>


		requestAnimationFrame(thisAnimate);

		renderer.render(thisScene, thisCamera)
	
	}
	// /movingEarth = false;

		camera.lookAt(earth.position)	
		//document.body.appendChild(renderer.domElement)
		bar.appendChild(renderer.domElement)