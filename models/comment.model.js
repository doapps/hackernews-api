const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  authorId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Author',
  },
  publicationId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Publication',
  },
});

commentSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model('Comment', commentSchema);
