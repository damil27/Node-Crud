const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router
    .get('/', controller.getAllFlights)
    .get('/:id', controller.getSingleFlight)
    .post("/", controller.addFLight)
    .put("/:id", controller.editFlightDetaials)
    .delete("/:id", controller.deleteFlight);

module.exports = router;

