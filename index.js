//required to use HTTP methods: PUT and DELETE
const methodOverride = require('method-override')

//Get the enviroment variables
require('dotenv').config()

//require needed node modules
const express = require('express')
const app = express()

//Code to import the router from the controller places.js
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use('/places', require('./controllers/places'))
app.use(methodOverride('_method'))

app.get('/', function(req, res){
    res.render('home')
})

//Make a wildcard route to display 404 error
//Using arrow function
app.get('*', (req, res) => {
    //.status(404) gives a legitmate 404 status code
    res.render('error404')//.send('<h1>404 Page</h1>')
})
//Pulls port variable from .env file
app.listen(process.env.PORT)

