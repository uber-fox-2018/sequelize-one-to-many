'use strict';

module.exports = (sequelize, DataTypes) => {
  const Op = sequelize.Op
  var Teacher = sequelize.define('Teacher', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: `Email format is incorrect`
        },
        isUnique: function(value,cb){
          Teacher.findOne({
            where: {
              email: value, 
              id: {[Op.ne]: this.id,}
            }
          })
          .then((data) => {
            if (!data) {
              cb()
            }else{
              cb(`Email is Duplicate`)
            }
          })
          .catch((err) => {
            cb(err)
          })
        }
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