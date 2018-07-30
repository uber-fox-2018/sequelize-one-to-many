const model = require('../models');

class Controller {
  static showAll (){
    return model.Student.findAll(
      {order: [
        ['id', 'ASC']
      ]}
    )
  }

  static add(inputObj){
    return model.Student.create(inputObj)
  }

  static findById(id){
    return model.Student.findById(id)
  }

  static update(inputObj, id){
    return model.Student.update(inputObj, {
      where: {
        id: id
      }
    })
  }

  static delete (id){
    return model.Student.destroy({where: {id:id}})
  }

}

module.exports = Controller;