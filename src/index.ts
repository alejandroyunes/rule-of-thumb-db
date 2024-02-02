import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectToDb } from './db/index'
import mongoose from "mongoose"
import PeopleSchema from "./models/peopleSchema"
import peopleData from './db/data'
dotenv.config()
const app = express()
const port = process.env.PORT || 4000

const corsOptions = {
  origin: ['http://localhost:3000/'],
  methods: 'POST',
};

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectToDb()


// peopleData.forEach(async (peopleData) => {
//   try {
//     const person = new PeopleSchema(peopleData);

//     await person.save();
//     console.log('Person inserted successfully:', person);
//   } catch (error: any) {
//     console.error('Error inserting person:', error.message);
//   }
// });

app.get('/people', async (req, res) => {
  try {
    // Use the find method on the model to retrieve all documents
    const people = await PeopleSchema.find({});

    // Send the retrieved people as a JSON response
    res.json(people);
  } catch (error: any) {
    console.error('Error retrieving people:', error.message);
    // Send an error response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`🚀 Express ready at http://localhost:${port}`)
})
