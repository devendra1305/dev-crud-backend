

// export default connectDB
const mongoose = require("mongoose");

mongoose.set('strictQuery', false)

const DB = process.env.DATABASE_URL


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start")).catch((error)=> console.log(error.message));