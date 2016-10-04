'use strict'

var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var port = process.env.PORT || 3000 

app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())

app.get('/api/product', (req,res) => {
	res.send(200, { 'products': [] })
})

app.get('/api/product/:productId', (req,res) => {
	
})

app.post('/api/product', (req, res) => {

	console.log(req.body)
	res.status(200).send({message: 'El producto se ha agregado'})

})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})

app.listen(port, () => {
	console.log(`Running on port: ${port}`)
})