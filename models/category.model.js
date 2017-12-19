const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        // enum: ['book']
    }
});

module.exports = mongoose.model('Category', categorySchema);