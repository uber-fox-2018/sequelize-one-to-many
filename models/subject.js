'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    subjectName: DataTypes.STRING

  }, {});
  Subject.associate = function(models) {
    const teacher = models.Teacher
    Subject.hasMany(teacher,{foreignKey: 'subjectId'})
    
  };
  return Subject;
};