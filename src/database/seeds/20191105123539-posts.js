"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("posts", [
      {
        title: "Primeiro Post",
        description: "Este é o primeiro post",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Segundo Post",
        description: "Este é o Segundo post",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("posts", null, {});
  }
};
