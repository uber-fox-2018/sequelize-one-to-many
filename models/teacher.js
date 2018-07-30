'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        isEmail:{
          args:true,
          msg:'Format email is wrong'
        },
        isUnique:function(value,next){
          var self = this;
          Teacher.find({
            where:{
              email:value,
              id:{
                [Op.ne]:Teacher.id
              }
            },
          })
          .then(function(teacher){
            if(teacher && self.id !== teacher.id){
              return next('email already used')
            }
            return next()
          })
          .catch(function(err){
            return next(err)
          })
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    Teacher.belongsTo(models.Subject)
    // associations can be defined here
  };
  Teacher.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
  }
  return Teacher;
};