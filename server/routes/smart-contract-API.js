const express = require("express");
const router = express.Router();

const logic = require("../../ethereum/logic");

router.get("/", (req,res,next) => {
    res.render("index", {message: null})
})

router.get("/getMessage", async (req,res,next) => {
    let message = await logic.getMessage();
    res.render("index", {message: message})
})

router.post("/", async (req,res, next) => {
    let message = await logic.setMessage(req.body.message);
    res.render("index", {message: message.transactionHash});
})

module.exports = router;