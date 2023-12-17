const mongoose = require("mongoose");

const Db = process.env.DB;


mongoose.connect(Db,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})