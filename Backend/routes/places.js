const router = require('express').Router();
const placesData = require('../cities_details.json');

router.get('/',(req,res)=>{
    res.json(placesData);
})

router.get('/test',(req,res)=>{
    res.send(test);
})

module.exports = router;