const BreweryDAO = require("../dao/breweryDAO");
const Brewery = require("../model/brewery");

/* Load Controller Common function */
const ControllerCommon = require("./common/controllerCommon");

class BreweryController {
  constructor() {
    this.breweryDAO = new BreweryDAO();
    this.common = new ControllerCommon();
  }

  findAll(res) {
    this.breweryDAO
      .findAll()
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  findById(req, res) {
    let id = req.params.id;
    this.breweryDAO
      .findById(id)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  }

  create(req, res) {
    let brewery = new Brewery(req.body);
    return this.breweryDAO
      .create(brewery)
      .then(() => this.breweryDAO.findById(brewery.id))
      .then(brewery => {
        res.status(201);
        res.json(brewery);
      })
      .catch(this.common.serverError(res));
  }

  deleteById(req, res) {
    let id = req.params.id;

    this.breweryDAO
      .deleteById(id)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  }

  update(req, res) {
    let brewery = new Brewery();
    brewery = Object.assign(brewery, req.body);

    return this.breweryDAO
      .update(brewery)
      .then(this.breweryDAO.findById(req.params.id))
      .then(() => this.breweryDAO.findById(brewery.id))
      .then(brewery => {
        res.status(201);
        res.json(brewery);
      })
      .catch(err => console.log(err));
  }
}

module.exports = BreweryController;
