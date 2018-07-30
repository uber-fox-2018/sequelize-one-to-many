'use strict';

module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    subjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    const Subject = models.Subject
    Teacher.belongsTo(Subject, {foreignKey : 'subjectId'})
  };
  return Teacher;
};