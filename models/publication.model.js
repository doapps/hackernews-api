const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publicationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
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
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Category',
  },
});

publicationSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model('Publication', publicationSchema);
