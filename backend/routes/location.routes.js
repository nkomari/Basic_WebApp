module.exports = (app) => {
  const location = require("../controllers/location.controller.js");

  var router = require("express").Router();

  // Retrieve all locations
  router.get("/", location.getAll);

  // Retrieve a single location with uuid
  router.get("/:uuid", location.getOne);

  app.use("/api/location", router);
};
