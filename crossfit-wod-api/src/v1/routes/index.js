const express = require("express");
const router = express.Router();

router.route("/").get((request, response) => {
  response.send(`<h1>Hola desde ${request.baseUrl}`);
});

module.exports = router;
