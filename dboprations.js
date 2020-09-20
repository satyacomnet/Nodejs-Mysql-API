
const sql = require('./dbconfig');


async function getUsers(){

    try{
        let users=await sql.query("Select * from users",(request, response)=>{
            console.log(response);
        });   
        
    }
    catch(error){
       console.log(error);
    }
}

module.exports={
    getUsers:getUsers
}