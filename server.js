
require('dotenv').config(); 
require('./config/database.js');
const express= require('express');
const cors= require('cors');
const Router= require('./routes/routes');
const passport=require('passport');
const app= express();

const PORT=process.env.PORT || 8000;



//start server
app.set('port',PORT);

app.get('/',(req,res) => {
    res.send('SERVER ON')
})

//middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize())

//routes
app.use('/api',Router)



app.listen(PORT, (req, res) => {
    console.log("listening on port:" + app.get("port"));
})

module.exports = app