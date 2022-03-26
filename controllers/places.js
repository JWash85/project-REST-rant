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
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
    res.render('places/index', {places})
})
module.exports = router