const mongoose = require('./connection.js')


const ReviewsSchema = new mongoose.Schema({
 name: String,
 reviews: String
})


const ReviewsCollection = mongoose.model('Reviews', ReviewsSchema)




module.exports = {
  
}
