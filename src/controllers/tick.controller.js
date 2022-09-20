const express = require('express')
const router = express.Router()
// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', function (req, res) {
    // possible middleware
    // use service to get users from database and do logic
    res.send({message: 'we got ticks'});
});


module.exports = router