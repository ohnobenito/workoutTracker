//Model must include Name, Type(of exercise), Duration, Weight, Reps, Sets, Distance AND if type is cardio it must include distance

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
            type:{
                type: String,
                required: "Please enter an exercise type"
            },
            name: {
                type: String,
                required: "Please enter the name of exercise"
            },
            duration: {
                type: Number,
                required: "Please enter duration in minutes"
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            }  
        }
    ], 
    day: {
        type: Date,
        default: Date.now
    }
});

//LOOK UP "Virtuals"

const Workout = mongoose.model("Workout", workoutSchema);
//Export Module
module.exports = Workout;