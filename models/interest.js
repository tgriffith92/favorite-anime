const mongoose = require('./connection.js')


const FirstAnimeSchema = new mongoose.Schema({
 name: String,
 startDate: Date,
 firstAnime: String
})


const FirstAnimeCollection = mongoose.model('First', FirstAnimeSchema)



/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  
}
