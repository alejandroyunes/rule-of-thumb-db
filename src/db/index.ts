import mongoose from "mongoose";

//should be in the .env file so you just have to npm i and then npm run dev
const MONGO_DB = 'mongodb+srv://alejandrocano1988:4GeWSzs9SxbUszoL@cluster0.zwkc90c.mongodb.net/?retryWrites=true&w=majority'

export const connectToDb = async () => {
  try {
    await mongoose.connect(`${MONGO_DB}`)
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};
