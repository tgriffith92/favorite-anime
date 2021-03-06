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
const reviewsApi = require('../models/reviews.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const reviewsRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */


reviewsRouter.get('/', (req, res) => {
  console.log('allReviews')
  reviewsApi.getAllReviews().then((allReviews) => {
      
      res.render('allReviews', {allReviews});
  })

}) 

reviewsRouter.get('/review', (req, res) => {
  console.log('review');
  res.render('createReview');
})

reviewsRouter.get('/:reviewId', (req, res) => {
  console.log('reviewId');
  reviewsApi.getReview(req.params.reviewId)
  .then((review) => {
      res.render('review', {review});
  });
})

reviewsRouter.get('/:reviewId/individual', (req, res) => {
  console.log('reviewId');
  reviewsApi.getReview(req.params.reviewId)
  .then((editReview) => {
      res.render('editReview', {editReview});
  });
})

reviewsRouter.post('/', (req, res) => {
  console.log('post');
  reviewsApi.addReview(req.body)
  .then(() => {
      res.redirect('/animeReviews');
  })
})

reviewsRouter.put('/:reviewId', (req, res) => {
  reviewsApi.editReview(req.params.reviewId, req.body)
  .then((editReview) => {
      res.render('editReview', {editReview});
      res.redirect('/animeReviews');
  })
})

reviewsRouter.delete('/:reviewId', (req, res) => {
  reviewsApi.deleteReview(req.params.reviewId)
  .then(() => {
      res.redirect('/animeReviews');
  })
})

/* Step 5
 *
 * Export the router from the file.
 *
 */
module.exports = {
  reviewsRouter
}