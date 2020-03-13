const express = require('express');
//instantaiate a router (mini app that only handle routes)
const router = express.Router();
/** 
 * Action........index
 * method........get
 * description.....get the root route
 */
router.get('/',(req,res)=>{
    res.json({
        message: "welcome to Car rent"
    })
})




//Export the router so we can use it in server.js
module.exports = router;