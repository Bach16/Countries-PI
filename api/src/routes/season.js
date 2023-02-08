const express = require('express');
const {Country,Activity,Season} = require("../db")


const seasonRouter = express.Router()

seasonRouter.get("/", async (req,res) => {
    try {
        const activities = []
        res.status(200).send(activities)
    } catch (error) {
        res.status(400).send({error:error})
    }
}) 

module.exports = seasonRouter;