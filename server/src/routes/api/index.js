"use strict";

const search = require("./search");

const apiRoutes = [search];

module.exports.register = async (router) => {
  for (const apiRoute of apiRoutes) await apiRoute.register(router);
}