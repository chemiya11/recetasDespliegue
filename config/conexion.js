const mysql = require('mysql');
//import {DB_HOST,DB_USER,DB_PASSWORD,DB_PORT,DB_NAME} from './config.js'

const {DB_HOST,DB_NAME,DB_USER,DB_PASSWORD,DB_PORT}=require('./config')

const conexion = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port:DB_PORT,
    database: DB_NAME
});//conecto con la base de datos

conexion.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error :'+ err)
    }
    else
    {console.log(' la base de datos se conecto!!!')}
});

module.exports=conexion//exporto la conexion