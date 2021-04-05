const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new resultSchema({
    nameResult: String,
    answertrue:String,
    answerfalse:String,
    results:String,
    courseID:{
        type:Number,
        default: 0
    },
    userID:{
        type:Number,
        default: 0
    },
    questionID:{
        type:Number,
        default: 0
    },

    f
});
const QUESTION_MODEL = mongoose.model('question', questionSchema);
 module.exports = QUESTION_MODEL;



