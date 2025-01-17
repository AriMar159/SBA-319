const express = require('express')
const mongoose = require('mongoose')
const Fitness = require('./models/fitness.model.js')
const app = express();
app.use(express.json());


//whatever the client sends is the req and whatever the server sends is the res
app.get('/', (req, res) => { 
    res.send('Hello from node api server updated')
});



app.get('/api/fitness', async (req, res) => {

    try{
       const fitness = await Fitness.find({});
    } catch (error) {
       res.status(500).json({message: error.message}); 
    }
});

app.get('/api/fitness/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const fitness = await Fitness.findById(id);
        res.status(200).json(fitness);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/api/fitness', async (req, res) => {    
   try{
    const fitness = await Fitness.create(req.body);
    res.status(200).json(fitness);
} catch (error) {
    res.status(500).json({message: error.message});
}
});

//UPDATE A FITNESS RECORD
app.put('/api/fitness/:id', async (req, res) => {
    try{

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
} );
//DELETE A FITNESS RECORD
app.delete('/api/fitness/:id', async (req, res) => {
    try{

        const {id} = req.params;
        const fitness = await Fitness.findByIdAndDelete(id);

        if(!fitness){
            res.status(404).json({message: 'Fitness record not found'});
        }
        res.status(200).json({message: 'Fitness record deleted'});
        
    } catch (error) {
        res.status(500).json({message: error.message});
    } 
} );

mongoose.connect("mongodb+srv://ARIanna9196:ARIanna9196@backenddb.ivjqa.mongodb.net/mongodbdatabase?retryWrites=true&w=majority&appName=backenddb")
.then(() => {
    console.log('Database connected');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
.catch(() => {
    console.log('Connection failed');
}) ;


