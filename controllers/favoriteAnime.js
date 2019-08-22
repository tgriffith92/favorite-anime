/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const animeApi = require('../models/favoriteAnime.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const animeRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

animeRouter.get('/', (req, res) => {
    console.log('allAnime')
    animeApi.getAllAnime().then((allAnime) => {
        
        res.render('allAnime', {allAnime});
    })

})

animeRouter.get('/favorite', (req, res) => {
    console.log('favorite');
    res.render('favoriteAnime');
})

animeApi.get('/favoriteId', (req, res) => {
    console.log('favoriteId');
    res.render('singleFavorite');
})

/* Step 5
 *
 * Export the router from the file.
 *
 */
module.exports = {
  animeRouter
}
