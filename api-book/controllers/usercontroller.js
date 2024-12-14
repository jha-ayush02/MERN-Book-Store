const User = require('../models/User');

async function addUser(req, res) {
    try {
        let user = await User.findOne({ email : req.body.email });
        if(user){
            res.status(400).send({ success: false, message: 'User ALready exists...'});
        }
        else{
            user = new User(req.body);
            await user.save();
            res.status(200).send({ success: true, message: 'User added successfully' });
        }
    } catch (error) {
        res.status(400).send({success:false, message: error.message});
    }
};

async function getUsers(req,res) {
    try {
        let users = await User.find({});
        console.log('Users ', users);
        res.status(200).send({ success: true, data: users });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, data:{} });
    }
};

module.exports = {
    addUser,
    getUsers,
};