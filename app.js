const express = require('express')
const fs = require('fs')
const app = express()
const pug = require('pug')

const Jojo = require('./lib/models/jojo')
const template = pug.compileFile('templates/jojo.pug')

app.get('/status', function(req, res){
	res.send('Ok')
})

app.get('/jojo', function(req, res){
	Jojo.read('data/jojo.json', (err, data) => {
		if(err){
			res.statusCode = 500
			res.setHeader('Content-Type', 'text/plain')
			res.send('noob')
		}
		else{
			res.statusCode = 200
			res.setHeader('Content-Type', 'text/plain')
			res.send(template(JSON.parse(data)))
		}
	})
	fs.readFile('data/jojo.json', (err, data) => {
		if(err){
			res.statusCode = 500
			res.setHeader('Content-Type', 'text/plain')
			res.send('noob')
		}
		else{
			res.statusCode = 200
			res.setHeader('Content-Type', 'text/plain')
			res.send(template(JSON.parse(data)))
		}
	})
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})