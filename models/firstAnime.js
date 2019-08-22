const mongoose = require('./connection.js')


const FirstAnimeSchema = new mongoose.Schema({
 firstName: String,
 year: Number,
 firstAnime: String
})


const FirstAnimeCollection = mongoose.model('First', FirstAnimeSchema)

const getAllFirstAnime = () => {
    return FirstAnimeCollection.find();
}

const getFirstAnime = (firstId) => {
    return FirstAnimeCollection.findById(firstId);
}

const addFirstAnime = (firstAnime) => {
    return FirstAnimeCollection.create(firstAnime);
}

const editFirstAnime = (firstId, updatedAnime) => {
    return FirstAnimeCollection.findByIdAndUpdate(firstId, updatedAnime);
}

const deleteFirstAnime = (firstId) => {
    return FirstAnimeCollection.findByIdAndDelete(firstId);
}

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllFirstAnime,
  getFirstAnime, 
  addFirstAnime,
  editFirstAnime,
  deleteFirstAnime
}
