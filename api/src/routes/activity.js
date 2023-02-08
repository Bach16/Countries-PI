const express = require('express');
const {Country,Activity,Season} = require("../db")
const {dbPostCountries} =require("../helpers/postActivity.db")


const activityRouter = express.Router()

activityRouter.get("/", async (req,res) => {
    try {
        const activities = await Activity.findAll({
            include:{
                model: Season,
            }
        })
        res.status(200).send(activities)
    } catch (error) {
        res.status(400).send({error:error})
    }
}) 

activityRouter.post("/", async (req,res) => {
    try {
        console.log(req.body);
        const activity = await dbPostCountries(req.body) 
        console.log(activity);
        res.status(200).send(activity)
    } catch (error) {
        console.log(error);
        res.status(400).send({error:error})
    }
}) 

module.exports = activityRouter;