let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let authorSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Author', authorSchema);