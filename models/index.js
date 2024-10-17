const mongoose = require('mongoose')
const actorSchema = require('./Actor')
const moviechema = require('./Movie')
const reviewSchema = require('./Review')

const Actor = mongoose.model('Actor', actorSchema)
const Movie = mongoose.model('Movie', moviechema)
const Review = mongoose.model('Review', reviewSchema)
module.exports = {
    Actor,
    Movie,
    Review
  
}
