const mongoose=require('mongoose');
const timestamps=require('mongoose-timestamps');
const Schema=mongoose.Schema;
const UserSchema=new Schema({

    firstName: { type: String,  require: true },
    lastName: { type: String, default:'' },
    mobileNo: { type: String },
    email: { type: String, require: true },
    password: { type: String,  require: true },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zipCode: { type: String },
    userType : { type : Number, default:1, enum : [1,2]},  // 1 for user 2 for admim
    status : { type : String, default:'active', enum : ['active','disable']}, 
    userImage : { type: String},
    createdAt: Date,
    updatedAt: Date
    
})
UserSchema.plugin(timestamps, { index: true });
module.exports=mongoose.model('User',UserSchema);