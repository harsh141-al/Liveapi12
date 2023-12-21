const connectDB=require("./db/connect")
const Product =require("./models/product")
const Product_Json = require("./products.json")

const start = async()=>{
    try {
        await connectDB("mongodb+srv://Harsh5488:UaK9oj3hVXm5N1r3@restapi.qdpovgb.mongodb.net/Harsh5488?retryWrites=true&w=majority")
        await Product.deleteMany();
        await Product.create(Product_Json);
        
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}


start()