const express =  require("express");

const  bodyParse = require("body-parser");

const app=express();

var item=["BUY FOOD","EAT FOOD","EATING "];

app.set('view engine','ejs');

app.use(bodyParse.urlencoded({extended:true}));
app.use(express.static((__dirname+"/public")));

const images=[{Image:"images/todolist.jpg"}];

app.get("/",function(request,response){
    var today=new Date();
    var option={
        weekday:"long",
        day:"numeric",
        month:"numeric",
        year:"numeric",
        
    }
    var day=today.toLocaleDateString("en-US",option);
   
    response.render("list",{Day:day,newitems:item});
})


app.post("/",function(req,res){
    let it=req.body.newitems;
    if(it.length>0)
    {
        item.push(req.body.newitems);
        res.redirect("/");
    }
    
});



app.listen(8080,function(){
    console.log("server is running");
});