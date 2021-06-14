const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path')

dotenv.config({path:'./config.env'})

require('./database/conn'); //db connection
const user = require('../server/model/schema'); //schema

app.use(express.json())
app.use(cors())
app.use(require('./routes/auth'))//routes

app.get('/', (req, res) => {
    res.send("Hello from server")
})

app.get('/add',(req, res) =>{
    res.send('response from add todo')
})

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))

    app.get("*", (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}
app.listen(process.env.PORT, () =>{
    console.log(`listening to port : ${process.env.PORT}`)
})
