const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new questionSchema({
    nameQuestion: String,
    answer: String,
    image: String,
    times: Time.now(),
    courseID:{
        type:Number,
        default: 0
    },
    userID:{
        type:Number,
        default: 0
    },

    
});
const QUESTION_MODEL = mongoose.model('question', questionSchema);
 module.exports = QUESTION_MODEL;



