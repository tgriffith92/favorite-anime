const mongoose = require('./connection.js')

const FavoriteAnimeSchema = new mongoose.Schema({
 name: String,
 genre: String,
 age: Number,
 description: String
})

const AnimeCollection = mongoose.model('Favorite', FavoriteAnimeSchema)

const getAllAnime = () => {
    return AnimeCollection.find();
}

const getAnime = () => {

}

const addAnime = () => {

}

const editAnime = () => {

}

const deleteAnime = () => {

}

module.exports = {
  getAllAnime, 
  getAnime,
  addAnime,
  editAnime,
  deleteAnime
}
