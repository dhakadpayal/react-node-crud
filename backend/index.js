const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const UserModel  = require('./models/Users');

const app = express();
app.use(express.json())
app.use(cors());
mongoose.connect('mongodb://localhost:27017/curd')

app.get('/',(req,res)=>{
    UserModel.find({})
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err));
    
})
app.get('/getuser/:id',(req,res)=>{
    let id = req.params.id;
    UserModel.findById({_id:id})
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err));
    
})
app.post('/createusers',(req,res)=>{
    UserModel.create(req.body)
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err));
    
})
app.put('/updateuser/:id',(req,res)=>{
    let id = req.params.id;
    UserModel.findByIdAndUpdate({_id:id},
        {
            name:req.body.name,
            email:req.body.email,
            age:req.body.age,
        })
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err));
    
})
app.put('/deleteuser/:id',(req,res)=>{
    let id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then((users)=>res.json(users))
    .catch((err)=>res.json(err));
    
})


let port = 4000;
app.listen(()=>{
        console.log('listen port',port)
})