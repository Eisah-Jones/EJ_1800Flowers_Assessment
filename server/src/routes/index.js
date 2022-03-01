"use strict";

const api = require("./api");

module.exports.apiRegister = async (router) => {
  await api.register(router);

  router.get('/', function (req, res) {
    res.send("Welcome to the 1-800-Flowers Assessment API!")
  });
};