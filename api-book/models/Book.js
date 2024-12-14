const mongoose=require('mongoose');
const timestamps=require('mongoose-timestamps');
const Schema=mongoose.Schema;
const BookSchema=new Schema({

    bookName: { type: String },
    authorName: { type: String },
    description: { type: String },
    publisherName: { type: String },
    bookStatus : { type: String},
    price: { type: String },
    language: { type: String },
    quantity : { type : String},
    isbnNo : { type : String},
    bookImage : { type: String},
    createdAt: Date,
    updatedAt: Date,
    
})
BookSchema.plugin(timestamps, { index: true });
module.exports=mongoose.model('Book',BookSchema);