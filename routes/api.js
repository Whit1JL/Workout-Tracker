const router = require("express").Router();
const Exercise = require("../models/Exercise");

// create exercise
router.post("/api/workouts", (req, res) => {
    Exercise.create({})
        .then((exerciseDB) => {
            res.json(exerciseDB);
        })
        .catch((err) => {
            res.json(err);
        });
});

// create route to get dashboard for 7 days 
router.get("/api/workouts/range", (req, res) => {
    Exercise.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: `$exercises.duration` },
                totalWeight: { $sum: '$exercise.weight' },
            }
        }
    ])
        .sort({ day: -1 })
        .limit(7)
        .then(exerciseDB => {
            res.json(exerciseDB);
        })
        .catch(err => {
            res.json(err);
        });
});


router.get("/api/workouts", (req, res) => {
    Exercise.aggregate([
        {
            $addFields: {
                totalDuration: { 
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
    .then((exerciseDB) => {
        res.json(exerciseDB);
    })
    .catch((err) => {
        res.json(err);
    });
});


// update workout by id
router.put("/api/workouts/:id", ({ body, params }, res) => {
    Exercise.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },

        { new: true, runValidators: true }
        )
        .then((exerciseDB) => {
            res.json(exerciseDB);
        })
        .catch((err) => {
            res.json(err);
        });
});

// delete workouts
router.delete('/api/exercise', ({ body }, res) => {
    Exercise.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;