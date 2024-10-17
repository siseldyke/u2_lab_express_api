const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    score: { type: String, required: true },
    comment: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = reviewSchema