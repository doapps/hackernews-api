let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let commentSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    commentId: {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
});

module.exports = mongoose.model('Comment', commentSchema);