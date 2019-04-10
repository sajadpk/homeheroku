const express=require('express');
const exphb=require('express-handlebars');
var app=express();

app.engine('handlebars',exphb({defaultLayout:'main'}));
app.set('view engine','handlebars');
app.use(express.static('views/static'));
app.use(express.urlencoded());



app.get('/login',(req,res)=>{
var user=req.body.username;
var pass=req.body.password;


if(user=='admin'&&pass==1234)
{
    res.send('success');
}
else
{
res.send('failed')
}
});


app.get('/',(req,res)=>{
    res.render('index')
});
app.get('/about',(req,res)=>{
    res.render('about')
});
app.get('/contact',(req,res)=>{
    res.render('contact')
});
app.get('/gallery',(req,res)=>{
    res.render('Gallery')
});
app.listen(5001);