const express = require('express');
require('dotenv').config();
const fast2sms = require('fast-two-sms')

let app = express();

app.set('views', './view');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false}))

app.post("/sendMsg",async (req,res)=>{
    
    let response = await fast2sms.sendMessage({authorization : process.env.API_KEY, message :req.body.message , numbers :[req.body.numbers]})
    res.send(response )
//    console.log(req.body);
   console.log(res);

})


app.get('/', function(req, res){
    res.render("index.ejs");
})

app.listen(5000);