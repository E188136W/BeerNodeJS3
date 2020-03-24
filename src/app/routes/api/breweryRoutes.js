const express = require('express');
const router = express.Router();

const BreweryController = require('../../controller/breweryController');
const breweryController = new BreweryController();

router.get('/', function (req, res) {
    breweryController.findAll(res);
});

router.get('/:id', function (req, res) {
    breweryController.findById(req, res)
});

router.post('/', function (req, res) {
    breweryController.create(req,res);
});
router.put('/:id', function (req, res) {
    breweryController.update(req, res)
});

router.delete('/:id', function (req, res) {
    breweryController.deleteById(req, res)
});

module.exports = router;