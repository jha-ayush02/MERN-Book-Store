const express = require('express');
const multer = require('multer');
const bodyParser=require('body-parser');
const bookcontroller=require('../controllers/bookcontroller');
const route = express.Router();


route.use(bodyParser.json());
route.use(bodyParser.urlencoded({
    extended: false
}));

const uploader = multer({
    storage : multer.diskStorage({}),
    limits : { fileSize: 10* 1024* 1024 },
})

route.post('/add/book', uploader.single('image'), (req,res)=>{
    bookcontroller.addBook(req,res);
});

route.get('/books', (req,res)=>{
    bookcontroller.getBooks(req,res);
})

route.get('/edit/book/:id',(req,res)=>{
    bookcontroller.getBookForEdit(req,res);
})

route.put('/update/book/:id',uploader.single('bookImage'),(req,res)=>{
    console.log("Updating book...")
    bookcontroller.updateBook(req,res);
})

route.delete('/delete/book/:id',(req,res)=>{
    bookcontroller.deleteBook(req,res);
})

module.exports=route;
