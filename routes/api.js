const router = require("express").Router();
const Exercise = require("../models/Exercise");

// create route to get dashboard for 7 days 
router.get("/api")

// route to get last workout with total duration
// create exercise
router.post("/api/workouts", (req, res) => {
    Exercise.create(req.body)
});

// update workout by id
router.put("/api/workouts/:id", (req, res) => {
    Exercise.findByIdAndUpdate(req.params.id, {$push: { exercise: req.body}}, { new: true })
    .then((exerciseDB) => {
        res.json(exerciseDB);
    }).catch((err) => {
        console.log(err)
    })
});


// create read update and delete workouts

module.exports = router;