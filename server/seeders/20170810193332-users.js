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
          email: "stuffandthangs@stuff.com",
          password: "$2a$05$Y.Esb7hoXtlmtZ9N7AAbCOW7JvM9JDgRCDO1j6YoKeguow6HmL5YS",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          username: "bobcatwoman1",
          first_name: "Ruby",
          last_name: "Selvig",
          email: "bobcatsfolyfe@gal.com",
          password: "$2a$05$Y.Esb7hoXtlmtZ9N7AAbCOW7JvM9JDgRCDO1j6YoKeguow6HmL5YS",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          username: "her0_76",
          first_name: "Steve",
          last_name: "Amazon",
          email: "overwatch@thangs.com",
          password: "$2a$05$Y.Esb7hoXtlmtZ9N7AAbCOW7JvM9JDgRCDO1j6YoKeguow6HmL5YS",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          username: "jedimindtricks",
          first_name: "Liz",
          last_name: "Schnieter",
          email: "you@stuff.com",
          password: "$2a$05$Y.Esb7hoXtlmtZ9N7AAbCOW7JvM9JDgRCDO1j6YoKeguow6HmL5YS",
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          username: "flowergirl50",
          first_name: "Yonda",
          last_name: "Friendless",
          email: "cherokeesteryotypes@jokes.com",
          password: "$2a$05$Y.Esb7hoXtlmtZ9N7AAbCOW7JvM9JDgRCDO1j6YoKeguow6HmL5YS",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("users", null, {});
  }
};
