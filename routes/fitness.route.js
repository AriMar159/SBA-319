const express = require("express");     //import express 
const router = express.Router();        //import router from express
const Fitness = require('../models/fitness.model.js'); //import the fitness model
const {getFitnesses, getFitness, createFitness, updateFitness} = require('../controller/fitness.controller.js'); //import the fitness controller


router.get('/', getFitnesses); //create a get route for the fitness model
router.get('/:id', getFitness); //create a get route for the fitness model by id

router.post('/', createFitness); //create a post route for the fitness model

//update a fitness record
router.put('/:id', updateFitness); //create a put route for the fitness model by id

        const {id} = req.params;
        const fitness = await Fitness.findByIdAndUpdate

module.exports = router; //export the router