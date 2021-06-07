require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// middleware 
app.use(express.json());
app.use(cors());



// initial test
// app.get('/', (req, res)=>{

//     res.send('whats uppp from the server')
// })

// MONGODB Connection
const URI = process.env.MONGO_URL;
mongoose.connect(URI, {
useCreateIndex:true,
useFindAndModify:false,
useNewUrlParser:true,
useUnifiedTopology:true  

},(err)=>{

    if (err) throw err;
    else{
        return console.log(`we are good to go in mongo db!!`);
    }

})


//routes

app.use('/', require('./server/routes/postRoute'));

PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is listening on port:${PORT}`);
})