const express = require('express')
// const Station = require('../models/station')
const User = require('../models/user')
// initiate a Router (mini app that only handles routes)
const router = express.Router();


//============ GET ===============


router.get('/api/user', (req, res) => {
    User.find()
        // Return all Cars as an Array
        .then((allUser) => {
            res.status(200).json({ Users: allUser });
        })
        // Catch any errors that might occur
        .catch((error) => {
            res.status(500).json({ error: error });
        });
});



//============ POST ===============


router.post('/api/user', (req, res) => {
    console.log('Post/create')
    const newUser = req.body.user
    User.create(newUser, (err, result) => {
        if (err) {
            console.log(err)

        }
        else {
            console.log(result)
            res.send('create' + newUser)
        }
    })
})


//============ Update =============

router.patch('/api/user/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            if (user) {
                // Pass the result of Mongoose's `.update` method to the next `.then`
                return user.update(req.body.user);
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

router.delete('/api/user/:id', (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            if (user) {
                // Pass the result of Mongoose's `.delete` method to the next `.then`
                return user.remove();
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