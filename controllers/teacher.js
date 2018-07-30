const model = require('../models');

class Controller {
  static showAll (){
    return model.Teacher.findAll(
      {order: [
        ['id', 'ASC']
      ],
      include: [
        {model: model.Subject}
      ]},
    )
  }

  static add(inputObj){
    return model.Teacher.create(inputObj)
  }

  static findById(id){
    return model.Teacher.findById(id)
  }

  static update(inputObj, id){
    return model.Teacher.update(inputObj, {
      where: {
        id: id
      }
    })
  }

  static delete (id){
    return model.Teacher.destroy({where: {id:id}})
  }

}

module.exports = Controller;