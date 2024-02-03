import mongoose, { Document } from 'mongoose';

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
});

export interface IPeople extends Document {
  name: string
  description: string
  category: string
  picture: string
  lastUpdated: string
  votes: {
    positive: number
    negative: number
  };
}

const PeopleSchema = mongoose.model<IPeople>('People', peopleSchema);

export default PeopleSchema;
