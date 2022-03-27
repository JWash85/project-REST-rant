//index.js controller page

//code to create and export an express.Router()
const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    //res.send('GET /places')
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    //Using push() method to add new places data from req.body to places array
    places.push(req.body)
    //redirect used to redirect to another route
    res.redirect('/places')
  })
module.exports = router