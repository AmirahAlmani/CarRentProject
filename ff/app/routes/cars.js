const express = require('express')
const Car = require('../models/car')
// initiate a Router (mini app that only handles routes)
const router = express.Router();

//create cars

router.post('/create/car',(req,res)=>{
console.log('Post/create')
const newCar = req.body.car
Car.create(newCar, (err,result)=>{
if(err){
    console.log(err)

}
else{
    console.log(result)
    res.send('create'+ newCar)
}
})
})