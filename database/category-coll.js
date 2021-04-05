const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new categorySchema({
    nameCategory: String,
    description: String,
    image: String,
    status:{
        type: Number,
        default: 0
    },
    
});
const CATEGORY_MODEL = mongoose.model('category', categorySchema);
 module.exports = CATEGORY_MODEL;



