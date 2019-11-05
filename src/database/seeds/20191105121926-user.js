"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        name: "Matheus dos Reis",
        username: "reisdev",
        password: "123456",
        createdAt: new Date()
      },
      {
        name: "Cláudia",
        username: "cacaudev",
        password: "123456",
        createdAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
