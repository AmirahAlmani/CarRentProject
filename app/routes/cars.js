const express = require('express')
const Car = require('../models/car')
const Station = require('../models/station')
// initiate a Router (mini app that only handles routes)
const router = express.Router();


//create
router.post("/api/car", (req, res) => {
    Car.create(req.body.car)
        .then(newCar => {
            res.status(201).json({
                car: newCar
            });
        })

        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
});

router.post("/api/car2", (req, res) => {
    // {name:'asdasd , modal:'asdasd}
    console.log(req.body);

    const newCar = new Car(req.body.newCar)
    console.log(newCar);

    Station.findOne({
        // 'A'
        name: req.body.stationName
    })
        // the station details (from find one ) by the name that the user inseert
        .then(oneStation => {

            console.log('oneStation:', oneStation);
            oneStation.cars.push(newCar)
            oneStation.save()
            res.status(201).json(oneStation);
        })

        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
});

//get all
router.get("/api/cars", (req, res) => {
    Car.find()
        // Return all Articles as an Array
        .then(allCars => {
            res.status(200).json({
                car: allCars
            });
        })
        // Catch any errors that might occur
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
});

//Delete
router.delete("/api/car/:id", (req, res) => {
    Car.findById(req.params.id)
        .then(Cars => {
            if (Cars) {
                return Cars.remove();
            } else {
                res.status(404).json({
                    error: {
                        name: "DocumentNotFound",
                        message: "The provided ID dosnot match any documents"
                    }
                });
            }
        })
        .then(() => {
            res.status(204).end();
        })
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
});

//Update
router.patch("/api/car/:id", (req, res) => {
    Car.findById(req.params.id)
        .then(cars => {
            if (cars) {
                // Pass the result of Mongoose's `.update` method to the next `.then`
                return cars.update(req.body.car);
            } else {
                // If we couldn't find a document with the matching ID
                res.status(404).json({
                    error: {
                        name: "DocumentNotFoundError",
                        message: "The provided ID doesn't match any documents"
                    }
                });
            }
        })
        .then(() => {
            // If the update succeeded, return 204 and no JSON
            res.status(204).end();
        })
        // Catch any errors that might occur
        .catch(error => {
            res.status(500).json({
                error: error
            });
        });
});


module.exports = router;