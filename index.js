const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const fitnessRoute = require('./routes/fitness.route.js')
dotenv.config()
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api/fitness', fitnessRoute);


//whatever the client sends is the req and whatever the server sends is the res
app.get('/', (req, res) => { 
    res.send('Hello from node api server updated')
});


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


