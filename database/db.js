const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tnode'
})

conexion.connect((error) => {
    if(error){
        console.log('error')
        return
       
    }
    console.log('conexion....');   
})

module.exports = conexion 