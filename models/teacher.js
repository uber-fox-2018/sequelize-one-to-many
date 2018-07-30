'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email format is incorrect'
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};