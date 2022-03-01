"use strict";

const axios = require("axios");
const express = require("express");
const http = require("http");
const cors = require("cors");
const routes = require("./routes");

const server = async(config) => {
  // Create API server and configure
  let api = express();
  api.use(cors());
  api.use(express.json())
  api.set("config", config["api"])

  // Setup API routes
  let apiRouter = express.Router();
  await routes.apiRegister(apiRouter);
  api.use("/api", apiRouter);

  // Load JSON data from link and save local copy
  axios.get("http://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      api.set("reviewsJSON", res.data);
    })
    .catch((err) => {
      console.log("Unable to fetch JSON data:", err)
    });

  // Create API server
  let apiServer = http.Server(api);
  apiServer.listen(
    api.get("config")["port"],
    api.get("config")["host"],
    () => {
      console.log(`1-800-Flowers Assessment Server API listening at http://${api.get("config")["host"]}:${
        api.get("config")["port"]
      }`);
    }
  )
}

module.exports = server;