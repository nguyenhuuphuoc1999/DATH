const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const examSchema = new examSchema({
    nameExam: String,
    description: String,
    image: String,
    courseID:{
        type:Number,
        default: 0
    },
    
});
const EXAM_MODEL = mongoose.model('exam', examSchema);
 module.exports = EXAM_MODEL;



