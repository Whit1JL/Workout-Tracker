const router = require("express").Router();
const Exercise = require("../models/Exercise");

// create exercise
router.post("/api/workouts", (req, res) => {
    Exercise.create(req.body)
        .then((exerciseDB) => {
            res.json(exerciseDB);
        }).catch((err) => {
            console.log(err)
        })
});

// create route to get dashboard for 7 days 
router.get("/api/workouts/range", (req, res) => {
    Exercise.create([
        {
            $addFields: {
                totalDuration: { $sum: `$exercises.duration` },
                totalWeight: { $sum: '$exercise.weight' },
            }
        }
    ])
    .sort({ day: -1 }).limit(1)
    .then(exerciseDB => {
        res.json(exerciseDB);
    }).catch(err => {
        console.log(err);
    })
});

// route to get last workout with total duration
router.get("/api/workouts", (req, res) => {
    Exercise.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: `$exercises.duration` }
            }
        }
    ])
        .sort({ day: -1 }).limit(1)
        .then(exerciseDB => {
            res.json(exerciseDB);
        }).catch(err => {
            console.log(err);
        })
})


// update workout by id
router.put("/api/workouts/:id", ({body, params}, res) => {
    Exercise.findByIdAndUpdate(req.params.id, { $push: { exercise: req.body } }, { new: true })
        .then((exerciseDB) => {
            res.json(exerciseDB);
        }).catch((err) => {
            console.log(err)
        })
});


// create read update and delete workouts

module.exports = router;