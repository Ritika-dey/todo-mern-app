const mongoose = require('mongoose');
const db = process.env.DB;

mongoose.connect(db , {
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(res =>{
    console.log("Connection succesfull")
}).catch(err =>{
    console.log(err)
})