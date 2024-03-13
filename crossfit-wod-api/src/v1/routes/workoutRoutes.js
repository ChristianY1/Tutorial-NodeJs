const express = require("express");
const router = express.Router();

router.get("/", (request, response)=>{
    response.send("Get all workouts");
});

router.get("/:workoutId", (request, response)=>{
    response.send(`Create workout ${request.params.workoutId}`);
});
