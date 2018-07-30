const model = require('../models');

class Controller {
  static showAll (){
    return model.Subject.findAll(
    {order: [
      ['id', 'ASC']
    ],
    include: [
      {model: model.Teacher}
    ]},
  )
}

  static add(inputObj){
    return model.Subject.create(inputObj)
  }

  static findById(id){
    return model.Subject.findById(id)
  }

  static update(inputObj, id){
    return model.Subject.update(inputObj, {
      where: {
        id: id
      }
    })
  }

  static delete (id){
    return model.Subject.destroy({where: {id:id}})
  }

}

module.exports = Controller;