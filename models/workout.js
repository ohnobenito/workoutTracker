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
}, {
    toJSON: {
        //if you want virtual field to be displayed on client side, then set virtuals: true 
        virtuals: true
    }
});

//Declare virtual on workout schema
workoutSchema
.virtual("totalDuration")
.get(function() {
    //Use reduce to get sum of exercise durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
});

const Workout = mongoose.model("Workout", workoutSchema);
//Export Module
module.exports = Workout;