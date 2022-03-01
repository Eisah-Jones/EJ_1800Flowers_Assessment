"use strict";

const dotenv = require("dotenv");
const assert = require("assert");

const {
  API_PORT,
  API_HOST
} = process.env;

assert(API_PORT, "API Port is required");
assert(API_HOST, "API Host is required");

module.exports = {
  api: {
    port: API_PORT,
    host: API_HOST,
  }
};