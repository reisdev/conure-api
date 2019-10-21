/*
 * Name: app.js
 * Description: Env variables configuration file.
 * Author: cacaudev
 * Date: 07/10/2019
 */

"use strict";

import dotenv from "dotenv";
dotenv.config();

/**
 * App node environment.
 * @static
 * @type {string}
 */
const env = process.env.NODE_ENV || "development";

/**
 * @type {Object}
 * @property {string} port - App port. Default is 3000.
 * @property {string} env - App env. Default is development.
 */
const app_config = {
  base: {
    env,
    port: process.env.PORT || 3000,
    api: {
      prefix: "/v1"
    }
  },
  development: {
    port: process.env.PORT || 8080
  },
  test: {
    port: process.env.PORT || 5000
  }
};

const config = Object.assign(app_config.base, app_config[env]);

module.exports = config;
