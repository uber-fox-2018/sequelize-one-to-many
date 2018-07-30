const Model = require('../models')
var handleSubject = function(idSubject){    
    if(typeof idSubject === 'string'){        
        return idSubject
    }else{
        Model.Subject.findAll({
            raw:true
        })
        .then(dataSubjects =>{
            for(let i = 0 ; i < dataSubjects.length ; i++){
                if(idSubject === dataSubjects[i].id){
                    idSubject = dataSubjects[i].name    
                }
            }

            if(typeof idSubject === 'number'){
                idSubject = String(idSubject)                
            }
            
            handleSubject(idSubject)
        })
    }
}


module.exports = handleSubject
