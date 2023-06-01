const mongoose=require("mongoose")
const dbkey=process.env.PRIVATE_KEY;
mongoose.connect(dbkey)
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