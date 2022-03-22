//Get the enviroment variables
require('dotenv').config()
//require needed node modules
const express = require('express')
const app = express()

//Code to import the router from the controller places.js
app.use('/places', require('./controllers/places'))

app.get('/', function(req, res){
    res.send('Hello world!')
})

//Make a wildcard route to display 404 error
//Using arrow function
app.get('*', (req, res) => {
    //.status(404) gives a legitmate 404 status code
    res.status(404).send('<h1>404 Page</h1>')
})
//Pulls port variable from .env file
app.listen(process.env.PORT)