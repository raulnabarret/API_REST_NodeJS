'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var Product = require('./models/product')

var app = express()
var port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/product', (req, res) => {
    res.send(200, { 'products': [] })
})

app.get('/api/product/:productId', (req, res) => {

})

app.post('/api/product', (req, res) => {

	console.log('POST /api/product')
	console.log(req.body)

	let product = new Product()
	
	product.name = req.body.name
	product.picture = req.body.picture
	product.price = req.body.price
	product.category = req.body.category
	product.description = req.body.description

	product.save((err, productStored) => {
		if(err) return res.status(500).send({message: `Error saving in DataBase: ${err}` })

		res.status(200).send({product: productStored})
	})
})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) return console.log(err)

    console.log('Database connected')

    app.listen(port, () => {
        console.log(`Running on port: ${port}`)
    })

})
