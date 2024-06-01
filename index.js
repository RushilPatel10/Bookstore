const express = require("express");

require('./config/database');

const userDB = require("./models/userTbl");

const { models } = require("mongoose");

const app = express();

app.set("view engine","ejs");

app.use(express.urlencoded({extended:false}));


// to get data on page
app.get('/',(req,res)=>{
  userDB.find().then((users)=>{
    console.log(users);
    return res.render('form',{users})
  }).catch((err)=>{
    console.log(err);
  })
  
})

// method for delete data
app.get('/deleteData',(req,res)=>{
  let id = req.query.id;
  console.log(id);
  userDB.findByIdAndDelete(id).then(() => {
      console.log("Data deleted successfully!");
      return res.redirect('/');
  }).catch((err) => {
      console.log(err);
      return false;
  })
})


// to get book data on page
app.get('/add',(req,res)=>{
  return res.render('bookAdd');
})
app.post('/add',(req,res)=>{
  console.log(req.body);
    const{image, name, price, Genre} = req.body
    userDB.create({
      image: image,
      name:name,
      Genre:Genre,
      price:price
    }).then((user) => {
      console.log("Data successfully Insert..");
      return res.redirect('/');
  }).catch((err) => {
      console.log(err)
      return false;
  })
})


// edit data code
app.get('/editData', (req, res) => {
  let id = req.query.id;
  userDB.findById(id).then((data) => {
      return res.render('edit', { data });
  }).catch((err) => {
      console.log(err);
      return false;
  })
})
app.post('/editData/:id', (req, res) => {
  const{image, name, price, Genre} = req.body
  const { id } = req.params
  userDB.findByIdAndUpdate(id,{image, name, price, Genre}).then((data)=>{
      console.log("Data Updated!");
      return res.redirect('/');

  }).catch((err)=>{
      console.log(err)
      return false;
  })
})

// app.listen for localhost
app.listen(8088,(err)=>{
  if(!err){
    console.log("server start http://localhost:8088");
  }
})