'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          username: "thebestname",
          first_name: "Tom",
          last_name: "Samson",
          email: "stuffandthangs@stuff.com"
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          username: "bobcatwoman1",
          first_name: "Ruby",
          last_name: "Selvig",
          email: "bobcatsfolyfe@gal.com"
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          username: "her0_76",
          first_name: "Steve",
          last_name: "Amazon",
          email: "overwatch@thangs.com"
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          username: "jedimindtricks",
          first_name: "Liz",
          last_name: "Schnieter",
          email: "you@stuff.com"
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          username: "flowergirl50",
          first_name: "Yonda",
          last_name: "Friendless",
          email: "cherokeesteryotypes@jokes.com"
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  }
};
