'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subject_name: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: new Date ()
    }
  }, {});
  Subject.associate = function(models) {
    Subject.hasMany(models.Teacher);
  };
  return Subject;
};