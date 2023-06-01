const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://omerozturk:e9zTPcyOh6hRMDdl@cluster1.2isleds.mongodb.net/")
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch(()=>{
    console.log("Error Connecting to MongoDB")
})

const loginSChema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

const collection=new mongoose.model("Collection1",loginSChema)

module.exports=collection;