const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new courseSchema({
    nameCourse: String,
    description: String,
    image: String,
    
    
});
const COURSE_MODEL = mongoose.model('course', courseSchema);
module.exports = COURSE_MODEL;



