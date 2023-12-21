const mongoose = require("mongoose")
const { options } = require("../routes/products")

uri="mongodb+srv://Harsh5488:UaK9oj3hVXm5N1r3@restapi.qdpovgb.mongodb.net/Harsh5488?retryWrites=true&w=majority"

const connectDB =()=>{
    // console.log('connect database');
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};


module.exports=connectDB;