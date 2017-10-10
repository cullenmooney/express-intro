// Basic structure of the web
// Client (ex. browser, AJAX) makes a request to the server, and the server (ex. amazon) returns a response

// Express is built on top of node
// -express is a server framework (like mocha or chai)
// -node is asynchronous, js server side language
// -node has NPM-node package manager (allows us to install modules, like express)
// -npm is the first step, makes json
// -main is going to be what me name server file
// -then install npm express

const express = require('express'); // first step
const app = express();  // app is an object with a bunch of methods
// to build a server

app.get('/', (request, response) => {  // request object and response object
	response.send('Hi im the information the server has sent to the client');
});

app.get('/tacos', (req, res) => {
	res.json({
		"taco": 52,
		"type": "carne asada"
	})
})

app.get('/reqobject', (req, res) => {
	console.log(req)
	res.send('dog')
})

app.get('/charizo', (req, res) => {
	res.send('chorizo')
})

// localhost:3000/tacos 

app.listen(3000, () => {  // listening on port 3000, and then calls back function
	console.log('listening on port 3000');
});

// to run --- node then file in terminal (will show 'listening on port 3000')
// need to write a method to accept a get request (line 16)
// all the code we written has been read by the client

// nodemon has to be run at same level as package.json
// that way to don't have to constantly restart the server
// server file has to be in "main" for package.json for nodemon to run

// when we upload to github, we want to ignore the node modules













