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
  console.log('allFirsts')
  firstAnimeApi.getAllFirstAnime().then((allFirst) => {
      
      res.render('allFirsts', {allFirst});
  })

})

firstAnimeRouter.get('/initial', (req, res) => {
  console.log('firstAnime');
  res.render('firstAnime');
})

firstAnimeRouter.get('/:firstId', (req, res) => {
  console.log('firstId');
  firstAnimeApi.getFirstAnime(req.params.firstId)
  .then((singleFirst) => {
      res.render('singleFirst', {singleFirst});
  });
})

firstAnimeRouter.post('/', (req, res) => {
  console.log('post');
  firstAnimeApi.addFirstAnime(req.body)
  .then(() => {
      res.redirect('/firstAnime');
  })
})

/* Step 5
 *
 * Export the router from the file.
 *
 */
module.exports = {
  firstAnimeRouter
}