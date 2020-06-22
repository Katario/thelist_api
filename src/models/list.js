import mongoose from 'mongoose';

const List = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter a title'],
    index: true,
  },
  author: String,
  type: String,
  template: [{
    blankTemplate: {
      content: Object
    }
  }],
  created: { type: Date, default: Date.now },
  updated: Date
});

export default mongoose.model('List', List);
