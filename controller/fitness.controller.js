const Fitness = require('../models/fitness.model'); //import the fitness model

const getFitnesses = async (req, res) => {
    try{
        const fitnesses = await Fitness.find({});
        res.status(200).json(fitnesses);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
} //create a get route for the fitness model
const getFitness = async (req, res) => { 
    try{
        const fitness = await Fitness.find({});
        res.status(200).json(fitness);
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
}



const createFitness = async (req, res) => { try{
        const fitness = await Fitness.create(req.body);
        res.status(200).json(fitness);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateFitness = async (req, res) => { try{

        const {id} = req.params;
        const fitness = await Fitness.findByIdAndUpdate(id, req.body);

        if(!fitness){
            res.status(404).json({message: 'Fitness record not found'});
        }
        const updatedFitness = await Fitness.findById(id);
        res.status(200).json(updatedFitness);

    } catch (error) {
        res.status(500).json({message: error.message});
    } 
}  //create a put route for the fitness model by id

const deleteFitness = async (req, res) => {  
    try{

        const {id} = req.params;
        const fitness = await Fitness.findByIdAndDelete(id);

        if(!fitness){
            res.status(404).json({message: 'Fitness record not found'});
        }
        res.status(200).json({message: 'Fitness record deleted'});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    } }; //create a delete route for the fitness model by id

module.exports = { 
    getFitnesses,
    getFitness,
createFitness,
updateFitness,
deleteFitness}; //export the getFitness function
