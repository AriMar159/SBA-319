const mongoose = require('mongoose');

const FitnessSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        
      },
      time: {
        type: Number,
        required: true,
        
      },
      date: {
        type: Date,
        default: Date.now,
      },
    });

const Fitness = mongoose.model('Fitness', FitnessSchema);

module.exports = Fitness;