import  express  from "express";
let congigViewEngine = app =>{
  app.use(express.static("./src/public"));
  app.set("view engine",'ejs');
  app.set("view","./src/views")
}

module.exports= congigViewEngine