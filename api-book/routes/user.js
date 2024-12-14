const express = require('express');
const multer = require('multer');
const bodyParser=require('body-parser');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller');


router.post('/add/user',(req,res)=>{
    usercontroller.addUser(req,res);
})

router.get('/users',(req,res)=>{
    usercontroller.getUsers(req,res);
})

module.exports = router;