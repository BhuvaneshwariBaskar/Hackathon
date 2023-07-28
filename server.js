const express =require('express');
const path =require('path');
const ejsMate =require('ejs-mate');

const db=require("./database");
const app=express();
app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render("register");
})
app.post("/register",async(req,res)=>{
   try {
    const {name,email,password,address,pincode,city}=req.body;
    await db.query("insert into ejs.student_table (name,email,password,address,pincode,city) values (?,?,?,?,?,?)",[name,email,password,address,pincode,city])
    await db.query("insert into ejs.user_table (name,email) values (?,?)",[name,email]);
    return res.json("okay");
   } catch (error) {
    return res.json(error);
   }

})

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})

