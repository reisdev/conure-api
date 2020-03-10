/*
 * Name: app.js
 * Description: Env variables configuration file.
 * Author: cacaudev
 * Date: 07/10/2019
 */

"use strict";

const dotenv = require("dotenv");
const config_file = dotenv.config({ path: "config/.env" }).parsed;

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

interface Config {
  "base": {
    env: string;
    port: string;
    api: {
      prefix: string;
    }
    "database": {
      name: string;
      user: string;
      password: string;
      dialect: string;
      host: string;
    }
  }
  "development": {
    port: string;
  };
  "test": {
    port: string;
  }
}


const app_config : Config = {
  "base": {
    env,
    port: process.env.PORT || "3000",
    api: {
      prefix: "/v1"
    },
    "database": {
      name: config_file.DATABASE_NAME,
      user: config_file.DATABASE_USER,
      password: config_file.DATABASE_PASSWORD,
      dialect: config_file.DATABASE_DIALECT,
      host: config_file.DATABASE_HOST
    }
  },
  "development": {
    port: process.env.PORT || "8080"
  },
  "test": {
    port: process.env.PORT || "5000"
  }
};

const config = Object.assign(app_config.base, app_config[env]);

export default config;
