let express = require("express");

let router = express.Router();

let burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all(data => {
        let hbsObject = {
            burgers = data
        };

        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create([
        "name", "devoured"
    ], [
        req.body.name, req.body.sleepy
    ], (result) => {
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

        burger.update({
            devoured: req.body.devoured
        }, condition, (results) => {
            if (res.affectedRows == 0) {
            //if no rows were affected, then the ID msut not exist, so 404 it
            return results.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", (req,res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", (result) => {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
})
    