const db = require('../db')
const {Actor} = require('../models/')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
const actors = [
    {
        name: 'Al Pacino',
        age: 84,
        alive: 'yes',
        image: 'alpacino.png'
    },
    {
        name: 'Orson Welles',
        age: 70,
        alive: 'no',
        image: 'orsonwelles.png'
    },
    {
        name: 'Brad Pitt',
        age: 60,
        alive: 'yes',
        image: 'bradpitt.png'
    },
    {
        name: 'Judy Garland',
        age: 47,
        alive: 'no',
        image: 'judygarland.png'
    },
    {
        name: 'michelle yeoh',
        age: 62,
        alive: 'yes',
        image: 'michelleyeoh.png'
    },
    {
        name: 'chadwick boseman',
        age: 43,
        alive: 'no',
        image: 'chadwickboseman.png'
    },
    {
        name: 'Marlon Brando',
        age: 80,
        alive: 'no',
        image: 'marlonbrando.png'
    },
    {
        name: 'michael b jordan',
        age: 37,
        alive: 'yes',
        image: 'michaelbjordan.png'
    },
    {
        name: 'edward norton',
        age: 55,
        alive: 'yes',
        image: 'edwardnorton.png'
    },
    {
        name: 'chadwick boseman',
        age: 43,
        alive: 'no',
        image: 'chadwickboseman.png'
    },
   
  ]
  
  await Actor.insertMany(actors)
    console.log('created actors')

}

const run = async () => {
  await main()
  db.close()
}
run()