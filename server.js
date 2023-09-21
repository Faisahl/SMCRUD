const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");
const controller = require("./controllers/post.controller");

const run = async () => {
    const p1 = await controller.createPost({
        name: "alex",
        title: "post title",
        text: "post text",
        // published: true,
        // numberOfLikes: 0,
        // numberOfDislikes: 0,
        // userLikedArray: [],
        // userDislikedArray: []
    })
    const p2 = await controller.createPost({
        name: "mara",
        title: "post title",
        text: "post text",
        // published: true,
        // numberOfLikes: 0,
        // numberOfDislikes: 0,
        // userLikedArray: [],
        // userDislikedArray: []
    })
};

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


db.sequelize.sync({ force: true }) // { force:true }
    .then(() => {
        console.log("db synced")
        run();
    })
    .catch((err) => {
        console.log("db sync failed" + err);
    })

app.get("/", (req,res) => {
    res.send("welcome")
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('server running on port: ' + PORT);
})