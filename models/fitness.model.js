const mongoose = require('mongoose');

const FitnessSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        
      },
        reps: {
            type: Number,
            required: true,
            
        },
        sets: {
            type: Number,
            required: true,
            
        },
        weight: {
            type: Number,
            required: true,
            
        },
      date: {
        type: Date,
        default: Date.now,
      },
    });

    FitnessSchema.index({type: 1}); // Index by fitness type
    FitnessSchema.index({date: 1}); // Index by date

const Fitness = mongoose.model('Fitness', FitnessSchema);

module.exports = Fitness;