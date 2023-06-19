const { Schema, model } = require('mongoose');


const nutritionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  water: {
    type: Number,
    required: true,
  },
  sleep: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
});


const nutrition = model('nutrition', nutritionSchema);

module.exports = nutrition;
