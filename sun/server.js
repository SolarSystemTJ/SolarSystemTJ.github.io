const express = require('express');
const path = require('path')
const app = express();

app.use(express.static(__dirname + "./"))
	app.use(
		"/node_modules/",
		express.static(path.join(__dirname, "node_modules"))
	);

app.listen(3000, () => console.log("Visit http://127.0.0.1:3000"));

	
