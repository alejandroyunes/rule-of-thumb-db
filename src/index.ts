import express, { Request, Response } from 'express'
import cors from "cors"
import dotenv from "dotenv"
import { connectToDb } from './db/index'
import PeopleSchema from "./models/peopleSchema"
import { calculatePercentage } from './utils/calculatePercentage'

dotenv.config()
const app = express()
const port = process.env.PORT || 4000

const corsOptions = {
  origin: ['http://localhost:3000'],
  methods: ['POST', 'GET', 'PATCH'],
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectToDb()

app.get('/people', async (_, res: Response) => {
  try {
    const people = await PeopleSchema.find({})

    const formattedData = people.map(person => ({
      _id: person._id,
      name: person.name,
      description: person.description,
      category: person.category,
      picture: person.picture,
      lastUpdated: person.lastUpdated,
      __v: person.__v,
      negativePercentage: calculatePercentage(person.votes.negative, person.votes.positive + person.votes.negative),
      positivePercentage: calculatePercentage(person.votes.positive, person.votes.positive + person.votes.negative),
    }))

    res.json(formattedData)
  } catch (error: any) {
    console.error('Error retrieving people:', error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.patch('/people/:id', async (req, res) => {
  const { id } = req.params
  const { votes } = req.body

  try {
    const { positive, negative } = votes
    const updateObject: Record<string, number> = {}

    if (positive) {
      updateObject['votes.positive'] = 1
    }
    if (negative) {
      updateObject['votes.negative'] = 1
    }

    const person = await PeopleSchema.findByIdAndUpdate(
      id,
      {
        $inc: updateObject,
      },
      { new: true }
    )

    if (!person) {
      return res.status(404).json({ error: 'Person not found' })
    }

    return res.json(person)
  } catch (error: any) {
    console.error('Error updating votes:', error.message)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})



app.listen(port, () => {
  console.log(`🚀 Express ready at http://localhost:${port}`)
})
