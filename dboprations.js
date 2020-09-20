
const sql = require('./dbconfig');


async function getUsers(req , res){

    try{
        let users=await sql.query("Select * from users",(request, response)=>{
            res.json(response);
        });   
        
         return users;

    }
    catch(error){
       console.log(error);
    }
}

module.exports={
    getUsers:getUsers
}