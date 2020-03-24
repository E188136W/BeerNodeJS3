const Brewery = require("../model/brewery");

const daoCommon = require("./commons/daoCommon");

class BreweryDAO {
  constructor() {
    this.common = new daoCommon();
  }

  /**
   * Permet d'obtenir toute les distilleries de la base de donnÃ©e
   */
  findAll() {
    const sqlRequest = "SELECT * FROM brewery";

    return this.common
      .findAll(sqlRequest)
      .then(rows => {
        const breweries = rows.map(row => new Brewery(row));
        return breweries;
      })
      .catch(err => console.log(err));
  }

  /**
   * Permet d'obtenir une distillerie en particulier
   * @param {*} id de la distillerie Ã  rechercher
   */
  findById(id) {
    let sqlRequest = "SELECT * FROM brewery WHERE id=$id";
    let sqlParams = {
      $id: id
    };

    return this.common
      .findOne(sqlRequest, sqlParams)
      .then(row => new Brewery(row));
  }

  /**
   * Permet de crÃ©er une nouvelle distillerie
   * @param {*} brewery la distillerie Ã  crÃ©er
   */
  create(brewery) {
    const sqlRequest =
      "INSERT INTO brewery" +
      "(id,breweries,address1,address2,city,state,code,country,phone,website,filepath,descript,last_mod,coordinates) " +
      "VALUES ($id,$breweries,$address1,$address2,$city,$state,$code,$country,$phone,$website,$filepath,$descript,$lastMod,$coordinates)";

    const sqlParams = {
      $id: brewery.id,
      $breweries: brewery.breweries,
      $address1: brewery.address1,
      $address2: brewery.address2,
      $city: brewery.city,
      $state: brewery.state,
      $code: brewery.code,
      $country: brewery.country,
      $phone: brewery.phone,
      $website: brewery.website,
      $filepath: brewery.filepath,
      $descript: brewery.descript,
      $lastMod: brewery.lastMod,
      $coordinates: brewery.coordinates
    };

    return this.common.run(sqlRequest, sqlParams);
  }

  /**
   * Permet la suppression d'une distillerie
   * @param {*} id de la distillerie Ã  supprimer
   */
  deleteById(id) {
    let sqlRequest = "DELETE FROM brewery WHERE id=$id";
    let sqlParams = {
      $id: id
    };

    return this.common.run(sqlRequest, sqlParams);
  }

  /**
   * Permet la mise Ã  jour d'une distillerie
   * @param {*} brewery la distillerie Ã  mettre Ã  jour
   */
  update(brewery) {
    let sqlRequest =
      "UPDATE brewery SET " +
      "breweries = $breweries, " +
      "address1 = $address1, " +
      "address2 = $address2, " +
      "city = $city, " +
      "code = $code, " +
      "country = $country, " +
      "phone = $phone, " +
      "website = $website, " +
      "filepath = $filepath, " +
      "descript = $descript, " +
      "last_mod = $lastMod, " +
      "coordinates = $coordinates " +
      "WHERE id=$id";

    let sqlParams = {
      $breweries: brewery.breweries,
      $address1: brewery.address1,
      $address2: brewery.address2,
      $city: brewery.city,
      $state: brewery.state,
      $code: brewery.code,
      $country: brewery.country,
      $phone: brewery.phone,
      $website: brewery.website,
      $filepath: brewery.filepath,
      $descript: brewery.descript,
      $lastMod: brewery.lastMod,
      $coordinates: brewery.coordinates,
      $id: brewery.id
    };

    return this.common.run(sqlRequest, sqlParams);
  }
}

module.exports = BreweryDAO;
