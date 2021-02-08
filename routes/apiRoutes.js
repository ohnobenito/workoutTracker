//Require db from models
const db = require("../models")

module.exports = (app) => {
    //Getting Workout
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}, (err, workouts) => {
            if (err) {
                console.log(err);
            } else {
                res.json(workouts)
            }
        });
    });

    //Creating a new workout
    app.post('/api/workouts', (req, res) => {
        db.Workout.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });

    app.put("/api/workouts/:id", ({body, params}, res) => {
        const workID = params.id;
        let saved = [];

        db.Workout.find({_id: workID})
            .then(dbWorkout => {
                saved = dbWorkout[0].exercises;
                res.json(dbWorkout[0].exercises);
                let allExercise = [...saved, body]
                console.log(allExercise);
                updateWorkout(allExercise);
            })
            .catch(err => {
                res.json(err);
            });
        function updateWorkout(exercises){
            db.Workout.findByIdAndUpdate(workID, {exercises: exercises}, function (err, doc){
                if (err) {
                    console.log(err)
                }
            });
        };

    });

    //Get Workout Range
    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });
};