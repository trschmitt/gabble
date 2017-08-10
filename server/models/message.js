'use strict';
module.exports = function(sequelize, DataTypes) {
  var message = sequelize.define('message', {
    user_id: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        
        // associations can be defined here
        /** messages need to be associated to the user who created them **/
      }
    }
  });
  return message;
};
