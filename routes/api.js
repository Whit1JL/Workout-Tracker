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


// create read update and delete workouts

module.exports = router;