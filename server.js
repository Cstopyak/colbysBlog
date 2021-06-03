require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// middleware 
app.use(express.json());
app.use(cors());


app.get('/', (req, res)=>{

    res.send('whats uppp from the server')
})

PORT=5000;

app.listen(PORT,()=>{
    console.log(`server is listening on part:${PORT}`);
})