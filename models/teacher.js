'use strict';
module.exports = (sequelize, DataTypes) => {
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        args:true,
        msg:'email format is wrong'
      },
      isUnique: function(email,callback){
        Teacher.findOne({
          where:{email:email}
        })
        .then(function(result){
          if(valid){
            callback('email is used)')
            // return next('email is used')
          }else{
            callback()
          }

        })
      }

    },
    SubjectId: DataTypes.INTEGER
  }, {});
  Teacher.associate = function(models) {
    // associations can be defined here
    Teacher.belongsTo(models.Subject)
  };
  return Teacher;
};