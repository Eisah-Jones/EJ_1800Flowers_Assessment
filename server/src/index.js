"use strict";
require("dotenv").config();
const config = require("../config");
const server = require("./server");

const startServer = async () => {
  try {
    await server(config);
  } catch (e) {
    console.log("Error starting server:", e)
  }
}

startServer();