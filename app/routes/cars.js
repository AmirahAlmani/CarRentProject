const express = require('express')
const Station = require('../models/station')
const Car = require('../models/car')
// initiate a Router (mini app that only handles routes)
const router = express.Router();

//create cars


//============ GET ===============


router.get('/get/car', (req, res) => {
    Car.find()
        // Return all Cars as an Array
        .then((allCars) => {
            res.status(200).json({ Cars: allCars });
        })
        // Catch any errors that might occur
        .catch((error) => {
            res.status(500).json({ error: error });
        });
});




//============ POST ===============


router.post('/create/car', (req, res) => {
    console.log('Post/create')
    const newCar = req.body.car
    Car.create(newCar, (err, result) => {
        if (err) {
            console.log(err)

        }
        else {
            console.log(result)
            res.send('create' + newCar)
        }
    })
})


//============ Update =============

router.patch('/update/Car/:id', (req, res) => {
    Car.findById(req.params.id)
        .then((car) => {
            if (car) {
                // Pass the result of Mongoose's `.update` method to the next `.then`
                return car.update(req.body.car);
            } else {
                // If we couldn't find a document with the matching ID
                res.status(404).json({
                    error: {
                        name: 'DocumentNotFoundError',
                        message: 'The provided ID doesn\'t match any documents'
                    }
                });
            }
        })
        .then(() => {
            // If the update succeeded, return 204 and no JSON
            res.status(204).end();
        })
        // Catch any errors that might occur
        .catch((error) => {
            res.status(500).json({ error: error });
        });
});



//=========== Delete ===========================

router.delete('/delete/car/:id', (req, res) => {
    Car.findById(req.params.id)
        .then((car) => {
            if (car) {
                // Pass the result of Mongoose's `.delete` method to the next `.then`
                return car.remove();
            } else {
                // If we couldn't find a document with the matching ID
                res.status(404).json({
                    error: {
                        name: 'DocumentNotFoundError',
                        message: 'The provided ID Doesn\'t match any documents'
                    }
                });
            }
        })
        .then(() => {
            // If the deletion succeeded, return 204 and no JSON
            res.status(204).end();
        })
        // Catch any errors that might occur
        .catch((error) => {
            res.status(500).json({ error: error });
        });
});



module.exports = router;
