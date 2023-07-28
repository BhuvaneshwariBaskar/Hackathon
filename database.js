const mysql2=require("mysql2/promise");
const db=mysql2.createPool({
    // host:process.env.DB_HOST,
    // user:process.env.DB_USER,
    // password:process.env.DB_PASSWORD,
    // database:process.env.DB_NAME,
    host:"localhost",
    user:"root",
    password:"root",
    database:"ejs",
})
console.log("mysql connected");

module.exports=db;