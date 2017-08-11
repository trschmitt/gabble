'use strict';
module.exports = function(sequelize, DataTypes) {
  const message = sequelize.define('gab', {
    user_id: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        models.gab.belongsTo(models.user)
        models.gab.hasMany(models.like)
      }
    }
  });
  return message;
};
