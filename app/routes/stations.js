const express = require('express')
const Station = require('../models/station')
const Car = require('../models/car')
// initiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action ....READ
 * Method .....GET
 * URI ........./api/stations
 * Description .... get ALL stations
 */
router.get("/api/stations", (req, res) => {
    // res.json({ mesaage: "get all stations" });
    Station.find()
        .then(allStations => {
            res.status(200).json({ stations: allStations });
        })
        .catch(error => {
            res.status(500).json({ error: error });
        });
});

//........................................//
/**
 * Action ....SHOW
 * Method .....GET
 * URI ........./api/stations/ any id
 * Description .... get any station by Station Id
 */
router.get('/api/stations/:id', (req, res) => {
    Station.findById(req.params.id)
        .then((station) => {
            //   res.status(200).json({article: article})
            if (station) {
                res.status(200).json({ station: station })
            }
            else {
                res.status(404).json({
                    error: {
                        name: "Document not found",
                        message: "The provided ID dosnot match any documents"
                    }
                })
            }
        })
        .catch((error) => {
            res.status(500).json({ error: error })

        })
})
/**
* Action ....CREATE
* Method .....POST
* URI ........./api/articles/ 
*  Description .... create a new article
*/
router.post('/api/stations', (req, res) => {
    Station.create(req.body.station)

        .then((newStation) => {
            res.status(201).json({ newStation: newStation })
        })
        .catch((error) => {
            res.status(500).json({ error: error })
        })
})
/**
 * Action ....UPDATE
 * Method .....PATCH   
 * URI ........./api/stations/ any id
 *  Description .... update any station by Station Id
 */
//replaace every thing on object for put 
// patch 

router.patch('/api/stations/id:', (req, res) => {
    Station.findById(res.params.id)
        .then((station) => {
            if (station) {
                // pass the result of Mongoos's .update method
                return station.update(req.body.station);
            } else {
                res.status(404).json({
                    error: {
                        name: 'DocumentNoFind',
                        message: 'the provider ID does\'t match any documents'
                    }
                });
            }
        })
        .then(() => {
            //if the update successed, return 204 and no json
            res.status(204).end
        })
        .catch((error) => {
            res.status(500).json({ error: error })
        })
})


/**
* Action ....DESTROY
* Method .....DELETE  
* URI ........./api/stations/ any id
*  Description .... Delete station by id 
*/
router.delete('/api/stations/:id', (req, res) => {
    Station.findById(req.params.id)
        .then((station) => {
            if (station) {

                return station.remove()

            }
            else {
                res.status(404).json({
                    error: {
                        name: "DocumentNotFound",
                        message: "The provided ID dosnot match any documents"
                    }
                })
            }
        }).then(() => {
            //  if the deletion sucess return 204 and no json

            res.status(204).end()
        })
        .catch((error) => {
            res.status(500).json({ error: error })
        })
})

module.exports = router;