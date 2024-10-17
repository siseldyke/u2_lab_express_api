const { Schema } = require('mongoose')

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    runTime: { type: String, required: true },
    rating: { type: Schema.Types.ObjectId, ref: 'Review' },
    leadActor:{type: Schema.Types.ObjectId, ref: 'Actor'},
    yearReleased: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = movieSchema