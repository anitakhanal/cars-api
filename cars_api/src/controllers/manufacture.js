import * as manufacturerService from "../services/manufacturer.js";

export function getManufacturers(req, res, next) {
  manufacturerService
    .getManufacturers()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
