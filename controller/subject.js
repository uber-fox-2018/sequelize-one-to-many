const Model = require('../models/index')

class Controller{
    static getAllDataSubject(){
        return new Promise(function(res,rej){
            Model.Subject.findAll({
                include : Model.Teacher
            })
            .then(data =>{
                res(data)
            })
    
            .catch(err =>{
                rej(err)
            })
        })
    }

}

module.exports = Controller