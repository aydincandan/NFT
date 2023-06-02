const express =require('express');
const app=express();
require('dotenv').config();
const path=require('path');
const hbs=require('hbs');
const collection=require('./mongodb');
const templatePath=path.join(__dirname,'../../front/src/components/templates')

console.log(process.env);

app.use(express.json())

app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:true}))



app.get("/",(req,res)=>{
    res.render("login");
})
app.get("/signup",(req,res)=>{
    res.render("signup");
})

app.get("",(req,res)=>{
    res.render("signup");
})
app.get("/data",(req,res)=>{
    res.render("data");
})



app.post("/signup",async(req,res)=>{
    const data={
        name:req.body.name,
        password:req.body.password,
    }

    await collection.insertMany([data])

    res.send("<h1 style='text-align:center'>SUCCESS SIGN UP</h1></br><h6 style='text-align:center'>Close the this page</h6>")
})



app.post("/login",async(req,res)=>{
    
    try{
        const check=await collection.findOne({name:req.body.name})

        if(check.password===req.body.password && check.name===req.body.name){
            res.render("home")
        }
        else{
            res.send("Wrong name or pas" )
        }
    }
    catch{
        res.send("Wrong name or password" )
    }


    res.render("home")

})



app.listen(3001,()=>{
    console.log('server is connected.');
})