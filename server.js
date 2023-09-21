const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// app.use(cors(corsOpti))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync() // { force:true }
    .then(() => {
        console.log("db synced")
    })
    .catch((err) => {
        console.log("db sync failed" + err);
    })

app.get("/", (req,res) => {
    res.json("welcome")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('server running on port: ' + PORT);
})