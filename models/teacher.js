'use strict';
module.exports = (sequelize, DataTypes) => {
  var op = sequelize.Op;
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: 'Invalid Email'
        },
        isUnique: (value, next) => {
          let self = this;
          Teacher.find({where: 
            {
              email: value,
              id: {[op.ne] : self.id}
            }})
          .then(teacher => {
            // reject if a different user wants to use the same email
            if(teacher && self.id !== teacher.id) {
              return next('Email already exists!');
            }
            return next();
          })
          .catch(err => {
            return next(err);
          });
        }
      }
    }
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject, {foreignKey: 'subjectId'});
  };
  return Teacher;
};