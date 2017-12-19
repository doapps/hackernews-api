let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Author = mongoose.model('Author');
let Category = mongoose.model('Category');

let publicationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now
    },
    authorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    }
});

module.exports = mongoose.model('Publication', publicationSchema);