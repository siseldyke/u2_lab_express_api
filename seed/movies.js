const db = require('../db')
const {Movie} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const movies = [
  { title: 'the godfather',
    runTime: '180 minutes',
    rating: '67104d6327383f6867e2ac54',
    leadActor: '6711977dd66a612bf179fec0',
    yearReleased: 1972
  },
  {
    title: 'Black Panther',
    runTime: '180 minutes',
    rating: '67104d6327383f6867e2ac54',
    leadActor: '6711977dd66a612bf179fec5',
    yearReleased: 1972
  },
  {
    title: 'The Wizard of Oz',
    runTime: '180 minutes',
    rating: '67104d6327383f6867e2ac54',
    leadActor: '6711977dd66a612bf179fec3',
    yearReleased: 1972
  },
  {
    title: 'Citizen kane',
    runTime: '180 minutes',
    rating: '67104d6327383f6867e2ac54',
    leadActor: '6711977dd66a612bf179fec1',
    yearReleased: 1972
  },
  {
    title: 'fight club',
    runTime: '180 minutes',
    rating: '67104d6327383f6867e2ac54',
    leadActor: '6711977dd66a612bf179fec2',
    yearReleased: 1972
  },
  {
    title: 'crouching tiger hidden dragon',
    runTime: '123 minutes',
    rating: '67104d6327383f6867e2ac54',
    leadActor: '6711977dd66a612bf179fec4',
    yearReleased: 1972
  },
]
await Movie.insertMany(movies)
    console.log("Created some movies!")    
}
const run = async () => {
    await main()
    db.close()
}
run()