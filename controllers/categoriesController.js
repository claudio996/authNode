const conexion = require('../database/db');

exports.save = (req,res )=> {
   const name =  req.body.name 
    conexion.query('INSERT INTO CATEGORIES SET ?', {name:name}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/categories')
        }
    });
};

exports.update = (req,res) => {
    const id = req.body.id;
    const name =  req.body.name 
    conexion.query('UPDATE CATEGORIES SET ? WHERE id = ?',[{name:name}, id], (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/')
        }
    });
}


