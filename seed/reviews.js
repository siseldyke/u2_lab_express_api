const db = require('../db')
const {Review} = require('../models/')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

const reviews =[
    {
        score: '100/100',
        comment: 'perfect in every way'
    },
    
    {
        score: '80/100',
    comment: 'movie is very good'
    },
    {
        score: '95/100',
    comment: 'movie is a masterpiece'
    },
    {
        score: '25/100',
    comment: 'movie is awful'
    },
]
await Review.insertMany(reviews)
    console.log("Created some reviews!")    
}
const run = async () => {
    await main()
    db.close()
}
run()