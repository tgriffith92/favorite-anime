const mongoose = require('./connection.js')


const ReviewsSchema = new mongoose.Schema({
 name: String,
 rating: String,
 reviews: String
})


const ReviewsCollection = mongoose.model('Reviews', ReviewsSchema)

const getAllReviews = () => {
    return ReviewsCollection.find();
}

const getReview = (reviewId) => {
    return ReviewsCollection.findById(reviewId);
}

const addReview = (review) => {
    return ReviewsCollection.create(review);
}

const editReview = (reviewId, updatedId) => {
    return ReviewsCollection.findByIdAndUpdate(reviewId, updatedId);
}

const deleteReview = (reviewId) => {
    return ReviewsCollection.findByIdAndDelete(reviewId);
}

module.exports = {
  getAllReviews,
  getReview,
  addReview,
  editReview,
  deleteReview
}
