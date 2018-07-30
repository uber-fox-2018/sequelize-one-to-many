'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Checks your email format (foo@bar.com)'
        },
        isUnique: function(email, callback) {
          Teacher.findOne({ where: { email: email } })
          .then(function(valid) {
            if (valid) {
              callback('Email is already registered');
            } else {
              callback();
            }
          });
        }
      }
    }
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};