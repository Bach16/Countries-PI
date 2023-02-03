const express = require('express');

const activityRouter = express.Router()

activityRouter.get("/", async (req,res) => {
    try {
        const diets = await Type.findAll()
        res.status(200).send(diets)
    } catch (error) {
        res.status(400).send({error:error})
    }
}) 

module.exports = activityRouter;