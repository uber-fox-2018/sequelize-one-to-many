'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        is: [/[a-zA-z0-9]*@[a-zA-z0-9]+.com$/],
       
      }
    },
    subjectId: {
      type: DataTypes.INTEGER,
      defaultValues: null
    },
    createdAt: new Date(),
    updatedAt: new Date()
  }, {});
  Teacher.associate = function (models) {
    const Subject = models.Subject
    Teacher.belongsTo(Subject, {
      foreignKey: 'subjectId'
    })
  };
  return Teacher;
};