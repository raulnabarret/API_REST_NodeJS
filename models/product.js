'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductSchema = Schema ({
	name: String,
	picture: String,
	price: { type: Number, default: 0 },
	category: { type: String, enum: ['computers', 'phones', 'tablets', 'wearables'] },
	description: String
})

module.exports = mongoose.model('Product', ProductSchema)