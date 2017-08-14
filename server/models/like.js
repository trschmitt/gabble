'use strict';
module.exports = function(sequelize, DataTypes) {
  const like = sequelize.define('like', {
    user_id: DataTypes.INTEGER,
    gab_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.like.belongsTo(models.user)
        models.like.belongsTo(models.gab)
      }
    }
  });
  return like;
};
