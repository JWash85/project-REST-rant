//index.js controller page

//code to create and export an express.Router()
const router = require('express').Router()
router.get('/', (req, res) => {
    res.send('GET /places')
})
module.exports = router