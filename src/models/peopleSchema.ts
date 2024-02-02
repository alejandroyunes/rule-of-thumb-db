import mongoose from 'mongoose'

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

const PeopleSchema = mongoose.model('People', peopleSchema)

export default PeopleSchema