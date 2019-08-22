const mongoose = require('./connection.js')

const FavoriteAnimeSchema = new mongoose.Schema({
 name: String,   
 favorite: String,
 genre: String,
 age: Number,
 description: String
})

const AnimeCollection = mongoose.model('Favorite', FavoriteAnimeSchema)

const getAllAnime = () => {
    return AnimeCollection.find();
}

const getAnime = (animeId) => {
    return AnimeCollection.findById(animeId);
}

const addAnime = (newAnime) => {
    return AnimeCollection.create(newAnime);
}

const editAnime = (animeId, updatedAnime) => {
    return AnimeCollection.findByIdAndUpdate(animeId, updatedAnime);
}

const deleteAnime = (animeId) => {
    return AnimeCollection.findByIdAndDelete(animeId);
}

module.exports = {
  getAllAnime, 
  getAnime,
  addAnime,
  editAnime,
  deleteAnime
}
