'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING,
    TeacherId: DataTypes.INTEGER
  }, {});
  Subject.associate = function(models) {
    Subject.hasMany(models.Teacher)
    // associations can be defined here
  };
  return Subject;
};