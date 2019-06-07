const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});

//build schema
let reviewSchema = mongoose.Schema({
  id: Number,
  reviewer: String,
  reviewer_text: String,
  picture_text: String,
  date_posted: String,
  rating: String,
  restaurant_id: Number

});

//create model
let Review = mongoose.model('Review', reviewSchema);