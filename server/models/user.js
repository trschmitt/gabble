'use strict';
module.exports = function(sequelize, DataTypes) {
  let user = sequelize.define('user', {
    username: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        /** messages need to be associated to the user who created them **/
      }
    }
  });
  return todo;
};
