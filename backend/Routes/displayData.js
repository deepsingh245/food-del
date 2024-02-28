const express = require('express');
const router = express.Router()

router.post("/foodData", (req,res)=>{
    try{
        // console.log(global.food_items)
        res.json([global.food_items, global.foodCategory ])
    }
    catch (error){
    console.log(error);
    res.status(500).json({message: "Error in server"})
}
});


module.exports = router;