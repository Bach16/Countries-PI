const express = require('express');
const {dbCountries,dbCountryById} = require("../helpers/getCountries.db")
const axios = require("axios");


const countryRouter = express.Router()

countryRouter.get("/", async (req,res,next) => {
    try {
        const {name} = req.query

         if (Object.keys(req.query).length) {
            if (!name) {
                const data = await dbCountries()
                console.log(data[0]);
                res.status(200).send(data)
            }else{
                throw new Error("Pokemon not found")
            } 
        } else {
            console.log("aja");
            const db = await dbCountries()
            console.log(db[0].image.toString('utf8'));
            res.status(200).send(db)
        }
    }catch (error) {
        res.status(400).send({error:error.message})
    }
})

countryRouter.get("/:id", async (req,res) => {
    try {
        const {id} = req.params
        if(id.length) {
            const response = await dbCountryById(id)
            if (response) res.status(200).send(response)
            else throw new Error("Pokemon not found")
        } else {
            throw new Error("Missing id")
        }
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}) 


module.exports = countryRouter