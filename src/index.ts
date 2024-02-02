import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

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

//should be in the .env file
const MONGO_DB = 'mongodb+srv://alejandrocano1988:4GeWSzs9SxbUszoL@cluster0.zwkc90c.mongodb.net/?retryWrites=true&w=majority'

const connectToDb = async () => {
  try {
    await mongoose.connect(`${MONGO_DB}`)
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};
connectToDb()

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(port, () => {
  console.log(`🚀 Express ready at http://localhost:${port}`)
})
