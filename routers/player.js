const Players = require("../models").player;
const { Router } = require("express");
require("dotenv").config();
const router = new Router();

router.get("/scoreboard", async (request, response, next) => {
  try {
    const players = await Players.findAll();

    return response.status(200).send(players);
  } catch (error) {
    console.log("There is an error:", error.message);
  }
});

router.post("/newscoreboard", async (request, response, next) => {
  try {
    const { name, score } = request.body;
    console.log("newName", name, "newScore", score);

    const updateplayers = await Players.create({ name, score });

    console.log("updated player", updateplayers);

    const players = await Players.findAll();

    return response.status(200).send(players);
  } catch (error) {
    console.log("There is an error:", error.message);
  }
});

module.exports = router;
