const db = require("../models");
const location = db.location;
// const location = require("../models/location.model.js");

// Retrieve all locations from the database.
exports.getAll = (req, res) => {
  location
    .find()
    .then((data) => {
      console.log({ value: data });
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};

// Find a single location using uuid
exports.getOne = (req, res) => {
  const id = req.params.uuid;

  location
    .find({ uuid: id })
    .then((data) => {
      console.log({ valueuuid: data });
      if (data.length == 0)
        res.status(404).send({ message: "No location found  with uuid " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving location with uuid=" + id });
    });
};
