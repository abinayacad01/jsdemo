const {createPool}=require('mysql');

const pool=createPool({
    host:"192.168.1.240",
    user:"cad",
    password:"password",
    database:"abi",
    connectionLimit:10
})

pool.query("select * from nodedemo", (err, output, fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(output);
})
