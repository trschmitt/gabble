'use strict';

const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  const user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {
      type: string,
      allowNull: false
      set(password){
        const saltRounds = 5;
        let salt = bcrypt.genSaltSync(saltRounds);
        let hash = bcrypt.hashSync(password, salt);
        this.setDataValue('password', hash);
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        models.user.hasMany(models.message)
        // associations can be defined here
        /** messages need to be associated to the user who created them **/
      }
    }
  });
  return todo;
};
