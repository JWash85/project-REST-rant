//index.js controller page

//code to create and export an express.Router()
const router = require('express').Router()
router.get('/', (req, res) => {
    //res.send('GET /places')
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/steaming-pizza.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/salad.jpg'
      }]
    res.render('places/index', {places})
})

router.get('/new', (req, res) => {
    res.render('places/new')
})
module.exports = router