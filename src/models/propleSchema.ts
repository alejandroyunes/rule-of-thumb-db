import mongoose, { Schema } from 'mongoose'

const peopleSchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  picture: String,
  lastUpdated: String,
  votes: {
    positive: Number,
    negative: Number,
  },
})

const PeopleSchema = mongoose.model('Contact', peopleSchema)

export default PeopleSchema