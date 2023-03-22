const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index.js');
const cors = require("cors")

require("dotenv").config()

const app = express();
const PORT = process.env.PORT | 3005;

//Settings

//Middlewares
app.use(cors())
app.use(express.json());
app.use('/api', router);
//Routes
app.get("/", (req, res) => {
    res.send("welcome to my API")
});

// Mongo conection
mongoose.connect(process.env.MONGODB_URL)
.then(() => { console.log('conectado a la db')})
.catch((error) => console.log(error))


app.listen(PORT, () => {
    console.log('Servidor corriendo en puerto ', PORT)
})
