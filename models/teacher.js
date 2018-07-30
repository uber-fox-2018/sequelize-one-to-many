'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.TEXT,
    lastName: DataTypes.TEXT,
    email: {
      type: DataTypes.TEXT,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    subjectId: DataTypes.INTEGER
  }, {}
);
  Teacher.associate = function(models) {
    const subjects = models.Subject
    Teacher.belongsTo(subjects,{ foreignKey:'subjectId'})
    // associations can be defined here
  };
  return Teacher;
};

let arr = [1,2,3,4,]

arr.forEach(element => {
  
});