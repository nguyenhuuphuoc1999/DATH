const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

 const userSchema = new userSchema({

    userName: String,

    passWord: String,

    age: String,

    address: String,

    phone: String,

    avatar: String,

    status:{
        type: Number,
        default: 0
    },

    dateCreate:{
        type: Date,
        default: Date.now()
    },

    owner:{
        type: Schema.Types.ObjectId,
        default: "user"
    }



 });

 const USER_MODEL = mongoose.model('user', userSchema);
 module.exports = USER_MODEL;

