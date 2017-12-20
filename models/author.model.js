const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

authorSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model('Author', authorSchema);
