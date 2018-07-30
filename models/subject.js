'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    name: DataTypes.TEXT
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
    const teachers = models.Teacher
    Subject.hasMany(teachers,{foreignKey:'subjectId'})
  };
  return Subject;
};