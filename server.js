const mongoose = require('mongoose');
const express = require('express');
const logger = require('morgan');

const PORT = 3005;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true });

// placing routes in 

// app.get("/", (req, res) => {
//     res.send("hi");
// });

app.use(require("./routes/view.js"));
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});