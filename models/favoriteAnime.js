const mongoose = require('./connection.js')

const FavoriteAnimeSchema = new mongoose.Schema({
 name: String,
 genre: String,
 age: Number,
 description: String
})

const AnimeCollection = mongoose.model('Sample', FavoriteAnimeSchema)

const getAllAnime = () => {
    return AnimeCollection.find();
}


module.exports = {
  getAllAnime
}
