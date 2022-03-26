//index.js controller page

//code to create and export an express.Router()
const router = require('express').Router()
router.get('/', (req, res) => {
    //res.send('GET /places')
//Changing res.send to res.render and referencing view folder
    let places = []
    res.render('places/index')
})
module.exports = router