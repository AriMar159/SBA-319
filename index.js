const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})

//whatever the client sends is the req and whatever the server sends is the res
app.get('/', (req, res) => { 
    res.send('Hello from node api server updated')
});

mongoose.connect("mongodb+srv://ARIanna9196:ARIanna9196@backenddb.ivjqa.mongodb.net/?retryWrites=true&w=majority&appName=backenddb")
.then(() => {
    console.log('Database connected');
})
.catch(() => {
    console.log('Connection failed');
}) ;


