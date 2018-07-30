'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    const Teacher= models.Teacher
    Subject.hasMany(Teacher, {foreignKey : "subjectId"})
  };
  return Subject;
};