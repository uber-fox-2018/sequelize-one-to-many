'use strict';


module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    name: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    // associations can be defined here
    const Teacher = models.Teacher
    Subject.hasMany(Teacher, {foreignKey : 'subjectId'})
  };
  return Subject;
};