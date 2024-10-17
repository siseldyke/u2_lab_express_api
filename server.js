const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const models = require('./models')




const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Movies Database')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => res.send('Flight Planner'))


const getAllMovies= async (req, res) => {
    try {
        const movies = await models.Movie.find()
        res.json(movies)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}
app.get('/movies', getAllMovies)

const getAllActors= async (req, res) => {
  try {
      const actors = await models.Actor.find()
      res.json(actors)
  } catch (error) {
      return res.status(500).send(error.message);
  }
}
app.get('/actors', getAllActors)

const getAllReviews= async (req, res) => {
  try {
      const reviews = await models.Review.find()
      res.json(reviews)
  } catch (error) {
      return res.status(500).send(error.message);
  }
}
app.get('/reviews', getAllReviews)


const getMovieById = async (req, res) => {
  try {
      const { id } = req.params;
      const movie = await models.Movie.findById(id)
      if (movie) {
          return res.json(movie);
      }
      return res.status(404).send('man blockbuster never had this!');
  } catch (error) {
      return res.status(500).send('man blockbuster never had this!');
  }
}
app.get('/movies/:id', getMovieById)

const getActorById = async (req, res) => {
  try {
      const { id } = req.params;
      const actor = await models.Actor.findById(id)
      if (actor) {
          return res.json(actor);
      }
      return res.status(404).send('Thats not an actor in this database');
  } catch (error) {
      return res.status(500).send('Thats not an actor in this database');
  }
}
app.get('/actors/:id', getActorById)

const getReviewById = async (req, res) => {
  try {
      const { id } = req.params;
      const review = await models.Review.findById(id)
      if (review) {
          return res.json(review);
      }
      return res.status(404).send('Thats not a review we have recollection of');
  } catch (error) {
      return res.status(500).send('Thats not a review we have recollection of');
  }
}
app.get('/reviews/:id', getReviewById)