const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [{
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
    }]
//   author: String,
//   title: String
});

// const Book = mongoose.model("Book", BookSchema);



// module.exports = Book;