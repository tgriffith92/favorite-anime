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
const firstAnimeApi = require('../models/firstAnime.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const firstAnimeRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

firstAnimeRouter.get('/', (req, res) => {
  console.log('firstAnime')
  firstAnimeApi.getAllFirstAnime().then((allFirst) => {
      
      res.render('firstAnime', {allFirst});
  })

})

firstAnimeRouter.get('/firstAnime', (req, res) => {
  console.log('firstAnime');
  res.render('firstAnime');
})

/* Step 5
 *
 * Export the router from the file.
 *
 */
module.exports = {
  firstAnimeRouter
}