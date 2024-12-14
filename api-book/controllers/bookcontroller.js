const Book = require('../models/Book');
const cloudinary = require('cloudinary').v2;


async function addBook(req,res){
    try {
        cloudinary.config({
            cloud_name: 'dw3c4qkni',
            api_key: '647486813721568',
            api_secret: 'mzHUu7-nNCSpSV3vjpOIYrcJKYs',
        })
        const upload = await cloudinary.uploader.upload(req.file.path);
        req.body.bookImage = upload.secure_url;
        let book = new Book(req.body)
        await book.save();
        res.status(200).send({ success: true });
    }catch (err){
        console.log(err.response? err.response.data : err.message);
        res.status(500).send({ success: false });
    }
}

async function getBooks(req,res){
    try{
        // let books=await Book.find({});
        let limit = req.query.limit;
        let page = req.query.page;
        let count = await Book.countDocuments({});
        let books = await Book.find({
            $or: [
            { bookName : new RegExp(req.query.search, 'i')},
            { authorName : new RegExp(req.query.search, 'i')},
            { language : new RegExp(req.query.search, 'i')}
    ],
})
    .skip((page-1)*limit)
    .limit(limit);

        res.status(200).send({ success: true, data: books, totalCounts: count });
    }catch(err){
        res.status(400).send({ success : false, message : 'Error occured while fetching data from database'});
    }
}

async function getBookForEdit(req,res) {
    try {
        let id = req.params.id;
        let book = await Book.findOne({_id : id});   // either write line 23 and 24 or only 25
        // let book = await Book.findById(req.params.id);
        if(!book) {
            return res.status(404).send({ success: false, message: 'Book not found' });
        }
        res.status(200).send({ success: true, data: book });
    } catch (err) {
        res.status(500).send({ success: false });
    }
}

async function updateBook(req,res) {
    try {
        cloudinary.config({
            cloud_name: 'dw3c4qkni',
            api_key: '647486813721568',
            api_secret: 'mzHUu7-nNCSpSV3vjpOIYrcJKYs',
        });

        let id = req.params.id;
        let book = await Book.findOne({ _id : id });
        //Updating book details
        if (req.file) {
            const upload = await cloudinary.uploader.upload(req.file.path);
            console.log(upload);
            book.bookImage = upload.secure_url; // Update bookImage only if a new image is uploaded
        }
        book.bookName = req.body.bookName;
        book.authorName = req.body.authorName;
        book.description = req.body.description;
        book.publisherName = req.body.publisherName;
        book.price = req.body.price;
        book.language = req.body.language;
        book.quantity = req.body.quantity;
        book.isbnNo = req.body.isbnNo;

        await book.save();
        res.status(200).send({ success: true, message: 'Book updated successfully' });
    } catch (error) {
        res.status(400).send({ success : false, message : `Error Occured ${error}`});
    }
} 

async function deleteBook(req,res) {
    try {
        let id = req.params.id;
        await Book.deleteOne({_id :id});
        res.status(200).send({ success: true, message: 'Book deleted successfully' });
    } catch (error) {
        res.status(400).send({ success : false, message : `Error Occured ${error}`});
    }
}


module.exports = {
    addBook,
    getBooks,
    getBookForEdit,
    updateBook,
    deleteBook,
}