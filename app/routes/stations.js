const express = require('express')
const Station = require('../models/station')
const Car = require('../models/car')
// initiate a Router (mini app that only handles routes)
const router = express.Router();

/**
 * Action ....READ
 * Method .....GET
 * URI ........./api/stations
 * Description .... get ALL articles
 */
router.get("/api/stations", (req, res) => {
    res.json({ mesaage: "get all stations" });
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
 * URI ........./api/stations any id
 * Description .... get any article by Article Id
 */
  router.get('/api/articles/:id',(req,res)=>{
    Article.findById(req.params.id)
    .then((article)=>{
    //   res.status(200).json({article: article})
    if(article){
        res.status(200).json({article: article})}
        else{
            res.status(404).json({
                error: {
                    name: "Document not found",
                    message: "The provided ID dosnot match any documents"
                }
            })
        }
    })
    .catch((error)=>{
        res.status(500).json({ error: error})

    })
})

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









//================================================


/**
 * Action ....READ
 * Method .....GET
 * URI ........./api/articles
 * Description .... get ALL articles 
 */
router.get('/api/stations', (req, res) => {
    res.json({ mesaage: 'get all articles' })
    Station.find()
        .then((allStations) => {

            res.status(200).json({ stations: allStations });
        }).catch((error) => {
            res.status(500).json({ error: error });
        })
})

//........................................//
/**
 * Action ....SHOW
 * Method .....GET
 * URI ........./api/articles/ any id
 * Description .... get any article by Article Id
 */
router.get('/api/articles/:id', (req, res) => {
    Article.findById(req.params.id)
        .then((article) => {
            //   res.status(200).json({article: article})
            if (article) {
                res.status(200).json({ article: article })
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
// router.post('/api/stations', (req, res) => {
//     Station.create(req.body.car)
//         .then((newStation) => {
//             res.status(201).json({ station: newStation })
//         })
//         .catch((error) => {
//             res.status(500).json({ error: error })
//         })
// })
/**
* Action ....UPDATE
* Method .....PATCH   
* URI ........./api/articles/ any id
*  Description .... update any article by Article Id
*/
//replaace every thing on object for put 
// patch 

router.patch('/api/articles/id:', (req, res) => {
    Article.findById(res.params.id)
        .then((article) => {
            if (article) {
                // pass the result of Mongoos's .update method
                return article.update(req.body.article);
            } else {
                res.status(404).json({
                    error: {
                        name: 'DocumentNoFind',
                        message: 'the provider ID does\'t match any aocuments'
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
* URI ........./api/articles/ any id
*  Description .... Delete article by id 
*/
router.delete('/api/articles/:id', (req, res) => {
    Article.findById(req.params.id)
        .then((article) => {
            if (article) {

                return article.remove()

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