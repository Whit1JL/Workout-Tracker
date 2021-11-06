const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
        name: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }],
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);
module.exports = Exercise;