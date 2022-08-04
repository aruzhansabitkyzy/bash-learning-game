const express = require('express')
const mongoose = require('mongoose')
const app = express()
// const dotenv = require('dotenv') 
const routesUrls = require('./routes/router')
const cors = require('cors')

// dotenv.config()

mongoose.connect("mongodb+srv://aruzhan:26853904@cluster0.cr97r.mongodb.net/game?retryWrites=true&w=majority", ()=> console.log("Database connected"))
//How we start listening to the server 

app.use(express.json())
app.use(cors())
app.use('/', routesUrls)
app.listen(4000, () => console.log("server is up and running"))
