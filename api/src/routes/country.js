const express = require('express');

const countryRouter = express.Router()

countryRouter.get("/", async (req,res,next) => {
    try {
        const {name} = req.query
        if (Object.keys(req.query).length) {
            if (name) {
                res.status(200).send(name)
                
            }else{
                throw new Error("Pokemon not found")
            } 
        } else next()
    }catch (error) {
        res.status(400).send({error:error.message})
    }
})

module.exports = countryRouter