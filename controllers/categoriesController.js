const conexion = require('../database/db');

exports.save = (req,res )=> {
   const name =  req.body.name 
    conexion.query('INSERT INTO CATEGORIES SET ?', {name:name}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/')
        }
    });
};



