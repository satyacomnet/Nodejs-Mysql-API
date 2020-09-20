const sql = require('./dbconfig');
const express= require('express');
const app=express();
const cors = require('cors');
const bodyparser=require('body-parser');
app.use(bodyparser.json());

   
app.listen(3000,()=>console.log('Express server is running at port no 30000'));

app.get('/users',cors(),(req,res)=>{

    sql.query("Select * from users",(request,result)=>{
        res.send(result);
    });
    
    
 });

module.exports=app;



