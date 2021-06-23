require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const app = express();

// middleware 
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles:true
}))



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
app.use('user/', require('./server/routes/loginRegRoute'));
app.use('/', require('./server/routes/postRoute'));
app.use('/', require('./server/routes/uploadImg'));
PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is listening on port:${PORT}`);
})